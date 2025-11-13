const express = require('express');
const router = express.Router();
const mpesaController = require('../controllers/mpesaController');
const stripeController = require('../controllers/stripeController');

// M-Pesa STK Push
router.post('/mpesa', mpesaController.initiatePayment);

// Stripe Payment
router.post('/stripe', stripeController.processPayment);

module.exports = router;