const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./config/db.js");

// Load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Define routes
const contentRoutes = require('./routes/contentRoutes.js');

// Use defined routes
app.use('/', contentRoutes);

// Handle undefined routes (404)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Handle errors (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Call the connectDB function to establish MongoDB connection
connectDB()
    .then(() => {
        // inplace of process.env.PORT you can also use 3000
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error.message);
    });
