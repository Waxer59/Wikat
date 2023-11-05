import { Schema } from 'redis-om';

export const topBreedsSchema = new Schema('TopBreeds', {
  breedId: { type: 'string' },
  timesSearched: { type: 'number', sortable: true },
});
