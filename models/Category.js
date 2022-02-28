const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },
}{timestamps:true});

module.exports = model('Category', categorySchema);
