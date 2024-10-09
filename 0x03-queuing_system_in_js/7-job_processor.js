// 7-job_processor.js

import kue from 'kue';

const queue = kue.createQueue();

const blacklistedNumbers = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
  // Track the job progress to 0%
  job.progress(0, 100);

  if (blacklistedNumbers.includes(phoneNumber)) {
    // Fail the job with an error message
    done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  } else {
    // Update job progress to 50%
    job.progress(50, 100);

    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

    // Complete the job
    done();
  }
}

queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});
