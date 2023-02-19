import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
  imports: [ConfigModule],
})
export class CommonModule {}
