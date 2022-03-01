import asyncHandler from 'express-async-handler';
import Product from '../models/Product';

// @desc fetch all the products
// @route GET /api/products
// @access PUBLIC

const getAllProducts = asyncHandler(async (req, res) => {
  res.json({ products });
});

// @desc Fetch a single product by id
// @route GET /api/products/:id
// @access PUBLIC
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else {
    // throw a custom error so that our error middleware can catch them and return apt json
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Delete a product
// @route DELETE /api/products/:id
// @access PRIVATE/ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed from DB' });
  } else {
    // throw a custom error so that our error middleware can catch them and return apt json
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Create a product
// @route POST /api/products/
// @access PRIVATE/ADMIN
const createProduct = asyncHandler(async (req, res) => {
  // create a dummy product which can be edited later
  const product = new Product({
    name: 'Sample',
    description: 'Describe',
    price: 0,
    category: 'Jewelry',
    photo: '/images/whateaver.jpg',
    shipping: true,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update a product
// @route PUT /api/products/:id
// @access PRIVATE/ADMIN
const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, photo, shipping } = req.body;
  const product = await Product.findById(req.params.id);

  // update the fields which are sent with the payload
  if (product) {
    if (name) product.name = name;
    if (price) product.price = price;
    if (category) product.category = category;
    if (description) product.description = description;
    if (photo) product.photo = photo;
    if (shipping) product.shipping = shipping;

    const updatedProduct = await product.save();
    if (updatedProduct) res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not available');
  }
});

export { getProductById, getAllProducts, deleteProduct, createProduct, updateProduct };
