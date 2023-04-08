const User = require('../models/User');

// For /user endpoint

const getUsers = async (req, res, next) => {
    //query parameter 
    const filter = {};
    const options = {};
    if (Object.keys(req.query).length){
        const {
            gender, 
            userName,
            limit,
            sortByUserName
        } = req.query;

        const filter = []; 

        if (gender) filter.gender = true
        if (userName) filter.userName = true
        if (sortByUserName) options.sort = {
            userName: sortByUserName
        }
    }

    try {
        const user = await User.find()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch(err){
        next(err)
    }

    
}

const postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        
        sendTokenResponse(user, 201, res)
    } catch(err){
        next(err)
    }
}


const deleteUsers = async (req, res, next) => {
    try {
        const user = await User.deleteMany()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch(err){
        next(err)
    }
}
//For '/user/:userId'
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch(err){
        next(err)
    }
}

const putUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch(err){
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch(err){
        next(err)
    }
}

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken(); 

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), 

        //make sure that only the server can process this cookie
        httpOnly: true
         
    }

    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token)
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser,
    sendTokenResponse
};