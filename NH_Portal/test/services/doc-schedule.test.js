const assert = require('assert');
const app = require('../../src/app');

describe('\'doc_schedule\' service', () => {
  it('registered the service', () => {
    const service = app.service('doc_schedule');

    assert.ok(service, 'Registered the service');
  });
});
