document.addEventListener('DOMContentLoaded', () => {
  // let body = document.querySelector('body');
  // let userNames = document.querySelector('.user-names');
  let tabcontent = document.querySelectorAll('.tabcontent');
  let tablinks = document.querySelectorAll('.tablink');

  let usersButton = document.querySelector('#users-button');
  let usersDiv = document.querySelector('#users');
  let ul = document.querySelector('#users-list');

  let photosButton = document.querySelector('#photos-button');
  let photosDiv = document.querySelector('#photos');
  let photosList = document.querySelector('#photos-list');

  let postsButton = document.querySelector('#posts-button');
  let postsDiv = document.querySelector('#posts');
  let postsList = document.querySelector('#plist');

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

  })
});
