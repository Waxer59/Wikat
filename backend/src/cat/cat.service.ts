import { topBreedsSchema } from './entities/topBreed.entity';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import {
  Breed,
  BreedElement,
} from '../common/interfaces/catApiResponse.interface';
import { CachingService } from '../caching/caching.service';
import { RedisClientService } from '../redis-client/redis-client.service';
import { Repository } from 'redis-om';
import { TopBreeds } from './entities/topBreed.entity';

@Injectable()
export class CatService implements OnModuleInit {
  private readonly topBreedsRepository: Repository<TopBreeds>;

  constructor(
    private readonly http: AxiosAdapter,
    private readonly cache: CachingService,
    private readonly redisClient: RedisClientService,
  ) {
    this.topBreedsRepository = redisClient.fetchRepository(topBreedsSchema);
  }

  async getBreed(breedId: string): Promise<Breed> {
    const breeData: Breed = await this.http.get(
      `/images/search?breed_ids=${breedId}&size=small`,
    );
    return breeData;
  }

  async getBreedsImages(limit: number, info: string) {
    return await this.http.get(
      `/images/search?${
        limit ? `limit=${limit}&` : ''
      }has_breeds=${info}&size=small`,
    );
  }

  async getBreedPhotos(breed: string, limit: number) {
    return await this.http.get(
      `/images/search?limit=${limit}&breed_ids=${breed}&has_breeds=0&size=small`,
    );
  }

  async getBreeds(limit: number, filterName: string) {
    const CACHE_KEY = `breeds${limit ? `-${limit}` : ''}`;

    let response: BreedElement[] = JSON.parse(
      await this.cache.getCacheKey(CACHE_KEY),
    );

    if (!response) {
      response = await this.http.get(`/breeds?limit=${limit}`);
      await this.cache.setCacheKey(CACHE_KEY, JSON.stringify(response));
    }

    if (filterName) {
      response = response.filter((el) =>
        el.name.toLowerCase().includes(filterName.toLowerCase()),
      );
    }

    return response;
  }

  async getAllTopBreeds(limit = 10, offset = 0) {
    const breeds = await this.topBreedsRepository
      .search()
      .sortDesc('timesSearched')
      .return.page(offset, limit);
    const fetchBreedsData = [];
    breeds.forEach(({ breedId }) => {
      fetchBreedsData.push(
        this.http.get(`/images/search?breed_ids=${breedId}&size=small`),
      );
    });
    return Promise.all(fetchBreedsData);
  }

  async getTopBreed(breedId: string) {
    const breed = await this.topBreedsRepository
      .search()
      .where('breedId')
      .equals(breedId)
      .return.all();
    return breed.length <= 0 ? null : breed;
  }

  async createTopBreed(breedId: string) {
    const breed = await this.topBreedsRepository.createAndSave({
      breedId,
      timesSearched: 1,
    });
    return breed;
  }

  async incrementTopBreeds(breedId: string) {
    if (!this.getTopBreed(breedId)) {
      this.createTopBreed(breedId);
    }
    const breed = await this.topBreedsRepository.fetch(breedId);
    breed.timesSearched += 1;
    breed.breedId = breedId;
    await this.topBreedsRepository.save(breed);
    return breed;
  }

  public async onModuleInit() {
    await this.topBreedsRepository.createIndex();
  }
}
