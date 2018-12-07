document.addEventListener('DOMContentLoaded', () => {
  let allUsersDiv = document.querySelector('.allUsersDiv');
  let allUsersUl = document.querySelector('.allUsersUl');
  let allPhotosUl = document.querySelector('.allPhotosUl');
  let submit = document.querySelector('#submit');
  let findUserUl = document.querySelector('.findUserUl');
  let input = document.querySelector('#input');
  let form = document.querySelector('form');

  const urlAllUsers = 'http://localhost:3000/user';
  const urlAllPictures = 'http://localhost:3000/picture';
  const urlAllPosts = 'http://localhost:3000/post/';

  const usersPromise = axios.get(urlAllUsers);
  const picturesPromise = axios.get(urlAllPictures);
  const postsPromise = axios.get(urlAllPosts);

  let users, pictures, posts;

  Promise
  .all([usersPromise, picturesPromise, postsPromise])
  .then(arrObjValues => {
    [users, pictures, posts] = arrObjValues;
    setAllUsers(users.data);
    allPhotos(pictures.data);

  })

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    findUser(users.data);
    form.reset();
  })

  // allInfoArray = arrObjValues.map(route => route.data);
  // return allInfoArray;
  // .then(res => {
  //   // console.log(Array.isArray(res));
  //   setAllUsers(res[0]);
  //   allPhotos(res[1]);
  //
  // })
  // console.log(allInfoArray)

  // axios
  // .get('http://localhost:3000/user')
  // .then(users => {
  //   setAllUsers(users.data);
  //   submit.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     findUser(users.data);
  //     form.reset();
  //   })
  // })

  // axios
  // .get('http://localhost:3000/picture')
  // .then(pictures => {
  //   allPhotos(pictures.data);
  // })

  // function singleUser() {
  //
  // }

  function allPhotos(arrObj) {
    arrObj.forEach( pictureObj => {
      let li = document.createElement('li');
      let divPicture = document.createElement('img');
      divPicture.src = pictureObj.url;
      li.append(divPicture);
      allPhotosUl.append(li);
    })
  }

  function findUser(arrObj) {
    while (findUserUl.firstChild) {
    findUserUl.removeChild(findUserUl.firstChild);
    }

    let foundPerson = arrObj.find(personObj => {
      let namesStringRegular = personObj.name;
      let namesLowerCase = (namesStringRegular).toLowerCase();
      return (namesStringRegular === input.value) || (namesStringRegular.includes(input.value)) || (namesLowerCase === input.value) || (namesLowerCase.includes(input.value))
    });

    let li = document.createElement('li');
    let divId = document.createElement('div');
    let divAge = document.createElement('div');
    let divName = document.createElement('div');
    divId.classList.add('id');
    divAge.classList.add('age');
    divName.classList.add('name');
    divId.innerText = `ID: ${foundPerson.id}`;
    divAge.innerText = `Age: ${foundPerson.age}`;
    divName.innerText = `Name: ${foundPerson.name}`;
    // li.append(divId);
    li.append(divName);
    li.append(divAge);
    findUserUl.append(li);
  }

  function setAllUsers(arrObj) {
    arrObj.forEach( personObj => {
      // console.log(personObj);
      // console.log(Array.isArray(personObj));
      let li = document.createElement('li');
      let divId = document.createElement('div');
      let divAge = document.createElement('div');
      let divName = document.createElement('div');
      divId.classList.add('id');
      divAge.classList.add('age');
      divName.classList.add('name');
      divId.innerText = `ID: ${personObj.id}`;
      divAge.innerText = `Age: ${personObj.age}`;
      divName.innerText = `Name: ${personObj.name}`;
      // li.append(divId);
      li.append(divName);
      li.append(divAge);
      allUsersUl.append(li);
    })
  }

});
