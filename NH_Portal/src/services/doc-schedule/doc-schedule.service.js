// Initializes the `doc_schedule` service on path `/doc_schedule`
const createService = require('feathers-mongoose');
const createModel = require('../../models/doc-schedule.model');
const hooks = require('./doc-schedule.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/doc_schedule', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('doc_schedule');

  service.hooks(hooks);
};
