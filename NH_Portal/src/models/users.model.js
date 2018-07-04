// users-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new Schema({
    user_role: { type: String, required: true },
    salutation:	{ type: String, required: true },
    firstname:	{ type: String, required: true },
    middlename:	{ type: String, required: false },
    lastname:	{ type: String, required: true },
    emailaddress: { type: String, required: true },
    gender:	{ type: String, required: true },
    employeeID:	{ type: String, required: false, unique:true},
    mobileNo:	{ type: Number, required: false },
    dateOfBirth: { type: Date, required: true },
    username: { type: String, required: false , unique : true, partialFilterExpression : { username : {$exists: true}}, index: true },
    password:	{ type: String, required: false , unique : true, partialFilterExpression : { password : {$exists: true}}, index: true },
    registered:	{ type: Boolean, required: true },
    status:	{ type: String, required: true },
    registrationtime:	{ type: Date, required: false },
    lastlogindate:	{ type: Date, required: false },
    lastloginipaddress:	{ type: String, required: false },
    logincount:	{ type: Number, required: false },
    doctorSecreataryMapping: [{type: Schema.Types.ObjectId, required: false, ref:'users'}],
    secreataryDoctorMapping: [{type: Schema.Types.ObjectId, required: false, ref:'users'}],
    doctorLocationMapping: [{type: Schema.Types.ObjectId, required: false, ref:'users'}]
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
