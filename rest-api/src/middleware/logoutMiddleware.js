const blacklist = require('../utils/blacklist');

// Middleware to check if the token is blacklisted
const logoutMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if the token is already in the blacklist
  if (blacklist.includes(token)) {
    return res.status(401).json({ message: 'Token already invalidated' });
  }
  res.json({message:'logout successfull'})
  next();
};

module.exports = logoutMiddleware;
