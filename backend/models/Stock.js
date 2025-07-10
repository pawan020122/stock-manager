const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: String
}, { timestamps: true });

module.exports = mongoose.model('Stock', stockSchema);
