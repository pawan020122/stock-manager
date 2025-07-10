const Stock = require('../models/Stock');

// GET all stocks
exports.getStocks = async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
};

// POST new stock
exports.createStock = async (req, res) => {
  const newStock = new Stock(req.body);
  const saved = await newStock.save();
  res.json(saved);
};

// PUT update stock
exports.updateStock = async (req, res) => {
  const updated = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE a stock
exports.deleteStock = async (req, res) => {
  await Stock.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
