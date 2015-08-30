/* global require, module */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', {title: 'Hello, World!'});
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  // extract db object passed to http request
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET new user page */
router.get('/newuser', function(req, res) {
  res.render('newuser', {title: 'Add New User'});
});

/* POST add user */
router.post('/adduser', function(req, res) {
  // set internal db variable
  var db = req.db;

  // get form values via name attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // set our collection
  var collection = db.get('usercollection');

  // submit to the db
  collection.insert({
    "username": userName,
    "email": userEmail
  }, function (err, doc) {
    if (err) {
      // it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // forward to success page
      res.redirect('userlist');
    }
  });
});

module.exports = router;
