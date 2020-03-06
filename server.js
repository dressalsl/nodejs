const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o DataBase
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true});
// com o npm install require-dir ele pega todos os models
requireDir('./src/models');



// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);