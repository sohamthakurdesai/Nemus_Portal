const assert = require('assert');
const app = require('../../src/app');

describe('\'patient_reports\' service', () => {
  it('registered the service', () => {
    const service = app.service('patient_reports');

    assert.ok(service, 'Registered the service');
  });
});
