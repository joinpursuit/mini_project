const express = require("express");
// const data = require('./data.js');
let pictures = require("./routes/pictures");
let posts = require("./routes/posts");
let users = require("./routes/users");
const app = express();

app.use("/user", users);
app.use("/post", posts);
app.use("/picture", pictures);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
