const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/sendEmail', (req, res) => {
    const { name, email, message } = req.body;
    
    // Create a transporter object using nodemailer
    // Replace with a dummy email to send notifications
    var transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "ejfeiges@hotmail.com",
            pass: "1Badger@Home!",
        },
    });

    // Email message options
    const mailOptions = {
        from: 'ejfeiges@hotmail.com',
        to: 'ejfeiges@hotmail.com', // Replace with recipient email
        subject: 'New Message from Contact Form',
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Message sent successfully.' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
