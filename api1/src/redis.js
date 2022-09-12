const RedisClient = require('ioredis');

const { url: redisUrl } = require('./config/redis');

const Redis = new RedisClient(redisUrl);

module.exports = Redis;
