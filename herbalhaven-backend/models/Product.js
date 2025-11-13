const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    strainType: {
        type: String,
        enum: ['Indica', 'Sativa', 'Hybrid'],
        required: true,
    },
    priceKES: {
        type: Number,
        required: true,
    },
    priceUSD: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;