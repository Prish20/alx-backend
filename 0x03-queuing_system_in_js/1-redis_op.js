// 1-redis_op.js

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

/**
 * Function to set a new school in Redis
 * @param {string} schoolName - The key name
 * @param {string} value - The value to store
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Function to display the value of a school from Redis
 * @param {string} schoolName - The key name
 */
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(reply);
  });
}

// Call the functions as per the task requirements
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
