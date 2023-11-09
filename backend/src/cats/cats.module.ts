import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CommonModule } from '../common/common.module';
import { CachingModule } from '../caching/caching.module';
import { RedisClientModule } from '../redis-client/redis-client.module';

@Module({
  imports: [CommonModule, CachingModule, RedisClientModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatModule {}
