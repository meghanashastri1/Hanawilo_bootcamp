const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const validator = require('validator');
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
    userName: {
        type: String, 
        required: true, 
        unique: true,
        maxLength: 15
    },
    firstName:{
        type: String, 
        required: true
    }, 
    lastName:{
        type: String, 
        required: true
    }, 
    email:{
        type: String, 
        required: true,
        unique: true,
        validate: (email) => validator.isEmail(email)
    }, 
    password:{
        type: String, 
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    }, 
}, {
    timestamps: true
})

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

module.exports = mongoose.model('User', UserSchema);