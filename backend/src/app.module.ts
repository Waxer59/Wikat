import {
  CacheModule,
  CacheModuleAsyncOptions,
  CacheStore,
  Module,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.registerAsync<CacheModuleAsyncOptions>({
      isGlobal: true,
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
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
