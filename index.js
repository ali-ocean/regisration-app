const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/api/sendEmail', sendEmail);

module.exports = app;
