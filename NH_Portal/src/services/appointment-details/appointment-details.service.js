// Initializes the `appointment_details` service on path `/appointment_details`
const createService = require('feathers-mongoose');
const createModel = require('../../models/appointment-details.model');
const hooks = require('./appointment-details.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/appointment_details', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('appointment_details');

  service.hooks(hooks);
};
