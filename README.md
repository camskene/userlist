#A 'hello world' Node app.

This repo is the result of following [this tutorial](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

Uses Node, Express, Mongo, and Jade to add and retrieve user details from a database.

##To get started 

`cd` into the project directory and then do the following:

Add dependencies:

`npm install`

Create a directory for Mongo to store our data:

`mkdir /data/db`

Connect to the Mongo database:

`mongod --dbpath /data/db`

Open a new terminal window and open a Mongo command prompt:

`mongo`

At the Mongo command prompt create our database

`use userlist`

Add some data to our db:

`db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })`

You can now run `npm start` and visit `http://localhost:3000/userlist` to see the data you just created displayed in your browser.

To add a new user visit `http://localhost:3000/newuser`
