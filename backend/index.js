const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const contactRouter = require('./routes/Auth.js')
require('dotenv').config(); // Add parentheses to load environment variables
const port = process.env.PORT || 3000;
//const { sendEmail } = require('./utils/mailer.js');

app.use(cors({
    origin: 'http://localhost:5173',
    allowedHeaders: ['Content-Type', 'Authorization', 'auth-token'], // Specify the headers you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods
    credentials: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the contact router
app.use('/api', contactRouter); // This will make your contact route available at /api/contact

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
