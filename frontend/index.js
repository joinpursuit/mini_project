
document.addEventListener('DOMContentLoaded', () => {


  let select = document.querySelector('.select');
  let dataDiv = document.querySelector('.displayData');
  
  select.addEventListener('change', (event) => {
    removeChild(dataDiv);

    let userInput = event.target.value;
    let url = `http://localhost:8000/${userInput}/`;
    if (userInput === 'users') {
      fireRequest(url, displayUsers);
    } else if (userInput === 'posts') {
      fireRequest(url, displayPosts);       
    } else if (userInput === 'pictures') {
      fireRequest(url, displayPictures); 
    }
  })

  async function fireRequest (url, callback) {
    let result = await axios.get(url);
    callback(result.data);
  }

  function displayUsers (obj) {
    obj.forEach(el => {
      let userNode = document.createElement("p");
      userNode.innerHTML = `<p>"id" : ${el.id} , "name" : ${el.name} , "age": ${el.age} </p> `;
      dataDiv.appendChild(userNode);
    });
  }

  function displayPosts (obj) {
    obj.forEach(el => {
      let postNode = document.createElement("p");
      postNode.innerHTML = `<p>"id" : ${el.id} ,<br> "userId" : ${el.userId} ,<br> "body" : ${el.body} </p>`;
      dataDiv.appendChild(postNode);
    });
  }

  function displayPictures (obj) {
    obj.forEach(el => {
      let picNode = document.createElement("p");
      let picNode1 = document.createElement("p");
      picNode.innerHTML = `<p>"id" : ${el.id} ,<br> "userId" : ${el.userId} , </p>`;
      picNode1.innerHTML= `<img src="${el.url}"></img>`;
      dataDiv.appendChild(picNode);
      dataDiv.appendChild(picNode1);
    });
  }

  function removeChild(el) {
    while (el.firstChild) {
      el.firstChild.remove();
    }
  }

})