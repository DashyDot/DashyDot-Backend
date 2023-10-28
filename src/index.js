const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/auth.routes');

const app = express();

dotenv.config()
connectDB();

// Settings

app.set('PORT', process.env.PORT || 4000);

// Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/auth', authRoutes);

app.listen(app.get('PORT'), () => {
    console.log('Server on port http://localhost:', app.get('PORT'));
});

