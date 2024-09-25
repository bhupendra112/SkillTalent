const express = require('express');
const { contactUs } = require('../controller/Auth.js'); // Ensure the path is correct

const router = express.Router();

// Route to handle contact form submissions
router.post('/contact', contactUs);

module.exports = router; // Export the router
