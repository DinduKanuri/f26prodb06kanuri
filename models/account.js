const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose').default;


// Lab 13 Part 2 - Account Model
const accountSchema = new Schema({
  username: String
});

// Add Passport authentication support
accountSchema.plugin(passportLocalMongoose);

// Export Account model
module.exports = mongoose.model('Account', accountSchema);
