const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const passwordHash = require('password-hash');
// const session = require('express-session');


mongoose.connect('mongodb://jackie:123@ds115701.mlab.com:15701/meanstack');
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false
// }));
//var ObjectId = mongoose.Types.ObjectId;

var User = require('./model/user');

app.post('/authenticate', function(req, res) {
    User.findOne({email: req.body.email}, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            if (doc === null) {
                console.log('the email does not exist');
            } else {
                if (passwordHash.verify(req.body.password, doc.password)) {
                    res.send(doc);
                } else {
                    console.log('password is wrong');
                }
            }
        }
    });
});

const userRouter = require('./routes/user.js');
app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})