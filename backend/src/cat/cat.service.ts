import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { Breed } from '../common/interfaces/catApiResponse.interface';
import { CachingService } from '../caching/caching.service';

@Injectable()
export class CatService {
  constructor(
    private readonly http: AxiosAdapter,
    private readonly cache: CachingService,
  ) {}

  async getBreed(breed: string): Promise<Breed> {
    const breeData = await this.http.get(`/images/search?breed_ids=${breed}`);
    return breeData as Breed;
  }

  async getBreeds(limit: number) {
    return await this.http.get(`/images/search?limit=${limit}&has_breeds=1`);
  }

  async getBreedPhotos(breed: string, limit: number) {
    return await this.http.get(
      `/images/search?limit=${limit}&breed_ids=${breed}&has_breeds=0`,
    );
  }
}
