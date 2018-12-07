document.addEventListener("DOMContentLoaded", () => {
  let select = document.querySelector(".select");
  let dataDiv = document.querySelector(".displayData");
  select.addEventListener("change", event => {
    removeChild(dataDiv);
    let userInput = event.target.value;
    let url = `http://localhost:8000/${userInput}/`;

    if (userInput === "users") {
      fireRequest(url, displayInfo);
      let form = document.createElement('form');
      let input = document.createElement('input');
      input.innerHTML = "<input type='text'>";
      form.appendChild(input);
      document.body.appendChild(form);
    } else if (userInput === "pictures") {
      fireRequest(url, displayPics);
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
  function displayPics(obj) {
    obj.forEach(el => {
      let picsSection = document.createElement("p");
      picsSection.innerHTML = `<img src="${el.url}"></img>`;
      dataDiv.appendChild(picsSection);
    });
  }
  function displayPost(obj) {
    obj.forEach(el => {
      let userIdBody = document.createElement("p");
      userIdBody.innerHTML = `<p>${el.userId} : <br>${el.body}</p>`;
      dataDiv.appendChild(userIdBody);
    });
  }
  function removeChild(el) {
    while (el.firstChild) {
      el.firstChild.remove();
    }
  }
});
