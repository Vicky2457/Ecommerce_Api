// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type:  String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
