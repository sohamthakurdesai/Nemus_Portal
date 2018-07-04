// slots-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const slots = new Schema({
    schedule_id : {type: Schema.Types.ObjectId, required: true, ref: 'docSchedule'},
    appointmentSlotDuration : {type: Number, required: true},
    starttime : {type: Date, required: true},
    endtime : {type: Date, required: true},
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('slots', slots);
};
