const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get all users
router.get('/users', (req, res) => {
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
});
//create new user
router.post('/user', (req, res, next) =>
{
  User.create(req.body, function(err, user) {
    if (err) return next(err);
    res.json(user);

  });
});

module.exports = router;
