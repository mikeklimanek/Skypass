const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection(process.env.DATABASE_URL);


exports.register = (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm } = req.body;

    // Function to validate the password
    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }
    

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            });
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords do not match'
            });
        } else if (!validatePassword(password)) {
            return res.render('register', {
                message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User registered'
                });
            }
        });
    });
};

exports.login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        return res.render('login', {
            message: 'Please provide an email and password'
        });
    };

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
            return res.render('login', {
                message: 'An error occurred'
            });
        }

        if (results.length === 0 || !await bcrypt.compare(password, results[0].password)) {
            return res.render('login', {
                message: 'Email or Password is incorrect'
            });
        } else {
            // User has been successfully authenticated
            // Here you can set up your JWT token or session as per your requirement
            // For example: const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

            // Redirect user to the dashboard or another page
            return res.status(200).redirect('/profile'); // replace '/dashboard' with your success redirect page
        }
    });  
        
};