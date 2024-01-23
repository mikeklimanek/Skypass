const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
