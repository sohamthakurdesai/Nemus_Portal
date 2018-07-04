// patients-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const patients = new Schema({
    caseid:	{type: String, required: true},
    firstname :	{type: String, required: true},
    middlename :	{type: String, required: false},
    lastname :	{type: String, required: false},
    emailid	: {type: String, required: false},
    mobile :	{type: Number, required: false},
    agency :	{type: String, required: false},
    medAppointmentRefID :	{type: String, required: false},
    isAccident : {type: Boolean, required: false},
    accidentDate : {type: Date, required: false},
    accidentDescription :	{type: String, required: false},
    isMedsReviewRequired : {type: Boolean, required: true},
    team : {type: String, required: true},
  }, {
    timestamps: true
  });

  return mongooseClient.model('patients', patients);
};
