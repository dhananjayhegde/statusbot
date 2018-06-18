const express = require('express');
const app = express();

const cartsRoutes = require('./api/routes/carts');

app.use('/carts', cartsRoutes);


module.exports = app;