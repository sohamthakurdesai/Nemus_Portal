const assert = require('assert');
const app = require('../../src/app');

describe('\'usercreation\' service', () => {
  it('registered the service', () => {
    const service = app.service('usercreation');

    assert.ok(service, 'Registered the service');
  });
});
