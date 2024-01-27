import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });




const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
});