require('dotenv').config(); // Load environment variables
const nodemailer = require('nodemailer');

// Create transporter for sending emails via Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Sender email address from .env
        pass: process.env.EMAIL_PASS, // Sender email password (App password for Gmail)
    },
});

/**
 * Function to send formatted email with user information
 * @param {string} subject - Subject of the email
 * @param {string} name - Name of the person sending the query
 * @param {string} designation - Designation of the person
 * @param {string} email - Sender's email address
 * @param {string} mobileNumber - Sender's mobile number
 * @param {string} message - Query or message content
 */
const sendEmail = async (subject, name, designation, email, mobileNumber, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Your email address
        to: "stshubham41@gmail.com", // Recipient email
        subject, // Email subject
        text: `You have received a new query.\n\n
        Name: ${name}\n
        Designation: ${designation}\n
        Email: ${email}\n
        Mobile Number: ${mobileNumber}\n\n
        Message:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail; // Export the function
