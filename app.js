const express = require("express");
const app = express();
const port = 3000;

const pictureRouter = require("./routes/picture.js");
const postRouter = require("./routes/post.js");
const userRouter = require("./routes/user.js");

app.use("/picture", pictureRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("hi");
});

app.get("/*", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("404 - not a route of ours :(.  Please check /pictures or /post or /user");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
