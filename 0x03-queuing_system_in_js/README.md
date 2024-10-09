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
## Task 3: Node Redis Client and Async Operations

This task involves modifying the Redis client to use `async/await` with promisified functions.

### Script: `2-redis_op_async.js`

#### Changes from Previous Task

- Imported `promisify` from the `util` module.
- Promisified the `client.get` method to work with promises.
- Modified `displaySchoolValue` to be an `async` function using `await`.

### Code
```bash
npm run dev 2-redis_op_async.js
```
### OutPut
```
Redis client connected to the server
School
Reply: OK
100
```

## Task 4: Node Redis Client and Advanced Operations

This task involves using the Redis client to store and retrieve a hash value.

### Script: `4-redis_advanced_op.js`

#### Steps

1. **Create a Redis Client**: Connect to the Redis server and set up event listeners for `connect` and `error` events.

2. **Store the Hash**:
   - Use the `hset` command to store the following field-value pairs in the hash `HolbertonSchools`:
     - `Portland`: `50`
     - `Seattle`: `80`
     - `New York`: `20`
     - `Bogota`: `20`
     - `Cali`: `40`
     - `Paris`: `2`
   - Use `redis.print` as the callback for each `hset` to display confirmation messages.

3. **Retrieve and Display the Hash**:
   - Use the `hgetall` command to retrieve the hash `HolbertonSchools`.
   - Display the retrieved hash object to the console.

#### Run the script:
```bash
npm run dev 4-redis_advanced_op.js
```
### Output:

```
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 4-redis_advanced_op.js`

Redis client connected to the server
Reply: 1
Reply: 1
Reply: 1
Reply: 1
Reply: 1
Reply: 1

{
  Portland: '50',
  Seattle: '80',
  'New York': '20',
  Bogota: '20',
  Cali: '40',
  Paris: '2'
}
```

## Task 5: Node Redis Client Publisher and Subscriber

This task involves creating a simple Redis-based publisher and subscriber system.

### Files:

- `5-subscriber.js`
- `5-publisher.js`

### `5-subscriber.js`

- **Description**: A Redis subscriber client that listens to messages on the channel `holberton school channel`.
- **Functionality**:
  - Connects to the Redis server.
  - Subscribes to `holberton school channel`.
  - Logs messages received on the channel.
  - If the message is `'KILL_SERVER'`, it unsubscribes and exits.

### `5-publisher.js`

- **Description**: A Redis publisher client that sends messages to the channel `holberton school channel` after specified delays.
- **Functionality**:
  - Connects to the Redis server.
  - Implements `publishMessage(message, time)` to send messages after a delay.
  - Calls `publishMessage` with various messages and delays.

### How to Run

**Open Two Terminals:**
  ### Terminal 1: Run the subscriber script:
  ```bash
    npm run dev 5-subscriber.js
  ```

  ### Terminal 2: Run the publisher script:

  ```bash
  npm run dev 5-subscriber.js
  ```

### Expected OutPut
  Terminal 1:
  ```bash
  Redis client connected to the server
Holberton Student
Holberton Student
KILL_SERVER
[nodemon] clean exit - waiting for changes before restart
```
Terminal 2:

```bash
Redis client connected to the server
About to send Holberton Student
About to send Holberton Student
About to send KILL_SERVER
About to send Holberton Student
```





