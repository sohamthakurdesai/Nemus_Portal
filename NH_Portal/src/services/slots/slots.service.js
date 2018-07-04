// Initializes the `slots` service on path `/slots`
const createService = require('feathers-mongoose');
const createModel = require('../../models/slots.model');
const hooks = require('./slots.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/slots', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('slots');

  service.hooks(hooks);
};
