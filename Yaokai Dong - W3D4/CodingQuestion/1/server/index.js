const app = require('./server');
const db = require("./db/db");

// make server start listening for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}: http://localhost:${PORT}`);
});