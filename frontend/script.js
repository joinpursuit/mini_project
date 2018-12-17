// console.log('hello');

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');

  let body = document.querySelector('body')

  fetch('http://localhost:5000/user')
  .then(res => {
    return res.json();
  }).then(parsed => {
    let h1 = document.createElement('h1');
    h1.innerText = "List of Users";
    body.appendChild(h1);

    parsed.listOfUsers.forEach(user => {
      let newButton = document.createElement('button');
      let br = document.createElement('br')
      newButton.innerText = user.name;

      body.appendChild(newButton);
      body.appendChild(br);
    })
  })

})
