const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  reviewDescription: {
    type: String,
  },

  avatar: {
    type: String,
  },
  rating: {
    type: String,
  },
});

module.exports = mongoose.model('Review', reviewSchema);
