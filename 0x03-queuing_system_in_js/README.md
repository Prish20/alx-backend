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
Holberton Student #1 starts course
Holberton Student #2 starts course
KILL_SERVER
[nodemon] clean exit - waiting for changes before restart
```
Terminal 2:

```bash
Redis client connected to the server
About to send Holberton Student #1 starts course
About to send Holberton Student #2 starts course
About to send KILL_SERVER
About to send Holberton Student #3 starts course
```

## Task 6: Create the Job Creator

In this task, we create a job creator script using Kue that adds a job to a queue named `push_notification_code`.

### File: `6-job_creator.js`

#### Description

- **Queue Creation**: Initializes a Kue queue to manage jobs.
- **Job Data**: Contains the phone number and message for the notification.
- **Job Creation**: Adds a job to the `push_notification_code` queue.
- **Event Handlers**:
  - Logs when the job is created successfully.
  - Logs when the job is completed.
  - Logs when the job fails.

#### How to run:

```bash
  npm run dev 6-job_creator.js
```

#### Expected OutPut:

```bash
  Notification job created: 1
```

# Task 7: Create the Job Processor

In this task, we create a job processor that processes jobs from the `push_notification_code` queue.

## `6-job_processor.js`

### Description

- **Queue Creation**: Initializes a Kue queue to process jobs.
- **Function `sendNotification`**:
  - Accepts `phoneNumber` and `message` as arguments.
  - Logs: `Sending notification to PHONE_NUMBER, with message: MESSAGE`.
- **Job Processing**:
  - Listens for jobs in the `push_notification_code` queue.
  - For each job, extracts `phoneNumber` and `message` from `job.data`.
  - Calls `sendNotification` with the extracted data.
  - Calls `done()` to mark the job as completed.

### How to run:

#### Terminal 1:
```bash
npm run dev 6-job_creator.js
```

#### Terminal 2:

```bash
npm run dev 6-job_creator.js
```

### Expected Output

#### Terminal 1:

```bash
  Notification job created: 2
  Notification job completed
```

#### Terminal 2:

```bash
Sending notification to 4153518780, with message: This is the code to verify your account

Sending notification to 4153518780, with message: This is the code to verify your account
```

# Task 8: Track Progress and Errors with Kue - Create the Job Creator

In this task, we create a job creator script that adds multiple jobs to a queue and tracks their progress and errors.

## `7-job_creator.js`

### Description

- **Jobs Array**: Contains multiple job data objects, each with a `phoneNumber` and `message`.
- **Queue Creation**: Initializes a Kue queue to manage jobs.
- **Job Creation Loop**:
  - Loops over each job in the `jobs` array.
  - Creates a new job in the `push_notification_code_2` queue.
  - Saves the job and logs:
    - `Notification job created: JOB_ID` if successful.
    - `Notification job failed to create: ERROR` if there's an error.
  - Attaches event listeners to each job:
    - **`complete`**: Logs when the job is completed.
    - **`failed`**: Logs when the job fails, including the error message.
    - **`progress`**: Logs the job's progress percentage.

### How to run:

```bash
  npm run dev 7-job_creator.js
```

#### Expected Output

```bash
Notification job created: 3
Notification job created: 4
Notification job created: 5
Notification job created: 6
Notification job created: 7
Notification job created: 8
Notification job created: 9
Notification job created: 10
Notification job created: 11
Notification job created: 12
Notification job created: 13
```

# Task 9: Track Progress and Errors with Kue - Create the Job Processor

In this task, we create a job processor that processes jobs from the `push_notification_code_2 queue`, handles blacklisted phone numbers, and tracks job progress and errors.

### Description
- Blacklisted Numbers: An array containing phone numbers that are blacklisted.

  ```javascript
  const blacklistedNumbers = ['4153518780', 
  '4153518781'];
  ```
- Function `sendNotification`:

- Accepts `phoneNumber`, `message`, `job`, and done as arguments.
- Tracks the job progress starting from `0%`.
- Checks if the phoneNumber is blacklisted:
- If yes, fails the job with an `Error` message.
- If no:
    - Updates job progress to `50%`.
    - Logs: Sending notification to `PHONE_NUMBER`, with message: `MESSAGE`.
    - Completes the job.
- Queue Processing:

    - Processes jobs from the `push_notification_code_2` queue with a concurrency of 2.
    - For each job, calls `sendNotification` with the job data.

### How to run
#### Terminal 1
```bash
npm run dev 7-job_creator.js
```
#### Terminal 2

```bash
npm run dev 6-job_processor.js
```

### Expected OutPut
#### Terminal 1
```bash
Notification job created: 14
Notification job created: 15
Notification job created: 16
Notification job created: 17
Notification job created: 18
Notification job created: 19
Notification job created: 20
Notification job created: 21
Notification job created: 22
Notification job created: 23
Notification job created: 24
Notification job 14 0% complete
Notification job 14 failed: Phone number 4153518780 is blacklisted
Notification job 15 0% complete
Notification job 16 0% complete
Notification job 16 50% complete
Notification job 15 failed: Phone number 4153518781 is blacklisted
Notification job 16 completed
Notification job 17 0% complete
Notification job 17 50% complete
Notification job 18 0% complete
Notification job 18 50% complete
Notification job 17 completed
Notification job 18 completed
Notification job 19 0% complete
Notification job 19 50% complete
Notification job 20 0% complete
Notification job 20 50% complete
Notification job 19 completed
Notification job 20 completed
Notification job 21 0% complete
Notification job 21 50% complete
Notification job 22 0% complete
Notification job 22 50% complete
Notification job 21 completed
Notification job 22 completed
Notification job 23 0% complete
Notification job 23 50% complete
Notification job 24 0% complete
Notification job 24 50% complete
Notification job 23 completed
Notification job 24 completed
```

#### Terminal 2

```bash
Sending notification to 4153518743, with message: This is the code 4321 to verify your account
Sending notification to 4153538781, with message: This is the code 4562 to verify your account
Sending notification to 4153118782, with message: This is the code 4321 to verify your account
Sending notification to 4153718781, with message: This is the code 4562 to verify your account
Sending notification to 4159518782, with message: This is the code 4321 to verify your account
Sending notification to 4158718781, with message: This is the code 4562 to verify your account
Sending notification to 4153818782, with message: This is the code 4321 to verify your account
Sending notification to 4154318781, with message: This is the code 4562 to verify your account
Sending notification to 4151218782, with message: This is the code 4321 to verify your account
Sending notification to 4153518743, with message: This is the code 4321 to verify your account
Sending notification to 4153538781, with message: This is the code 4562 to verify your account
Sending notification to 4153118782, with message: This is the code 4321 to verify your account
Sending notification to 4153718781, with message: This is the code 4562 to verify your account
Sending notification to 4159518782, with message: This is the code 4321 to verify your account
Sending notification to 4158718781, with message: This is the code 4562 to verify your account
Sending notification to 4153818782, with message: This is the code 4321 to verify your account
Sending notification to 4154318781, with message: This is the code 4562 to verify your account
Sending notification to 4151218782, with message: This is the code 4321 to verify your account
```




