const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected');
    } catch (err) {
        console.error("Error connecting to MongoDB: ");
        process.exit(1);
    }
}

module.exports = connectDB;