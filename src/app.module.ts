import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisModule } from './connections/redis/redis.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    // CacheModule.register({
    //   store: redisStore,
    //   host: 'redis-17644.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
    //   port: 17644,
    //   password: 'o1O8cQY5iyO7E4BeMdtw2P36tQusDmvV',
    // }),
    RedisModule,
    // ClientsModule.register([
    //   {
    //     name: 'REDIS_SERV',
    //     transport: Transport.REDIS,
    //     options: {
    //       host: 'redis-17644.c292.ap-southeast-1-1.ec2.cloud.redislabs.com',
    //       port: 17644,
    //       password: 'o1O8cQY5iyO7E4BeMdtw2P36tQusDmvV',
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
