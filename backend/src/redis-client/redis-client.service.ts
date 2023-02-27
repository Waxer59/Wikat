import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Client } from 'redis-om';

@Injectable()
export class RedisClientService extends Client implements OnModuleDestroy {
  constructor() {
    super();
    (async () => {
      await this.open(
        `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      );
    })();
  }

  public async onModuleDestroy() {
    await this.close();
  }
}
