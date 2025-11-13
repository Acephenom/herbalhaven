const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized access' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Access denied, admin privileges required' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = adminMiddleware;