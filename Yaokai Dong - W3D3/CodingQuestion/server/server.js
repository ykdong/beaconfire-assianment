const express = require('express');
const app = express();
const path = require('path');
const todoRoutes = require('./routes');

// Applying middleware
app.use('/', express.json()); // parse requests with JSON payload/body
app.use(express.static(path.join(__dirname, '/public'))); // server static files

// Template engine configuration
app.set('views', path.join(__dirname, '/views')); // where template files are located
app.set('view engine', 'ejs'); // default engine, dont need to specify .ejs extension

// Importing other routes
app.use('/todo', todoRoutes);

app.get('/', (req, res) => res.json('To-Do App (Express.js, EJS, SCSS), Please go to /todo/1'));

// Catch-all route for unsupported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
})

module.exports = app;