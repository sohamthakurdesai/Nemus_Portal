// appointment_details-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const appointmentDetails = new Schema({
    doctor_id : {type: Schema.Types.ObjectId, required: true, ref: 'users'},
    patient_id : {type: Schema.Types.ObjectId, required: true, ref: 'patients'},
    doctorName :	{type: String, required: false},
    location_id :	{type: Schema.Types.ObjectId, required: true, ref: 'locations'},
    hospitalLocation :	{type: String, required: false},
    appointmentDate :	{type: Date, required: false},
    appointmentTime	: {type: Date, required: false},
    appointmentStatus	: {type: String, required: false},
    cancellationReason : {type: String, required: false},
    doctorComments : {type: String, required: false},
    bookedBy :	{type: String, required: false},
    updatedBy :	{type: String, required: false},
    documents	: {type: [{type: Schema.Types.ObjectId, required: true, ref: 'patientReports' }], required: false},
  }, {
    timestamps: true
  });

  return mongooseClient.model('appointmentDetails', appointmentDetails);
};
