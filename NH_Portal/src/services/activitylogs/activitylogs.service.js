// Initializes the `activitylogs` service on path `/activitylogs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/activitylogs.model');
const hooks = require('./activitylogs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/activitylogs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('activitylogs');

  service.hooks(hooks);
};
