import Redis, { RedisOptions } from 'ioredis';

let redis;

export function register() {
  console.log(`register`);
  redis = new Redis(options);

  redis.on("message", (channel, message) => {
    console.log(`Received ${message} from ${channel}`);
  });

  redis.on("messageBuffer", (channel, message) => {
    console.log(channel, message);
  });
}

export { redis };