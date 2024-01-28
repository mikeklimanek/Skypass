const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    let token;

    if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    } else if (req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    if (!token) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        return res.status(400).send('Invalid token');
    }
};

module.exports = {
    authenticateJWT
};
