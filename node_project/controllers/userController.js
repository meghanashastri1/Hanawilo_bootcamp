// For /user endpoint

const getUsers = (req, res, next) => {
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

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Show me all users'})
}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Create user with name of ${req.body.userName}`});
}


const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Deleting the users'});
}
//For '/user/:userId'
const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Show me the user with user ID of ${req.params.userId}`});
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Update the user with user ID of ${req.params.userId}`});
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Delete the user with user ID of ${req.params.userId}`});
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
};