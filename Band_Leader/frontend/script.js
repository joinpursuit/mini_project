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
    let div = document.querySelector('.data');
    userArr.sort();
    userArr.forEach(userData => {
      let li = document.createElement('li');
      li.innerText = `${userData[0]}, ${userData[1]}`;
      userList.appendChild(li);
    })
    div.appendChild(userList);
  }

  function findUser(data, input) {
      let userArr = data.users.map(userObj => [userObj.name, userObj.instrument]);
      let userItem = document.createElement('ul');
      let div = document.querySelector('.find-display');
      div.innerHTML = "";
      let found = userArr.filter(userData => {
        return (userData[0] === input)
      })
      debugger
      let li = document.createElement('li');

      li.innerText = (found.length ? `${found[0][0]}, ${found[0][1]}`:`${input} not found. eek`)

      userItem.appendChild(li);
      div.appendChild(userItem);
    }

  fireRequest("http://localhost:3000/user", displayMusicians)

  form.addEventListener('change', (event) => {
    event.preventDefault();
    findUser(data, event.target.value)
    form.reset();
  })
})

//build an all users view.
