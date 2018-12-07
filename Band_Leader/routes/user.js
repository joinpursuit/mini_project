const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: "Gregor Samsa", instrument: "Violin", age: 54 },
  { id: 2, name: "Bobbie Tillman", instrument: "Cello", age: 23 },
  { id: 3, name: "Tabitha Ealhstan", instrument: "Trumpet", age: 34 },
  { id: 4, name: "Kamal Ante", instrument: "Guitar", age: 46 },
  { id: 5, name: "Keenan Kristian", instrument: "Piano", age: 19 },
  { id: 6, name: "Lynne Meztli", instrument: "Drums", age: 44 },
  { id: 7, name: "Amrita Gabriela", instrument: "Vibes", age: 62 },
  { id: 8, name: "Daniel Elke", instrument: "Alto Saxophone", age: 78 },
  { id: 9, name: "Roberta Alba", instrument: "Double Bass", age: 27 },
  { id: 10, name: "Julia Layla", instrument: "Voice", age: 55 }
]

router.get('/', (req, res) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.json({users: users})
})

router.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);

  let selectedUser = users.filter(userObj => {
    return (userObj.id === id)
  })
  res.set("Access-Control-Allow-Origin", "*")
  res.json(selectedUser[0])

})

module.exports = router
