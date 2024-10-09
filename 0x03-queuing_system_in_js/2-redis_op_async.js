// 2-redis_op_async.js

import redis from 'redis';
import { promisify } from 'util';

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

// Promisify the get function
const getAsync = promisify(client.get).bind(client);

/**
 * Function to set a new school in Redis
 * @param {string} schoolName - The key name
 * @param {string} value - The value to store
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Async function to display the value of a school from Redis
 * @param {string} schoolName - The key name
 */
async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (err) {
    console.error(err);
  }
}

// Call the functions as per the task requirements
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
