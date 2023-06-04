require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
