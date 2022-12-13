const app = require('./server');

// make server start listening for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}: http://localhost:${PORT}`);
});