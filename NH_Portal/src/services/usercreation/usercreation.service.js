// Initializes the `usercreation` service on path `/usercreation`
const createService = require('./usercreation.class.js');
const hooks = require('./usercreation.hooks');
const errors = require("@feathersjs/errors");
const CONSTANTS = require("../../../config/constants.json");
const ERRMSG = require("../../../config/errorMessages.json");

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app,
    errors,
    CONSTANTS,
    ERRMSG
  };

  // Initialize our service with any options it requires
  app.use('/usercreation', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('usercreation');

  service.hooks(hooks);
};
