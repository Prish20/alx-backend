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
