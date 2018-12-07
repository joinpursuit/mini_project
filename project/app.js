let express = require('express')
let users = require('./routes/users')
let posts = require('./routes/posts')
let pictures = require('./routes/pictures')
let app = express()

app.use('/users', users)
app.use('/posts', posts)
app.use('/pictures', pictures)

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Error'
  });
});

app.listen(3000, () => {
  console.log('You are listening in port 3000');
})
