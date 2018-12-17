// console.log('hello');

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello');

  let body = document.querySelector('body')

  fetch('http://localhost:5000/user')
  .then(res => {
    return res.json();
  }).then(parsed => {



    // let usersDivBackground = document.createElement('div');
    // usersDivBackground.classList.add('usersDivBackground')
    // body.appendChild(usersDivBackground);


    let usersDiv = document.createElement('div');
    usersDiv.classList.add('usersDiv')
    body.appendChild(usersDiv);

    let h1 = document.createElement('h1');
    h1.innerText = "List of Users";
    usersDiv.appendChild(h1);


    parsed.listOfUsers.forEach(user => {
      let newButton = document.createElement('button');
      let br = document.createElement('br')
      newButton.innerText = user.name;
      newButton.classList.add('userNameButton')

      usersDiv.appendChild(newButton);
      usersDiv.appendChild(br);
    }) // end of forEach.

    let searchInputDiv = document.createElement('div');
    searchInputDiv.classList.add('searchInputDiv');
    body.appendChild(searchInputDiv);

    let searchInput = document.createElement('input');
    searchInput.classList.add('search');



  }) // end of parsed.

})
