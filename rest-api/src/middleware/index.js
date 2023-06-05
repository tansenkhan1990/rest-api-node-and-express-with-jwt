const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const blacklist = require("../utils/blacklist");

// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if the token is already in the blacklist
  if (blacklist.includes(token)) {
    return res.status(401).json({ message: "unauthorize request" });
  }
  res.json({message:'request successfull for protected route'})
  next();
};

module.exports = verifyToken;
