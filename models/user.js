const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
  username:  { type: String, lowercase: true, required: true, unique: true },
  password: {type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true }
});

userSchema.pre("save", function(next) {
  var user = this;

  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    if (err) return next(err)
    // Store hash in your password DB.
    user.password = hash
    next();
  });
});

module.exports = mongoose.model('user', userSchema)
