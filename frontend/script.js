// console.log('hello');

document.addEventListener('DOMContentLoaded', () => {
  let newButton;
  // console.log('hello');

  let body = document.querySelector('body')

  fetch('http://localhost:5000/user')
  .then(res => {
    return res.json();
  }).then(parsed => {

    appendListOfUsers(parsed)
    appendSearchBox(parsed)

  }) // end of parsed.


  function appendListOfUsers(parsed) {
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
      newButton = document.createElement('button');
      let br = document.createElement('br')
      newButton.innerText = user.name;
      newButton.classList.add('userNameButton')

      usersDiv.appendChild(newButton);
      usersDiv.appendChild(br);
    }) // end of forEach.

  } //end of function


  function appendSearchBox(parsed ) {
    let searchInputDiv = document.createElement('div');
    searchInputDiv.classList.add('searchInputDiv');
    body.appendChild(searchInputDiv);

    let searchInput = document.createElement('input');
    searchInput.classList.add('searchInput');
    searchInputDiv.appendChild(searchInput);

    let searchButton = document.createElement('button');
    searchButton.classList.add('searchButton');
    searchButton.innerText = "Find User";
    searchInputDiv.appendChild(searchButton)

    findUserBySearchInput(parsed, searchInput, searchButton, searchInputDiv);
    onClickSearch(searchInput, searchButton, searchInputDiv);
  }//end of function

  function findUserBySearchInput(parsed, searchInput, searchButton, searchInputDiv) {
    searchButton.addEventListener('click', () => {
      let display = searchInput.value.toLowerCase();

      parsed.listOfUsers.forEach(user => {
        // display = user.name.toLowerCase();
        if (display === user.name.toLowerCase()) {
          display = user.name.toLowerCase();
          console.log(true, user.name, searchInput.value);
        // } else {
        //   console.log("Not a user",user.name, searchInput.value);
        }
      })
      console.log(display);

    })

  }//end of function





  function onClickSearch(searchInput, searchButton, searchInputDiv) {

  }//end of function



})
