const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const db = require('./dbConnection');
const todoRoutes = require('./routes');
// connect to database
app.use(cors());

db.connect(err => {
	if (err) throw err;
	console.log('Connected to database');
});

global.db = db;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', todoRoutes);

app.listen(port, () => {
	console.log(`Server is live : http://localhost:${port}`);
});
