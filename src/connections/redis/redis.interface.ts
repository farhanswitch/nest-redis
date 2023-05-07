import type { CacheStore, CacheStoreFactory } from '@nestjs/cache-manager';
export type BasicOptions<
  StoreType extends CacheStore | CacheStoreFactory | string,
> = {
  store: StoreType;
  host: string;
  port: number;
  isGlobal?: boolean;
  defaultTTL?: number;
  maxItem?: number;
};

export type ExtendedOptions<
  StoreType extends CacheStore | CacheStoreFactory | string,
> = BasicOptions<StoreType> & {
  username: 'default' | Omit<string, 'default'>;
  password: string;
};

export type RedisOptions<
  StoreType extends CacheStore | CacheStoreFactory | string,
> =
  | {
      type: 'BASIC';
      options: BasicOptions<StoreType>;
    }
  | {
      type: 'SECURE';
      options: ExtendedOptions<StoreType>;
    };
