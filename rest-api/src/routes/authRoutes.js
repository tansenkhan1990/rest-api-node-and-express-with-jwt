const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const  verifyToken  = require('../middleware');
const logoutMiddleware = require('../middleware/logoutMiddleware');

router.post('/login', authController.login);
router.post('/logout', logoutMiddleware, authController.logout);
router.post('/protectedData', verifyToken, authController.protectedData);

module.exports = router;
