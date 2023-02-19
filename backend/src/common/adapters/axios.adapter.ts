import { HttpAdapter } from '../interfaces/http-adapter.interface';
import axios, { AxiosInstance } from 'axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  constructor(private readonly configService: ConfigService) {}

  private readonly axios: AxiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
      'x-api-key': this.configService.get('API_KEY_CAT'),
    },
  });
  private readonly logger = new Logger('Axios');

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
