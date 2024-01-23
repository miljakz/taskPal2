const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Mock database
var database = {
    'user1': 'password1',
    'user2': 'password2'
    // add more users as needed
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (database[username] !== undefined && database[username] === password) {
        res.send({ message: 'Login successful!' });
    } else {
        res.send({ message: 'Login failed!' });
    }
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (database[username] !== undefined) {
        res.send({ message: 'User already exists!' });
    } else {
        database[username] = password;
        res.send({ message: 'User signed up successfully!' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
