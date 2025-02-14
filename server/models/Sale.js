const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  totalAmount: Number,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sale', saleSchema);
