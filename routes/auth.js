const express = require('express');
const authControler = require('../controllers/auth');
const router = express.Router();

router.post('/register', authControler.register);
router.post('/login', authControler.login);


module.exports = router;