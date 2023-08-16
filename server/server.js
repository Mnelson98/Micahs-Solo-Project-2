const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3010;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../dist')));