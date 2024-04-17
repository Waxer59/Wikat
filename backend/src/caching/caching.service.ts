import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CachingService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCacheKey(key: string): Promise<string | null> {
    try {
      const value = await this.cacheManager.get(key);
      return value as unknown as string;
    } catch (error) {
      return null;
    }
  }

  async setCacheKey(key: string, value: string): Promise<void> {
    try {
      await this.cacheManager.set(key, value);
    } catch (error) {}
  }

  async deleteCacheKey(key: string): Promise<void> {
    try {
      await this.cacheManager.del(key);
    } catch (error) {}
  }

  async resetCache(): Promise<void> {
    try {
      await this.cacheManager.reset();
    } catch (error) {}
  }
}
