/* eslint-disable no-unused-vars */

class Service {
  constructor (options) {
    this.options = options || {};
    this.app = options.app;
    this.errors = options.errors;
    this.CONSTANTS = options.CONSTANTS;
    this.ERRMSG = options.ERRMSG;
  }

  find (params) {
    return Promise.resolve([]);
  }

  get (id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create (data, params) {
    /*if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }*/
    var userService = this.app.service('/users');
    const errors = this.errors;
    const CONSTANTS = this.CONSTANTS;
    const ERRMSG = this.ERRMSG;
    return new Promise(
      function (resolve, reject) {
        if(data.loginuser.user_role != CONSTANTS.ROLES.admin){
          console.log(CONSTANTS.STATUS.admin);
          reject(new errors.GeneralError(
            data.loginuser.username + ERRMSG.NOT_AN_ADMIN_ROLE
          ));
        }

        if(data.loginuser.status != CONSTANTS.STATUS.active){
          reject(new errors.GeneralError(data.loginuser.username + ERRMSG.USER_NOT_ACTIVE));
        }

        data.employeeID = "3"; // to be generated
        data.registered = false;
        data.status = CONSTANTS.STATUS.notactive;

        userService.create(data, params)
          .then(
            (results) => {
              resolve(results);
            }
          )
          .catch((error)=>{
            reject(new errors.GeneralError(ERRMSG.USER_CREATION_FAILED, error));
          });
      }
    )
  }

  update (id, data, params) {
    return Promise.resolve(data);
  }

  patch (id, data, params) {
    return Promise.resolve(data);
  }

  remove (id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
