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

  logout: (req, res) => {
    const token = req.headers.authorization;

    // Check if the token is already in the blacklist
    if (blacklist.includes(token)) {
      return res.status(401).json({ message: 'Token already invalidated' });
    }

    // Add the token to the blacklist
    blacklist.push(token);

    res.json({ message: 'Logout successful' });
  },

  protectedData: (req, res) => {
    // Handle protected data logic
    return res.json({ message: 'This is protected data' });
  },
};

module.exports = authController
