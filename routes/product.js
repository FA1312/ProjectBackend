const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

import { deleteProduct, getAllProducts, getProductById, createProduct, updateProduct } from '../controllers/product';
import { isAuthenticated } from '../middleware/jwt.middleware';

// @desc fetch all the products, create a product
// @route GET /api/products
// @access PUBLIC
router.route('/').get(getAllProducts).post(isAuthenticated, createProduct);

// @desc Fetch a single product by id, Delete a product,  update a product
// @route GET /api/products/:id
// @access PUBLIC & PRIVATE/ADMIN
router.route('/:id').get(getProductById).delete(isAuthenticated, deleteProduct).put(isAuthenticated, updateProduct);

module.exports = router;
