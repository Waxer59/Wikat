import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CatService } from '../../cat/cat.service';

export interface Response<T> {
  data: T;
}

@Injectable()
export class IncrementBreedTimesViewedInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private readonly catService: CatService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const http = context.switchToHttp();
    const request = http.getRequest();

    const { params } = request;
    const { breed } = params;

    this.catService.incrementTopBreeds(breed);

    return next.handle();
  }
}
