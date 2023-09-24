// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/create', productController.createProduct);

// List all products
router.get('/', productController.listProducts);

// Delete a product by ID
router.delete('/:id', productController.deleteProduct);


// Update quantity of a product by ID
router.post('/:id/update_quantity', productController.updateQuantity);

module.exports = router;
