import { Module } from '@nestjs/common';
import type { CacheStore } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { redisFactory } from './redis.factory';

@Module({
  imports: [
    redisFactory('SECURE', {
      store: redisStore as unknown as CacheStore,
      host: '',
      port: 17644,
      username: 'default',
      password: '',
      isGlobal: true,
    }),
  ],
})
export class RedisModule {}
