document.addEventListener('DOMContentLoaded', () => {

  let form = document.querySelector('.find')
  let data;

  async function fireRequest(url, cb) {
    try {
      let resp = await axios.get(url);
      data = resp.data
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
      userList.appendChild(li);
    })
    div.appendChild(userList);

    userList.addEventListener('click', (event) => {
      let nameOnly = event.target.innerText.split(",")[0];
      let clickedId = findMusician(data, nameOnly)[0][2];
      fireRequest(`http://localhost:3000/picture/user/${clickedId}`, displayPics)
      // fireRequest(`http://localhost:3000/picture/user/${clickedId}`, displayPosts)
    })
  }

  function findMusician(data, input) {
      let userArr = data.users.map(userObj => [userObj.name, userObj.instrument, userObj.id]);
      let userItem = document.createElement('ul');
      let div = document.querySelector('.find-display');
      div.innerHTML = "";

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
    div.appendChild(img);
  }

  fireRequest("http://localhost:3000/user", displayMusicians)

  form.addEventListener('change', (event) => {
    event.preventDefault();
    findMusician(data, event.target.value)
    form.reset();
  })

})

//fix bug of cannot find after click on user
