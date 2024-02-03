const express = require('express');
const router = express.Router();
const authJWT = require('../controllers/JWT.js').authenticateJWT;


router.get('/', (req, res) => {
    const isAuthenticated = req.cookies['token'] ? true : false;
    res.render('index', { isAuthenticated });
});

router.get('/register', (req, res) => { 
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authJWT, (req, res) => {
    const isAuthenticated = req.cookies['token'] ? true : false;
    res.render('profile', { isAuthenticated });
});

router.get('/forum', authJWT, (req, res) => {
    const isAuthenticated = req.cookies['token'] ? true : false;
    res.render('forum', { isAuthenticated });
});

router.get('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.redirect('/');  
});

module.exports = router;