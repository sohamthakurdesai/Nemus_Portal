// doc_schedule-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const docSchedule = new Schema({
    schedule_id : {type: Schema.Types.ObjectId, required: true, ref: 'docSchedule'},
    location : {type: Schema.Types.ObjectId, required: true, ref: 'locations'},
    fromDate : {type: Date, required: false},
    toDate :	{type: Date, required: false},
    ifPerpetual :	{type: Boolean, required: false},
    currentDate :	{type: Date, required: false},
    holidays :	{type: [{ day : Date, reason: String}], required: false},
    scheduleStartTime :	{type: Date, required: false},
    scheduleEndTime	: {type: Date , required: false},
    reasonForChange :	{type: String, required: false},
    noOfSlots	: {type: Number, required: false},
    flgRecurrence	: {type: Boolean, required: false},
    recurrenceType : {type: String, required: false},
    noOfOccurrences :	{type: Number, required: false},
    recurrenceEndDate :	{type: Date, required: false},
   }, {
    timestamps: true
  });

  return mongooseClient.model('docSchedule', docSchedule);
};
