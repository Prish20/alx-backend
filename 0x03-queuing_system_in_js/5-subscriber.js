// 5-subscriber.js

import redis from 'redis';

// Create Redis client
const client = redis.createClient();

// Handle successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle connection errors
client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});

// Subscribe to 'holberton school channel'
client.subscribe('holberton school channel');

// Listen for messages
client.on('message', (channel, message) => {
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  } else {
    console.log(message);
  }
});
