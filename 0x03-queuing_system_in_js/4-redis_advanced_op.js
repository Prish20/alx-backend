// 4-redis_advanced_op.js

import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

// Handle successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle connection errors
client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});

// Store the hash using hset
client.hset('HolbertonSchools', 'Portland', 50, redis.print);
client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
client.hset('HolbertonSchools', 'New York', 20, redis.print);
client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
client.hset('HolbertonSchools', 'Cali', 40, redis.print);
client.hset('HolbertonSchools', 'Paris', 2, redis.print);

// Retrieve and display the hash using hgetall
client.hgetall('HolbertonSchools', (err, result) => {
  if (err) {
    console.error(`Error: ${err}`);
  } else {
    console.log(result);
  }
});
