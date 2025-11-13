// herbalhaven/herbalhaven/herbalhaven-backend/controllers/orderController.js

const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Additional functions for handling orders can be added here
// For example, updating or deleting an order

// Placeholder for M-Pesa integration
// This is where you would implement the logic to handle M-Pesa payments
// using the Safaricom Daraja API.

// Placeholder for Stripe integration
// This is where you would implement the logic to handle Stripe payments.