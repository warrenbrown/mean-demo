const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const config = require('./config/database');

//connect to the database
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('unable to connect to database')
  } else {
    console.log('Connected to database:' + config.db);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to my app');
});

app.get('/home', (req, res) => {
  res.send('Welcom to the home page');
})

app.listen(port, function() {
  console.log('Server is running at http://localhost:' + port);
});
