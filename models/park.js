const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
  park_name: String,
  state: String,
  area_acres: Number
});

module.exports = mongoose.model('Park', parkSchema);
