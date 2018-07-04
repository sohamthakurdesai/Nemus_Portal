const assert = require('assert');
const app = require('../../src/app');

describe('\'appointment_details\' service', () => {
  it('registered the service', () => {
    const service = app.service('appointment_details');

    assert.ok(service, 'Registered the service');
  });
});
