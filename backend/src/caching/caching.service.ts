import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CachingService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getCacheKey(key: string): Promise<string> {
    const value = await this.cacheManager.get(key);
    return value as unknown as string;
  }
  async setCacheKey(key: string, value: string): Promise<any> {
    const setedValue = await this.cacheManager.set(key, value);
    return setedValue;
  }
  async deleteCacheKey(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
  async resetCache(): Promise<void> {
    await this.cacheManager.reset();
  }
}
