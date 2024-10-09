// 100-seat.js

import express from 'express';
import kue from 'kue';
import redis from 'redis';
import { promisify } from 'util';

const app = express();
const port = 1245;

const client = redis.createClient();

// Promisify Redis methods
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

/**
 * Reserve a seat by setting the available_seats key in Redis
 * @param {number} number - Number of available seats
 */
const reserveSeat = async (number) => {
  await setAsync('available_seats', number);
};

/**
 * Get the current number of available seats from Redis
 * @returns {Promise<string>} - The number of available seats as a string
 */
async function getCurrentAvailableSeats() {
  const seats = await getAsync('available_seats');
  return seats;
}

// Set the initial number of available seats to 50
reserveSeat(50);

// Initialize reservationEnabled to true
let reservationEnabled = true;

// Create the Kue queue
const queue = kue.createQueue();

// Route to get the number of available seats
app.get('/available_seats', async (req, res) => {
  const numberOfAvailableSeats = await getCurrentAvailableSeats();
  res.json({ numberOfAvailableSeats });
});

// Route to reserve a seat
app.get('/reserve_seat', (req, res) => {
  if (!reservationEnabled) {
    res.json({ status: 'Reservation are blocked' });
    return;
  }

  const job = queue.create('reserve_seat', {}).save((err) => {
    if (!err) {
      res.json({ status: 'Reservation in process' });
    } else {
      res.json({ status: 'Reservation failed' });
    }
  });

  job.on('complete', () => {
    console.log(`Seat reservation job ${job.id} completed`);
  });

  job.on('failed', (errorMessage) => {
    console.log(`Seat reservation job ${job.id} failed: ${errorMessage}`);
  });
});

let queueProcessingStarted = false;

// Route to process the reservation queue
app.get('/process', (req, res) => {
  res.json({ status: 'Queue processing' });

  if (!queueProcessingStarted) {
    queueProcessingStarted = true;

    queue.process('reserve_seat', async (job, done) => {
      const currentSeats = await getCurrentAvailableSeats();
      let seats = parseInt(currentSeats);

      if (isNaN(seats)) {
        seats = 0;
      }

      if (seats > 0) {
        seats -= 1;
        await reserveSeat(seats);

        if (seats === 0) {
          reservationEnabled = false;
        }
        done();
      } else {
        done(new Error('Not enough seats available'));
      }
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
