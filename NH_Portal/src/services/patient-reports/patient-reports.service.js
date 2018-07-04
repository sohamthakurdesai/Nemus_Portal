// Initializes the `patient_reports` service on path `/patient_reports`
const createService = require('feathers-mongoose');
const createModel = require('../../models/patient-reports.model');
const hooks = require('./patient-reports.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/patient_reports', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('patient_reports');

  service.hooks(hooks);
};
