// controllers/productController.js
const Product = require('../models/Product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    const formattedResponse = {
      data: {
        product: {
          _id: product._id,
          name: product.name,
          quantity: product.quantity,
          __v: product.__v,
        },
      },
    };
    
    // Set the "Content-Type" header to "application/json"
    res.setHeader('Content-Type', 'application/json');
    
    // Send the JSON response
    res.status(201).json(formattedResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// List all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const formattedResponse = {
      data: {
        products: products.map((product) => ({
          _id: product._id,
          name: product.name,
          quantity: product.quantity,
          __v: product.__v,
        })),
      },
    };

    // Send the JSON response with "Content-Type" header
    res.status(200).json(formattedResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    // Send the JSON response with "Content-Type" header
    res.status(200).json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update quantity of a product by ID
exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ data: { message: 'Product not found' } });
    }
    product.quantity += parseInt(number, 10);
    await product.save();
    const formattedResponse = {
      data: {
        product: {
          _id: product._id,
          name: product.name,
          quantity: product.quantity,
          __v: product.__v,
        },
        message: 'Updated successfully',
      },
    };

    // Send the JSON response with "Content-Type" header
    res.status(200).json(formattedResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
