const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my app');
});


app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running at http://localhost:' + port);
});
