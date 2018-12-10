# Nested Routing Project

It's time to create a Facebook-like API using nested routing. For now, you are going to have three different base routes:

- Users
- Posts
- Pictures

Inside this repo, you should see a file called `data.js`. Use these three variables as "dummy data" for your servers - you can just stick them in your app. Using Express' modular routing ability, we are going to create several routes:

- `/user` - JSON list of all users.
  - `/user/:id` - JSON of a single user with the given ID.
- `/post` - JSON list of all posts.
  - `/post/:id` - JSON of a single post with the given ID.
  - `/post/user/:id` - JSON of all posts that the user with the given ID wrote (right now, for the data we have, it should just be one post).
- `/picture` - JSON list of all pictures.
  - `/picture/:id` - JSON of a single picture with a given ID.
  - `/picture/user/:id` - JSON of all pictures that the user with the given ID posted.

**Please** do not stick all of this functionality into a single file! Utilize modular routing to make all of these routes more readable and sensible!
