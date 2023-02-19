import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';

@Controller('cat')
@ApiTags('Cat')
export class CatController {
  constructor(private readonly catService: CatService) {}
  @Get('breed/:breed')
  @ApiResponse({
    status: 200,
    description: 'Single breed information',
  })
  @ApiProperty()
  getBreed(@Param('breed') breed: string) {
    return this.catService.getBreed(breed);
  }

  @Get('breedPhotos/:breed')
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
  getBreeds(@Query('limit', ParseIntPipe) limit: number) {
    return this.catService.getBreeds(limit);
  }
}
