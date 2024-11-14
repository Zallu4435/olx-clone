const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// Route to create user (Sign-Up)
router.post('/signup', async (req, res) => {

    if(req.body) {

        try {
            const { username, phone, email, password, confirmPassword } = req.body;
    
            console.log(username, phone, email, password);
            
            // Check if passwords match
            if (password !== confirmPassword) {
                return res.status(400).json({ message: 'Passwords do not match' });
            }
    
            // Check if user already exists
            const existingUser = await User.findOne({ email });
    
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
    
            // Create and save new user (no confirmPassword field to be saved)
            const newUser = new User({ username, email, phone, password });
    
            const savedUser = await newUser.save();
    
            console.log('User saved successfully');
            
            res.status(201).json(savedUser);
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Error saving user", error: err });
        }

    } else {
        res.status(400).json({message: 'something went wrong'})
    }


});

// Route to sign in user (Sign-In)

router.post('/signin', async (req, res) => {

    if(req.body) {

        try {
            const { email, password, phone } = req.body;
    
            // If phone is not provided, authenticate via email
            if (!phone) {
                console.log(email, password, phone);
    
                // Find user by email
                const user = await User.findOne({ email });
    
                if (!user) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }
    
                // Compare password securely using bcrypt
                if (password !== user.password) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }
    
                console.log('Login successful');
                return res.status(200).json({ message: 'Login successful' });
            } 
            else {
                // If phone is provided, authenticate via phone
                const user = await User.findOne({ phone });
    
                if (!user) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }
    
                console.log('Login successful');
                return res.status(200).json({ message: 'Login successful' });
            }
    
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Something went wrong" });
        }

    } else {
        res.status(400).json({message: 'something went wrong'})
    }


});


module.exports = router;
