const express = require('express');
const app = express();
const port = 8000;
const picture = require('./routes/picture');
const post = require('./routes/post');
const user = require('./routes/user');

const listening = () => {
  console.log(`listening on port: ${port}`);
};

const endRoute = (req, res) => {
  res.json({
    msg: 'working',
  });
};

const homeRoute = (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
};

const errMsg = (req, res) => {
  res.json({
    msg: '💔 4️⃣ 0️⃣ 4️⃣ 💔',
  });
};

app.use('/assets', express.static('frontend/assets'));
app.use('/picture', picture);
app.use('/post', post);
app.use('/user', user);

app.get('/', homeRoute);
app.get('/*', errMsg);

app.listen(port, listening);
