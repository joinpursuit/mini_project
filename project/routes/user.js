let express = require('express')
let router = express.Router()

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

router.get('/', (req, res) => {
  res.json(users)
})

router.get('/:id', (req, res) => {
  let idNum = parseInt(req.params.id)

  if(isNaN(idNum)) {
    res.json('Please enter a number!')
  }else if(idNum > 10 || idNum < 1) {
    res.json('Please enter a number from 1 - 10!')
  }else {
    users.forEach(el => {
      if(idNum === el.id) {
        res.json(el)
      }
    })
  }




  // res.json(theId)
})







module.exports = router
