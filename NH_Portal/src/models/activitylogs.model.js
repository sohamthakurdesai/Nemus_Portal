// activitylogs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const activitylogs = new Schema({
    name : { type: String, required: true },
    actor : { type: String, required: true },
    origin : { type: String, required: true },
    note : { type: String, required: true },
    entityname : { type: String, required: true },
    entityid : { type: String, required: true },
    starttime : { type: Date, required: true },
    endtime :  { type: Date, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('activitylogs', activitylogs);
};
