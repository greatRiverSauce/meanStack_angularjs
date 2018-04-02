const express = require('express');
const mongoose = require('mongoose');
const passwordHash = require('password-hash');


var User = require('../model/user');
var ObjectId = mongoose.Types.ObjectId;


userRouter = express.Router();
userRouter.post('/create', (req, res, next) => {
    //console.log(req.body);
    let hashedPassword = passwordHash.generate(req.body.password);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    
    user.save((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });

})

userRouter.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    var id = new ObjectId(req.params.id);
    User.findById(id, function(err, doc){
        if (!err) {
            res.send(doc);
        } else {
            console.log(err);
        }
    });
});

userRouter.get('/email/:email', (req, res, next) => {
    var email = req.params.email;
    User.findOne({'email': email}, function (err, doc) {
        if (!err) {
            res.send(doc);
        } else {
            console.log(err);
        }
    })
});
module.exports = userRouter;