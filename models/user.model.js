//TODO: Make A Users SCHEMA With passport integrated and It should have:- 
//?                     1.) Username, 2.) E-Mail ID, 3.) Full Name, 4.) Password

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { hashPassword } = require('../helpers/bcrypt');
//User schema
const userSchema =  new mongoose.Schema({
    //Username
    username: {
        type: String
    },
    //Email
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    //Fullname
    fullName: {
        type: String
    },
    //Password
    password: {
        type: String,
        required: true
    }
})
//Unique valiator for user schema
userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(err, next){
    let user = this;
    if(user.isModified('password')){
        user.password = hashPassword(user.passwword)
    }
    next()
})

//Export user model
module.exports = mongoose.model('User', userSchema);