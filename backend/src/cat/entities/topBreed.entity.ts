import { Entity, Schema } from 'redis-om';

export class TopBreeds extends Entity {
  breedId: string;
  timesSearched: number;
}

export const topBreedsSchema = new Schema(TopBreeds, {
  breedId: { type: 'string' },
  timesSearched: { type: 'number' },
});
