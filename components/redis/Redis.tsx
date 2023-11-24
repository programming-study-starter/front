import Redis, { RedisOptions } from 'ioredis';

const options : RedisOptions = {
  host: process.env.NEXT_PUBLIC_REDIS_HOST,
  port: Number.parseInt('' + process.env.NEXT_PUBLIC_REDIS_PORT),
  password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
  readOnly: true, 
}
const redis = new Redis(options);

redis.on('connect', () => {
  console.log(`on ::::: 'connect'`);
});

redis.once('connect', () => {
  console.log(`once ::::: 'connect'`);
});

redis.on('message', (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
});

export default redis;

// export default class Redis {

//   static getRedis() {
//     return new Redis({
//       host: process.env.NEXT_PUBLIC_REDIS_HOST,
//       port: Number.parseInt('' + process.env.NEXT_PUBLIC_REDIS_PORT),
//       password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
//       readOnly: true, 
//     });
//   }

//   static connect(redis) {
//     console.log(this.options);
//     redis.on('connect', () => {
//       console.log(`on ::::: 'connect'`);
//     });
//     redis.once('connect', () => {
//       console.log(`once ::::: 'connect'`);
//     });
//   }
// }

// const options : RedisOptions = {
//   host: process.env.NEXT_PUBLIC_REDIS_HOST,
//   port: Number.parseInt('' + process.env.NEXT_PUBLIC_REDIS_PORT),
//   password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
//   readOnly: true, 
// }

// const redis = (callBack: Function=(channel, message) => {console.log(`Received ${message} from ${channel}`);}) => {
//   let redis = new Redis(options);
//   redis.on('connect', () => {
//     console.log(`on :: 'connect'`);
//   });
  
//   redis.once('connect', () => {
//     console.log(`once :: 'connect'`);
//     const channelId = ['alert-notice'];
//     redis.unsubscribe();
//     redis.subscribe(channelId, (err, count) => {
//       if (err) {
//         console.error("Failed to subscribe: %s", err.message);
//       } else {
//         console.log(`Subscribed successfully! This client is currently subscribed to ${count} channels.`);
//       }
//     });
//   });
  
//   redis.on('message', (channel, message) => {
//     console.log(`Received ${message} from ${channel}`);
//   });
//   return redis;
// }

// export { redis };