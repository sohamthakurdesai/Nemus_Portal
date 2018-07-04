const users = require('./users/users.service.js');
const locations = require('./locations/locations.service.js');
const patients = require('./patients/patients.service.js');
const appointmentDetails = require('./appointment-details/appointment-details.service.js');
const patientReports = require('./patient-reports/patient-reports.service.js');
const docSchedule = require('./doc-schedule/doc-schedule.service.js');
const slots = require('./slots/slots.service.js');
const activitylogs = require('./activitylogs/activitylogs.service.js');
const usercreation = require('./usercreation/usercreation.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(locations);
  app.configure(patients);
  app.configure(appointmentDetails);
  app.configure(patientReports);
  app.configure(docSchedule);
  app.configure(slots);
  app.configure(activitylogs);
  app.configure(usercreation);
};
