const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));

// POST route for the login form
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Here you would typically check the username and password against your database
    // For simplicity, we'll just log them to the console and return a success message
    console.log(`Username: ${username}, Password: ${password}`);
    res.send('Login successful!');
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));