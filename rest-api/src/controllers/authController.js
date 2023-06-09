const jwt = require('jsonwebtoken');
const blacklist = require('../utils/blacklist');
const SECRET_KEY = process.env.SECRET_KEY;

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

const authController = {
  login: (req, res) => {
    const { username, password } = req.body;

    // Find user by username and password
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate and sign JWT token
    const token = jwt.sign({ username: user.username }, SECRET_KEY);

    res.json({ token });
  },

  logout: (req, res, next) => {
    const token = req.headers.authorization;
  
    // Add the token to the blacklist using the logoutMiddleware
    blacklist.push(token);
  
    // Continue to the next middleware or route handler
    next();
  },

  protectedData: (req, res) => {
    // Handle protected data logic
    res.json({message:'welcome to protected Route'})
  },
};

module.exports = authController
