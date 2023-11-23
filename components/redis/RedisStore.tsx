import { create } from "zustand";
import Redis, { RedisOptions } from 'ioredis';

const options : RedisOptions = {
  host: process.env.NEXT_PUBLIC_REDIS_HOST,
  port: Number.parseInt('' + process.env.NEXT_PUBLIC_REDIS_PORT),
  password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
}

interface RedisType {
  redis: Redis,
  setRedis: () => void
}

const useRedisStore = create<RedisType>()(
  (set) => ({
    redis: new Redis(options),
    setRedis: () => {
      if ( redis ) {
        set((state) => ({
          redis: new Redis(options),
        }));
      }
    }
  })
);

let redis = new Redis(options);

redis.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
});

redis.on("messageBuffer", (channel, message) => {
  console.log(channel, message);
});

export { redis, useRedisStore };