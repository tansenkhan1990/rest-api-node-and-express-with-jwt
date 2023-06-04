const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const authController = {
  login: (req, res) => {
    // Validate user credentials and generate a JWT
    // For simplicity, this is just a sample implementation
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      const token = jwtUtils.generateToken({ username });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  },
  
  register: (req, res) => {
    // Handle user registration logic
  }
};

module.exports = authController;
