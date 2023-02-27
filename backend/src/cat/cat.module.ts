import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { CommonModule } from '../common/common.module';
import { CachingModule } from '../caching/caching.module';
import { RedisClientModule } from '../redis-client/redis-client.module';

@Module({
  imports: [CommonModule, CachingModule, RedisClientModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
