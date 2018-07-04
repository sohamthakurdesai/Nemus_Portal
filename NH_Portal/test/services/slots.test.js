const assert = require('assert');
const app = require('../../src/app');

describe('\'slots\' service', () => {
  it('registered the service', () => {
    const service = app.service('slots');

    assert.ok(service, 'Registered the service');
  });
});
