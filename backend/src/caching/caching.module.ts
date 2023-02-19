import { Module } from '@nestjs/common';
import { CachingService } from './caching.service';

@Module({
  controllers: [],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
