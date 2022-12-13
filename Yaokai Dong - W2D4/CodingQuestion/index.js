const express = require('express');
const app = express();
const router = require('./Router');

// Applying middleware
app.use('/', express.json()); // parse requests with JSON payload/body

// Route handling for HTTP request
app.use('/todo', router);

// Catach-all route for unsuported paths
app.all('*', (req, res) => {
  res.status(400).json({ error: 'InvalidURI', description: `The URI ${req.url} is not valid.`});
})

// Make server start listening for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server Started. Listen on: http://localhost:${port}`)
})