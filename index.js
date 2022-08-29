const express = require('express');
// Bring in connection to db
const db = require('./config/connection');
// Insert routes to use
const routes = require('./routes');

// Create port to listen
const PORT = process.env.port || 9001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
