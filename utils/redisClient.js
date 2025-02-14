const redis = require('redis');
const config = require('../config/config');

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

module.exports = client;