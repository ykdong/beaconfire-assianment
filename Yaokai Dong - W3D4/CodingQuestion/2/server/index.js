const app = require('./server');
const db = require('./db/db');
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is listen on port:${PORT}`);
});