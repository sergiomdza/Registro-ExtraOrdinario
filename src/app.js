const express = require('express');
const path = require('path');
const cors = require('cors');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

// Routes
app.use('/usuarios', require('./routes/usuarios'));

module.exports = app;
