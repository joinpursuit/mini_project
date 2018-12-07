const express = require('express');
const app = express();
const port = 8000;

const listening = () => {
  console.log(`listening on port: ${port}`);
};

const endRoute = (req, res) => {
  res.json({
    msg: 'working',
  });
};

const homeRoute = (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
};

const errMsg = (req, res) => {
  res.json({
    msg: 'sorry youre still wonderful',
  });
};

app.use('/assets', express.static('public/assets'));

app.get('/', homeRoute);

app.get('/*', errMsg);

app.listen(port, listening);
