const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.send('<h1>Home Page working</h1>');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
