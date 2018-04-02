var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    'email': String,
    'password': String,
    'firstname': String,
    'lastname': String,
    'address': String,
    'city': String,
    'state':String,
    'zip': String,
    'phone': String
});
module.exports  = mongoose.model('user', userSchema);
