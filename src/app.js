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

//staticFiles
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/maestros', require('./routes/maestros'));
app.use('/api/materias', require('./routes/materias'));
app.use('/api/registro', require('./routes/registro'));
app.use('/api/descarga', require('./routes/descarga'));

module.exports = app;
