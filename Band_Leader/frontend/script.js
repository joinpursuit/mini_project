document.addEventListener('DOMContentLoaded', () => {

  let form = document.querySelector('.find')
  let dataUsers = {};

  async function fireRequest(url, cb) {
    try {
      let resp = await axios.get(url);
      if (resp.data.users) {
        dataUsers = resp.data;
      }

      cb(resp.data);
    }
    catch(err) {
      console.log("OH NO! "+err);
    }
  }

  function displayMusicians(data) {
    let userArr = data.users.map(userObj => [userObj.name, userObj.instrument]);
    let userList = document.createElement('ul');
    userList.style.width = "200px"
    let div = document.querySelector('.data');
    userArr.sort();
    userArr.forEach(userData => {
      let li = document.createElement('li');
      li.innerText = `${userData[0]}, ${userData[1]}`;
      li.style.background = "lightblue";
      li.style.border = "1px solid white"
      userList.appendChild(li);
    })
    div.appendChild(userList);

    userList.addEventListener('click', (event) => {
      let nameOnly = event.target.innerText.split(",")[0];
      let clickedId = findMusician(data, nameOnly)[0][2];
      fireRequest(`http://localhost:3000/picture/user/${clickedId}`, displayPics)
      fireRequest(`http://localhost:3000/post/user/${clickedId}`, displayPosts)
    })
  }

  function findMusician(data, input) {

      let userArr = data.users.map(userObj => [userObj.name, userObj.instrument, userObj.id]);
      let userItem = document.createElement('ul');
      let div = document.querySelector('.find-display');
      let divPost = document.querySelector('.user-posts')
      let divImg = document.querySelector('.user-imgs')
      div.innerHTML = "";
      divPost.innerHTML = "";
      divImg.innerHTML = "";
      let found = userArr.filter(userData => {
        return (userData[0] === input)
      })
      let li = document.createElement('li');

      li.innerText = (found.length ? `${found[0][0]}, ${found[0][1]}`:`${input} not found. eek`)

      userItem.appendChild(li);
      div.appendChild(userItem);
      return found;
    }

  function displayPics(data) {
    let div = document.querySelector('.user-imgs');
    div.innerHTML = "";
    let img = document.createElement('img');
    img.src = data.url;
    img.style.width = "300px"
    div.appendChild(img);
  }

  function displayPosts(data) {
    let div = document.querySelector('.user-posts');
    div.innerHTML = "";
    let post = document.createElement('p');
    post.innerText = data.body;
    div.appendChild(post);
  }

  function displayAllPhotos(data) {
    let div = document.querySelector('.all-imgs');
    div.innerHTML = "";

    data.pictures.forEach(imgObj => {
      let img = document.createElement('img');
      img.src = imgObj.url;
      img.style.width = "150px";
      div.appendChild(img);
    })

  }

  fireRequest("http://localhost:3000/user", displayMusicians)
  fireRequest("http://localhost:3000/picture", displayAllPhotos)

  form.addEventListener('change', (event) => {
    event.preventDefault();
    findMusician(dataUsers, event.target.value)
    form.reset();
  })
  ;

})

//fix bug of cannot find after click on user
