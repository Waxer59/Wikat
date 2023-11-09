import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CatsService } from '../../cats/cats.service';

export interface Response<T> {
  data: T;
}

@Injectable()
export class IncrementBreedTimesViewedInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private readonly catsService: CatsService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const http = context.switchToHttp();
    const request = http.getRequest();

    const { params } = request;
    const { breed } = params;

    this.catsService.incrementTopBreeds(breed);

    return next.handle();
  }
}
