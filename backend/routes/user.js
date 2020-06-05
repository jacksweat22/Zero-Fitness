const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
      .then(users => res.json(users))
      .catcher(err => res.status(400).json('Error: '+err))
});

router.route ('/add').report((req,res) => {
    const newUser = req.body.username;

    const newUser = newUser({username});

    newUser.save()
    .then(()=>  res.json('User Created'))
    .catch(err  => res.status(400).josn('error: '+ err));
});