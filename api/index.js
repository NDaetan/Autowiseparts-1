const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const productsRoutes = require('../server/routes/products');
const usersRoutes = require('../server/routes/users');
const ordersRoutes = require('../server/routes/orders');
const reviewsRoutes = require('../server/routes/reviews');
const paymentsRoutes = require('../server/routes/payments');

const app = express();

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/payments', paymentsRoutes);

// Handle root API route
app.get('/api', (req, res) => {
  res.json({ message: 'Autowise Parts API is running!' });
});

module.exports = app;
