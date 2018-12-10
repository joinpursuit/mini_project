document.addEventListener("DOMContentLoaded", () => {
  let select = document.querySelector(".select");
  let dataDiv = document.querySelector(".displayData");

  select.addEventListener("change", event => {
    removeChild(dataDiv);

    let userInput = event.target.value;
    url = `http://localhost:8000/${userInput}`;
    if (userInput === "users") {
      fireRequest(url, displayInfo);
    } else if (userInput === "pictures") {
      fireRequest(url, displayPictures);
    } else if (userInput === "posts") {
      fireRequest(url, displayPost);
    }
  });

  async function fireRequest(url, callback) {
    let result = await axios.get(url);
    callback(result.data);
  }

  function displayInfo(obj) {
    obj.forEach(el => {
      let nameAge = document.createElement("p");
      nameAge.innerHTML = `<p>${el.name} : ${el.age}</p>`;
      dataDiv.appendChild(nameAge);
    });
  }
  // function displayPics(obj) {
  //   obj.forEach(el => {
  //     console.log(el.url);
  //     let picsSection = document.createElement("p");
  //     picsSection.innerHTML = `<img src=${el.url}></img>`;
  //     dataDiv.appendChild(picsSection);
  //   });
  // }

  function displayPictures(obj) {
    obj.forEach(el => {
      let picNode = document.createElement("p");
      let picNode1 = document.createElement("p");
      picNode.innerHTML = `<p>"id" : ${el.id} ,<br> "userId" : ${
        el.userId
      } , </p>`;
      picNode1.innerHTML = `<img src="${el.url}"></img>`;
      dataDiv.appendChild(picNode);
      dataDiv.appendChild(picNode1);
    });
  }

  function displayPost(obj) {
    obj.forEach(el => {
      let userIdBody = document.createElement("p");
      userIdBody.innerHTML = `<p>${el.userId} : <br>${el.body}</p>`;
      dataDiv.appendChild(userIdBody);
    });
  }
  // });

  function removeChild(el) {
    while (el.firstChild) {
      el.firstChild.remove();
    }
  }
}); //documentContentloaded closer
