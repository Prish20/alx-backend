// 8-job.js

export default function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  for (const jobData of jobs) {
    const job = queue.create('push_notification_code_3', jobData)
      .save((err) => {
        if (!err) {
          if (queue.testMode) {
            console.log('Notification job created in test mode');
          } else {
            console.log(`Notification job created: ${job.id}`);
          }
        }
      });

    // Skip event listeners in test mode since job.on() is not available
    if (!queue.testMode) {
      job.on('complete', () => {
        console.log(`Notification job ${job.id} completed`);
      });

      job.on('failed', (errorMessage) => {
        console.log(`Notification job ${job.id} failed: ${errorMessage}`);
      });

      job.on('progress', (progress) => {
        console.log(`Notification job ${job.id} ${progress}% complete`);
      });
    }
  }
}
