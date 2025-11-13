const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
exports.createPaymentIntent = async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Placeholder for future Stripe webhook integration
exports.handleWebhook = (req, res) => {
    // This is where you would handle Stripe webhooks
    // For example, you could verify the event and update your database accordingly
    res.status(200).send('Webhook received');
};