const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Routes
app.use('/api', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
