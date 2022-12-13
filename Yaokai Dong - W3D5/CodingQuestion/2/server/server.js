const express = require('express');
const app = express();
const path = require('path');
const Route = require('./route/index.js');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
//configuring .env
require('dotenv').config({ path: path.join(__dirname, '../../../.env')});

// Applying the middle ware
app.use('/', express.json()); // parse requests with json payload/body
app.use(express.static(path.join(__dirname, '/public'))); // serve static files
app.use(session({
  name: 'SESSIONID',
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'strict' },
  
}));

// Template engine configuration
app.set('views', path.join(__dirname, '/views')); // where template files are located
app.set('view engine', 'ejs'); // default engine, dont need to specify .ejd extension

// Import other routes
app.get('/', (req, res) => {
  res.render('login');
})
app.use('/home', Route.homeRoute);
// Handle routes for user
app.use('/user', Route.userRoute);
// Handle routes for songs
app.use('/songs', Route.songsRoute);
// Handle routes for artists
app.use('/artists', Route.artistsRoute);

// Catch-all route for unsupported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
})

module.exports = app;