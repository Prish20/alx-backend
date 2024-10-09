# 0x03. Queuing System in JS

## Task 0: Install a Redis Instance

This task involves installing Redis version 6.0.10, starting the server, setting and retrieving a key-value pair, and ensuring data persistence.

### Steps

1. **Download and Compile Redis**

   ```bash
   wget http://download.redis.io/releases/redis-6.0.10.tar.gz
   tar xzf redis-6.0.10.tar.gz
   cd redis-6.0.10
   make
   ```


## Task 1: Node Redis Client

This task involves creating a Node.js script that connects to a Redis server and logs messages based on the connection status.

### Install Redis Client Library

Ensure you are in the project directory (`0x03-queuing_system_in_js`) and run:

```bash
npm install redis@^2.8.0
```
## Task 2: Node Redis Client and Basic Operations

This task involves extending the Redis client script to perform basic Redis operations such as setting and getting key-value pairs.

### Script: `1-redis_op.js`

#### Functions

- **`setNewSchool(schoolName, value)`**
  - Sets a key-value pair in Redis.
  - Displays a confirmation message using `redis.print`.

- **`displaySchoolValue(schoolName)`**
  - Retrieves the value of a key from Redis.
  - Logs the value to the console.

#### Code
```bash
npm run dev 1-redis_op.js
```
### OutPut
```
Redis client connected to the server
School
Reply: OK
100
```
