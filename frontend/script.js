// console.log('hello');

document.addEventListener('DOMContentLoaded', () => {
  let newButton;
  let searchResultDiv;
  let userInfoDiv;
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

          searchResultDiv = document.createElement('div');
          searchResultDiv.classList.add('searchResultDiv')
          searchResultDiv.innerText = `${user.name} is one of our users!`

          matchingUser(parsed, searchInput, searchButton, searchInputDiv, display, searchResultDiv)

          console.log(true, user.name, searchInput.value, parsed);
        }

        else {
          // console.log("Not a user",user.name, searchInput.value);
        }

      })
      // console.log(display);
      searchInputDiv.appendChild(searchResultDiv);

      // if (searchResultDiv.innerText === '') {
      //   searchResultDiv.innerText = `${searchInput.value} is not a user.`
      // }

    })

  }//end of function

//=============================
  function matchingUser (parsed, searchInput, searchButton, searchInputDiv, display, searchResultDiv) {
    console.log('hello', searchInput.value);


    let userInfo = searchInput.value.toLowerCase();

    parsed.listOfUsers.forEach(user => {
      userInfo = `\n {\n  id: ${user.id}, \n  name:  ${user.name}, \n  age: ${user.age} \n}`;

      console.log("mine",userInfo);

      if (user.name.toLowerCase() === searchInput.value.toLowerCase()) {

        console.log('oka', userInfo);

        userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('userInfoDiv');
        userInfoDiv.innerText = userInfo;
        // searchResultDiv.appendChild(userInfoDiv);
      } else if (user.name.toLowerCase() != searchInput.value.toLowerCase()){
        userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('userInfoDiv');
        userInfoDiv.innerText = `The user ${searchInput.value} does not exist.`
        // searchResultDiv.appendChild(userInfoDiv)
      }
    })
    searchResultDiv.appendChild(userInfoDiv);
    // console.log('here',userInfo);
  }

//=============================

  function onClickSearch(searchInput, searchButton, searchInputDiv) {

  }//end of function



})
