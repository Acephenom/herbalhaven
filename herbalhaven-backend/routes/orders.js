const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private
router.post('/', protect, createOrder);

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', protect, getOrder);

module.exports = router;