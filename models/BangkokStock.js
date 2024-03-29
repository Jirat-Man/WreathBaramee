const { Schema, model } = require('mongoose');

const bangkokStockSchema = new Schema({
  itemName: { type: String, required: true },
  liveStockNumber: { type: Number, required: true },
  totalStocks: { type: Number, required: true },
  status: { type: String, enum: ['In Stock', 'Out of Stock'], default: 'In Stock' }
});

const BangkokStock = model('BangkokStock', bangkokStockSchema);

module.exports = BangkokStock;
