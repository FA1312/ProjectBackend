const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  avatar: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviewDescription: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model('Review', reviewSchema);
