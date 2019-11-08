const express = require('express');
const app = express();
const port = 5000;
const db = require('./dbConnection');
const todoRoutes = require('./routes');
// connect to database

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

global.db = db;

app.use(express.json());
app.use('/api', todoRoutes);


app.listen(port,() => {
  console.log(`Server is live : http://localhost:${port}`);
});