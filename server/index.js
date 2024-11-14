const express = require('express');
const { connectDB } = require('./config/db');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');

// Load environment variables
require('dotenv').config();

// Initialize the Express app
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Connect to MongoDB 
connectDB();

// Routes
app.use('/user', userRoute);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  