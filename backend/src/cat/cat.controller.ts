import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CacheInterceptor } from '@nestjs/common/cache';

@Controller('cat')
@ApiTags('Cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get('breed/:breed')
  @UseInterceptors(CacheInterceptor)
  @ApiResponse({
    status: 200,
    description: 'Single breed information',
  })
  @ApiProperty()
  getBreed(@Param('breed') breed: string) {
    return this.catService.getBreed(breed);
  }

  @Get('breedPhotos/:breed')
  @UseInterceptors(CacheInterceptor)
  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'Breed photos',
  })
  getBreedPhotos(
    @Param('breed') breed: string,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    return this.catService.getBreedPhotos(breed, limit);
  }

  @Get('breeds')
  @ApiProperty()
  @ApiResponse({
    status: 200,
    description: 'Breeds information',
  })
  @UseInterceptors(CacheInterceptor)
  getBreeds(@Query('limit', ParseIntPipe) limit: number) {
    return this.catService.getBreeds(limit);
  }
}
