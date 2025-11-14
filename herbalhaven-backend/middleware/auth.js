const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const user = require('../models/User');

dotenv.config();

// Protect routes
const protect = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

const existingUser = await user.findById(req.user.id);
if (!existingUser) {
    return res.status(401).json({ message: 'User not found.' });
}


        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Admin middleware

const admin = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = { admin, 
protect };