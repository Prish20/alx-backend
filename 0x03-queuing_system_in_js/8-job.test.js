// 8-job.test.js

import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

describe('createPushNotificationsJobs', () => {
  before(() => {
    // Enter test mode
    kue.Job.queue = kue.createQueue();
    kue.Job.queue.testMode.enter();
  });

  afterEach(() => {
    // Clear test jobs
    kue.Job.queue.testMode.clear();
  });

  after(() => {
    // Exit test mode
    kue.Job.queue.testMode.exit();
  });

  it('should display an error message if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs('not an array', kue.Job.queue)).to.throw(
      'Jobs is not an array'
    );
  });

  it('should create new jobs to the queue', () => {
    const jobs = [
      {
        phoneNumber: '4153518780',
        message: 'This is the code 1234 to verify your account',
      },
      {
        phoneNumber: '4153518781',
        message: 'This is the code 4562 to verify your account',
      },
    ];

    createPushNotificationsJobs(jobs, kue.Job.queue);

    expect(kue.Job.queue.testMode.jobs.length).to.equal(2);

    expect(kue.Job.queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    expect(kue.Job.queue.testMode.jobs[0].data).to.deep.equal(jobs[0]);

    expect(kue.Job.queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
    expect(kue.Job.queue.testMode.jobs[1].data).to.deep.equal(jobs[1]);
  });
});
