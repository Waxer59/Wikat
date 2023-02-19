import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { Breed } from '../common/interfaces/catApiResponse.interface';

@Injectable()
export class CatService {
  constructor(private readonly http: AxiosAdapter) {}

  async getBreed(breed: string): Promise<Breed> {
    return await this.http.get(`/images/search?breed_ids=${breed}`);
  }

  async getBreeds(limit: number) {
    return await this.http.get(`/images/search?limit=${limit}&has_breeds=1`);
  }

  async getBreedPhotos(breed: string, limit: number) {
    return await this.http.get(
      `/images/search?limit=${limit}&breed_ids=${breed}`,
    );
  }
}
