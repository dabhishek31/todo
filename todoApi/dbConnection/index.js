const mysql = require('mysql');

const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo',
  multipleStatements: true
});

module.exports = db;