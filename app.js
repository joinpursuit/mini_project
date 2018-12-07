const express = require('express');
const app = express();
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');
const pictures = require('./routes/pictures.js');

app.use('/users', users);
app.use('/posts', posts);
app.use('/pictures', pictures);

app.get('/*', (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(404).json({
    message: 'There is an Error!'
  })
})

app.listen(8000, () => {
  console.log('This is listening to PORT 8000.');
});