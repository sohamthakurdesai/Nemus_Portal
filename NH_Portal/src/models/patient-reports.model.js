// patient_reports-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const patientReports = new Schema({
    patient_id : {type: Schema.Types.ObjectId, required: true, ref: 'patients'},
    docname:	{type: String, required: false},
    size:	{type: Number, required: false},
    type:	{type: Number, required: false},
  }, {
    timestamps: true
  });

  return mongooseClient.model('patientReports', patientReports);
};
