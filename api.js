const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbRouter = require('./src/routes/dbRoutes.js')();

app.use('/db', dbRouter);  

app.get('/', (req, res) => {
  res.send('Welcome to my db');
});

app.listen(3000, function () {
  console.log('listening on port 3000');

});