const sendEmail = require('../utils/mailer.js'); // Import the function directly

const contactUs = async(req, res) => {
    const { query, name, designation, email, mobileNumber, message } = req.body;

    // Validate that all fields are present
    if (!name || !designation || !email || !mobileNumber || !message || !query) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate mobile number: must be exactly 10 digits
    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
        return res.status(400).json({ error: 'Mobile number must be 10 digits' });
    }

    try {
        await sendEmail(
            query, // Subject of the email
            name, // Sender's name
            designation, // Sender's designation
            email, // Sender's email
            mobileNumber, // Sender's mobile number
            message // Message content
        );
        res.status(200).json({ message: 'message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

module.exports = { contactUs }; // Ensure proper export