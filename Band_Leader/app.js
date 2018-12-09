const express = require('express');
let user = require('./routes/user.js');
let picture = require('./routes/picture.js');
let post = require('./routes/post.js');
const app = express()

app.use('/user', user);
app.use('/picture', picture);
app.use('/post', post);

app.get('*', (req, res) => {
  res.status(404).json({ message: "you got nuttin, 404"})
})

app.listen(3000, () => {
  console.log('listening to 3000');
})
