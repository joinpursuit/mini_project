const express = require("express");
const app = express();
const { user, post, picture } = require("./data.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const pictureRoute = require("./routes/pictures.js");
const port = 8000;

app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/pictures", pictureRoute);

app.get("*", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(404).json({
    message: "Error"
  });
});

app.listen(port, () => {
  console.log(`You are listening to port ${port}`);
});
