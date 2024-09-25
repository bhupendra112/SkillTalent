const sendEmail = require('../utils/mailer.js'); // Import the mailer function

/**
 * Handles contact form submissions.
 */
const contactUs = async (req, res) => {
    const { query, name, designation, email, mobileNumber, message } = req.body;

    // Validate that all fields are present
    if (!query || !name || !designation || !email || !mobileNumber || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate mobile number: must be exactly 10 digits
    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
        return res.status(400).json({ error: 'Mobile number must be 10 digits' });
    }

    try {
        // Send the email
        await sendEmail(query, name, designation, email, mobileNumber, message);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

module.exports = { contactUs }; // Export the function
