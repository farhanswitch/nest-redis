import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private redis: Cache) {}
  getHello(): string {
    return 'Hello World!';
  }
  async getRedis() {
    return await this.redis.get('az');
    return await this.redis.set('az', 'aku', {
      ttl: 0,
    });
  }
}
