const assert = require('assert');
const app = require('../../src/app');

describe('\'activitylogs\' service', () => {
  it('registered the service', () => {
    const service = app.service('activitylogs');

    assert.ok(service, 'Registered the service');
  });
});
