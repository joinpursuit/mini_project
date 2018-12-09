document.addEventListener('DOMContentLoaded', () => {
  // let body = document.querySelector('body');
  // let userNames = document.querySelector('.user-names');
  let tabcontent = document.querySelectorAll('.tabcontent');
  let tablinks = document.querySelectorAll('.tablink');

  let usersButton = document.querySelector('#users-button');
  let usersDiv = document.querySelector('#users');
  let ul = document.querySelector('#users-list');
  let clickedUser = document.querySelector('#singleUser');

  let photosButton = document.querySelector('#photos-button');
  let photosDiv = document.querySelector('#photos');
  let photosList = document.querySelector('#photos-list');

  let postsButton = document.querySelector('#posts-button');
  let postsDiv = document.querySelector('#posts');
  let postsList = document.querySelector('#plist');

  let users = {};
  let photos = {};
  let posts = {};

  const hideDisplay = () => {
    tabcontent.forEach(el => {
      el.style.display = 'none';
    });
    tablinks.forEach(el => {
      el.style.backgroundColor = '';
    });
  };

  const displayUsers = () => {
    axios.get('http://localhost:3000/user')
    .then(res => {
      users = res.data.users;
      res.data.users.forEach(el => {
        let li = document.createElement('li');
        li.innerText = el.name;
        ul.appendChild(li);
      });
    });
  };

  const displayPosts = () => {
    axios.get('http://localhost:3000/post')
    .then(res => {
      posts = res.data.posts;
      res.data.posts.forEach(el => {
        let p = document.createElement('p');
        p.innerText = el.body;
        postsList.appendChild(p);
      });
    });
  };

  const displayPhotos = () => {
    axios.get('http://localhost:3000/picture')
    .then(res => {
      photos = res.data.photos;
      res.data.photos.forEach(el => {
        let img = document.createElement('img');
        img.setAttribute('src', el.url);
        photosList.appendChild(img);
      });
    });
  };

  usersButton.addEventListener('click', () => {
    ul.innerText = '';
    hideDisplay();
    usersDiv.style.display = 'block';
    usersDiv.style.backgroundColor = 'grey';
    displayUsers();
  });

  photosButton.addEventListener('click', () => {
    photosList.innerText = '';
    hideDisplay();
    photosDiv.style.display = 'block';
    photosDiv.style.backgroundColor = 'green';
    displayPhotos();
  });

  postsButton.addEventListener('click', () => {
    hideDisplay();
    postsDiv.style.display = 'block';
    postsDiv.style.backgroundColor = 'blue';
    displayPosts();
  });

  ul.addEventListener('click', (event) => {
    clickedUser.innerText = '';
    users.forEach((el, i) => {
      if (el.name === event.target.innerText) {
        let img = document.createElement('img');
        img.setAttribute('src', photos[i].url);
        let name = document.createElement('h2');
        name.innerText = el.name;
        let age = document.createElement('h3');
        age.innerText = el.age;
        let post = document.createElement('p');
        post.innerText = posts[i].body;
        clickedUser.appendChild(img);
        clickedUser.appendChild(name);
        clickedUser.appendChild(age);
        clickedUser.appendChild(post);
      }
    })
  })
});
