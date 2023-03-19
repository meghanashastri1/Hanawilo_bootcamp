const User = require('../models/User');

// For /user endpoint

const getUsers = async (req, res, next) => {
    //query parameter 
    if (Object.keys(req.query).length){
        const {
            gender, 
            userName
        } = req.query;

        const filter = []; 

        if (gender) filter.push(gender)
        if (userName) filter.push(userName)

        for (const query of filter){
            console.log(`Searching user by ${query}`);
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
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
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

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
};