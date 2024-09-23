// routes/contact.js (for example)
const express = require("express");
const { contactUs } = require("../controller/Auth.js"); // Ensure this path is correct

const router = express.Router();

// Route to handle contact form submissions
router.post("/contact", contactUs);

module.exports = router; // Use CommonJS syntax to export