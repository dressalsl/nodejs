const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

routes.get('/products',ProductController.index);
routes.post('/products', ProductController.store);

// exporto pq vou usar no serve.js
module.exports = routes;