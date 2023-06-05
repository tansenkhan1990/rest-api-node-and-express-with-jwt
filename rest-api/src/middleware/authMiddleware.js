const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Extract the token from the Authorization header
    const tokenValue = token.split(' ')[1]; // Assuming the token is sent as 'Bearer <token>'

    // Check if the token is blacklisted or invalidated
    if (blacklist.includes(tokenValue)) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    jwt.verify(tokenValue, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Failed to authenticate token' });
      }

      req.user = decoded;
      next();
    });
  }
};

module.exports = authMiddleware;
