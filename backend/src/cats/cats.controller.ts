import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ParseOptionalIntPipe } from '../common/pipes/parse-optional-int.pipe';
import { IncrementBreedTimesViewedInterceptor } from '../common/interceptors/incrementBreedTimesViewed.interceptor';

@Controller('cats')
@ApiTags('Cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('breed/:breed')
  @UseInterceptors(IncrementBreedTimesViewedInterceptor, CacheInterceptor)
  @ApiResponse({
    status: 200,
    description: 'Single breed information',
  })
  @ApiProperty()
  getBreed(@Param('breed') breed: string) {
    return this.catsService.getBreed(breed);
  }

  @Get('breedImages/:breed')
  @UseInterceptors(CacheInterceptor)
  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'Breed photos',
  })
  getBreedImages(
    @Param('breed') breed: string,
    @Query('limit', ParseOptionalIntPipe) limit: number,
  ) {
    return this.catsService.getBreedImages(breed, limit);
  }

  @Get('breedsImages')
  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'Breeds images',
  })
  @UseInterceptors(CacheInterceptor)
  getBreedsImages(
    @Query('limit', ParseOptionalIntPipe) limit?: number,
    @Query('info') info = '1',
  ) {
    return this.catsService.getBreedsImages(limit, info);
  }

  @Get('breeds')
  @UseInterceptors(CacheInterceptor)
  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'Breeds information',
  })
  getBreeds(
    @Query('limit', ParseOptionalIntPipe) limit,
    @Query('filter') filterName = '',
  ) {
    return this.catsService.getBreeds(limit ?? '', filterName);
  }

  @Get('/topBreeds')
  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'TopBreeds information',
  })
  async getTopBreeds(
    @Query('limit', ParseOptionalIntPipe) limit,
    @Query('offset', ParseOptionalIntPipe) offset,
  ) {
    return this.catsService.getAllTopBreeds(limit, offset);
  }
}
