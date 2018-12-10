document.addEventListener('DOMContentLoaded', () => {
  let allUsersDiv = document.querySelector('.allUsersDiv');
  let allUsersUl = document.querySelector('.allUsersUl');
  let allPhotosUl = document.querySelector('.allPhotosUl');
  let singleUserUl = document.querySelector('.singleUserUl');
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
    displayAllUsers(users.data);
    displayAllPhotos(pictures.data);
    getSingleUserDetails(posts.data, pictures.data);
  })
  .catch(error => {
    console.log('promise error: ', error);
  })

  function displayAllUsers(arrObj) {
    arrObj.forEach( personObj => {
      personLi(allUsersUl, personObj);
    });
  }

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    displayFindUser(users.data);
    form.reset();
  })

  function displayFindUser(arrObj) {
    while (findUserUl.firstChild) {
      findUserUl.removeChild(findUserUl.firstChild);
    };
    let foundPersonObj = arrObj.find(personObj => {
      let namesStringRegular = personObj.name;
      let namesLowerCase = (namesStringRegular).toLowerCase();
      return (namesStringRegular === input.value) || (namesStringRegular.includes(input.value)) || (namesLowerCase === input.value) || (namesLowerCase.includes(input.value))
    });

    if (typeof foundPersonObj === 'object') {
      personLi(findUserUl, foundPersonObj);
    } else {
      foundPersonObj = {Error : 'Please select a valid user!'};
      personLi(findUserUl, foundPersonObj);
    }
  }

  function getSingleUserDetails(postsArrObj, picsArrObj) {
    allUsersUl.addEventListener('click', event => {
      let selectedUserId = +event.target.id;

      let foundPersonPost = postsArrObj.find(personObj => {
        return selectedUserId === personObj.userId;
      });

      let foundPersonPicture = picsArrObj.find(personObj => {
        return selectedUserId === personObj.userId
      });

      displaySingleUser(foundPersonPost, foundPersonPicture);
    });
  }

  function displaySingleUser(personPostObj, personPicObj) {
    while(singleUserUl.firstChild) {
      singleUserUl.removeChild(singleUserUl.firstChild)
    };

    let li = document.createElement('li');
    li.classList.add('singleUserLi');
    let newDivPost = document.createElement('div');
    newDivPost.classList.add('personBodyInfo');
    newDivPost.innerText = personPostObj.body;
    let newImgPic = document.createElement('img');
    newImgPic.classList.add('personBodyImg');
    newImgPic.src = personPicObj.url;
    li.append(newDivPost);
    li.append(newImgPic);
    singleUserUl.append(li);

  }

  function displayAllPhotos(arrObj) {
    arrObj.forEach( pictureObj => {
      let li = document.createElement('li');
      let divPicture = document.createElement('img');
      divPicture.src = pictureObj.url;
      li.append(divPicture);
      allPhotosUl.append(li);
    })
  }

  function personLi(correspondingUl, searchedPersonObject1) {
    if (searchedPersonObject1.hasOwnProperty('Error')) {
      let li = document.createElement('li');
      li.innerText = searchedPersonObject1.Error;
      correspondingUl.append(li);
    } else {
      let li = document.createElement('li');
      li.append(createDiv('name', searchedPersonObject1));
      li.append(createDiv('age', searchedPersonObject1));
      correspondingUl.append(li);
    }
  }

  function createDiv(infoTitle, searchedPersonObject1) {
    let newDiv = document.createElement('div');
    newDiv.innerText = `${infoTitle[0].toUpperCase() + infoTitle.slice(1)}: ${searchedPersonObject1[infoTitle]}`;
    newDiv.classList.add(infoTitle);
    newDiv.setAttribute('id', searchedPersonObject1.id);
    return newDiv;
  }

});
