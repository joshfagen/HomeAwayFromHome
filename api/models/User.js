const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  // _id: String,
  name: String,
  email: {type:String, unique:true},
  password: String,
}, { collection: 'Users' });

const User = mongoose.model('User', UserSchema);

module.exports = User;