import { CacheModule } from '@nestjs/cache-manager';
import type { DynamicModule } from '@nestjs/common';
import type { CacheStore, CacheStoreFactory } from '@nestjs/common';

import type {
  BasicOptions,
  ExtendedOptions,
  RedisOptions,
} from './redis.interface';

export function redisFactory<
  StoreType extends CacheStore | CacheStoreFactory | string,
  RedisType extends RedisOptions<StoreType>['type'],
>(
  ...args: Extract<RedisOptions<StoreType>, { type: RedisType }> extends {
    options: ExtendedOptions<StoreType>;
  }
    ? [type: RedisType, options: ExtendedOptions<StoreType>]
    : [type: RedisType, options: BasicOptions<StoreType>]
): DynamicModule {
  const [_type, options] = args;
  return CacheModule.register(options);
}
