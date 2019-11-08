const express = require('express');
const app = express();
const port = 5000;
const db = require('./dbConnection');

// connect to database
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;



app.get('/',(req,res) => {
  // let query = "SELECT * FROM `todoBuckets` ORDER BY id ASC"; // query database to get all the players
  // db.query(query, (err, result) => {
  //     if (err) {
  //         res.redirect('/');
  //     }
    res.json('result')
  // });
})

app.listen(port,() => {
  console.log(`Server is live : http://localhost:${port}`);
});