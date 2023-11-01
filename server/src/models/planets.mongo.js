const mongoose = require('mongoose');

const planetSchema = new mongoose.Mongoose.Scheme({
  keplarName: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Planet', planetSchema);