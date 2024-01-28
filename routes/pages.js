const express = require('express');
const router = express.Router();
const authJWT = require('../controllers/JWT.js').authenticateJWT;

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => { 
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authJWT, (req, res) => {
    res.render('profile');
});

module.exports = router;