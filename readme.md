# Full-Stack App

Your task (should you choose to accept it) is as follows: Utilizing the Facebook-like backend you created in the previous assignment, create a frontend HTML file to render the data.

Inside your app in your previous assignment, create a folder called `frontend`. Create an HTML, CSS, and JS file in that folder, just like you did for your DOM projects.

Here's the difference, though: Instead of querying an external API using your axios/fetch skills, you're going to query _the port you're running your Express app on._ You have, effectively, built _your own API_ for this project.

You will run your project like this:

- `cd` into your project folder.
- Start up your Express app using `nodemon`.
- Create a new tab/window of your terminal.
- Open your `index.html` file in your `frontend` folder.

Your file structure should look like this. Folders are bold, files are not:

- **My Project**

  - **node_modules**
  - package.json
  - **frontend**
    - index.html
    - script.js
    - style.css
  - **routes**
    - user.js
    - picture.js
    - post.js
  - app.js

Your frontend should have (for now):

- An "All Users" view, that displays all of the users in a pretty way (of your choosing).
- A "Find User" view where you can enter a user's name in a text form and get a single user with that name (case insensitive). This "user" item should look similar to an item in your list in the "All Users" view.
- A "Single User" view where you can see the Posts and Pictures that user has made. You should be able to get to this page by clicking on one of the user items above.
- An "All Photos" view where you can see all the Pictures in the database.

Styling for all of this is up to you.

## An Important Note

Chrome, by default, has security features built-in that prevents us from querying websites that it doesn't know/understand. This **includes** `localhost`. In order to get our Axios or Fetch requests from our frontend to work, we need to add this to our response object (`res`) in the backend before we perform `res.send` or `res.json`:

```js
res.set("Access-Control-Allow-Origin", "*");
```

More on CORS can be found [here](https://medium.com/@xgwang/a-practical-guide-to-cors-51e8fd329a1f).
