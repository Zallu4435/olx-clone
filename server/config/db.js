const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

exports.connectDB = async() => {
    try {

        console.log(process.env.MONGODB_URI);
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch(err) {
        console.log('MongoDB connection error: ', err);
        process.exit(1);
    }
};
