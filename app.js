const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: process.env.JWT_SECRET,  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  }));

app.set('view engine', 'hbs');

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.use(cookieParser());
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
