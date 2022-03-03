const router = require('express').Router();
const Product = require('../models/Product');
const { isAuthenticated } = require('../middleware/jwt.middleware');

//Read
router.get('/', async (req, res, next) => {
  const products = await Product.find({});
  if (!products) {
    res.status(404).json('There are no products in this database');
  }
  res.status(200).json(products);
});

//Create
router.post('/', isAuthenticated, async (req, res) => {
  const { name, description, price, category, photo, shipping } = req.body;
  const product = await Product.create({ name, description, price, category, photo, shipping });
  res.status(201).json(product);
});

//Detail Update
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json('No product found');
  }
  res.status(200).json(product);
});

router.put('/:productId/edit', isAuthenticated, async (req, res) => {
  const { productId } = req.params;
  const { name, description, price, category, photo, shipping } = req.body;
  const product = await Product.findByIdAndUpdate(productId, { name, description, price, category, photo, shipping }, { new: true });
  if (!product) {
    res.status(404).json('No product found');
  }
  res.status(201).json(product);
});

//Delete
router.delete('/:productId/delete', isAuthenticated, async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    res.status(404).json('No product was found');
  }
  res.status(204).json(product);
});

module.exports = router;
