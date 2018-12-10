let express = require("express");
let router = express.Router();

let users = [
  { id: 1, name: "Gregor Samsa", age: 54 },
  { id: 2, name: "Bobbie Tillman", age: 23 },
  { id: 3, name: "Tabitha Ealhstan", age: 34 },
  { id: 4, name: "Kamal Ante", age: 46 },
  { id: 5, name: "Keenan Kristian", age: 19 },
  { id: 6, name: "Lynne Meztli", age: 44 },
  { id: 7, name: "Amrita Gabriela", age: 62 },
  { id: 8, name: "Daniel Elke", age: 78 },
  { id: 9, name: "Roberta Alba", age: 27 },
  { id: 10, name: "Julia Layla", age: 55 }
];

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(users);
});

router.get("/:id", (req, res) => {
  let usersId = req.params.id;
  res.set("Access-Control-Allow-Origin", "*");
  res.json(users[usersId - 1]);
});

module.exports = router;
