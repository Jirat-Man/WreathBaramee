const mongoose = require('mongoose');
const BangkokStock = require('./models/BangkokStock.js');
const UbonStock = require('./models/UbonStock.js');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/WreatheBaramee');

// Create a new Bangkok stock item
const bangkokStockItem = new BangkokStock({
  itemName: 'Item A',
  liveStockNumber: 10,
  totalStocks: 100,
  status: 'In Stock'
});

// Save the Bangkok stock item
bangkokStockItem.save()
  .then(() => console.log('Bangkok stock item saved successfully'))
  .catch(err => console.error('Error saving Bangkok stock item:', err));

// Create a new Ubon stock item
const ubonStockItem = new UbonStock({
  itemName: 'Item X',
  liveStockNumber: 5,
  totalStocks: 50,
  status: 'Out of Stock'
});

// Save the Ubon stock item
ubonStockItem.save()
  .then(() => console.log('Ubon stock item saved successfully'))
  .catch(err => console.error('Error saving Ubon stock item:', err));
