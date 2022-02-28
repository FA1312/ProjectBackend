const express = require('express');
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require('../controllers/category');
const { isAuthenticated } = require('../routes/auth.routes');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', isAuthenticated, create);

router.put('/category/:categoryId/:userId', isAuthenticated, update);

router.delete('/category/:categoryId/:userId', isAuthenticated, remove);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
