import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import { CachingModule } from './caching/caching.module';
import { CatModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';
import { RedisClientModule } from './redis-client/redis-client.module';
import {
  CacheModule,
  CacheModuleAsyncOptions,
  CacheStore,
} from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.registerAsync<CacheModuleAsyncOptions>({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const store = await redisStore({
          socket: {
            host: configService.get('REDIS_HOST'),
            port: +configService.get('REDIS_PORT'),
          },
          username: configService.get('REDIS_USERNAME'),
          password: configService.get('REDIS_PASSWORD'),
          ttl: 600, // <-- 600s = 10 mins ( ttl = Time To Live )
        });
        return {
          store: store as unknown as CacheStore,
        };
      },
      isGlobal: true,
    }),
    CachingModule,
    CatModule,
    CommonModule,
    RedisClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
