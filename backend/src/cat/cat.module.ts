import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { CommonModule } from '../common/common.module';
import { CachingModule } from '../caching/caching.module';

@Module({
  imports: [CommonModule, CachingModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
