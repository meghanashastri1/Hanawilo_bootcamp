const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

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
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

UserSchema.pre('save', async function(next){
    //if the password was never modified coming from the user, 
    //it means that the user is hitting the log in endpoint
    if (!this.isModified('password')) next()

    const salt = await bcrypt.genSalt(10);
    console.log('this is salting', salt);
    this.password = await bcrypt.hash(this.password, salt);
    console.log('this is the new password', this.password);
    next()
})

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', UserSchema);