// locations-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const locations = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    emailid: { type: String, required: true },
    phone: { type: Number, required: true },
    locationDoctorMapping: [{type: Schema.Types.ObjectId, ref: 'users'}]
  }, {
    timestamps: true
  });

  return mongooseClient.model('locations', locations);
};
