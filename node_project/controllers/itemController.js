const Item = require('../models/Item');

// For /item endpoint

const getItems = async (req, res, next) => {
    //query parameter 
    const filter = {};
    const options = {};

    if (Object.keys(req.query).length){
        const {
            gender, 
            price, 
            isClearance,
            colors,
            sizes, 
            sortByPrice,
            limit
        } = req.query;

        if (gender) filter.gender = true
        if (price) filter.push(price)
        if (isClearance) filter.isClearance = true
        if (colors) filter.push(colors)
        if (sizes) filter.push(sizes)

        if (limit) options.limit = limit;
        if (sortByPrice) options.sort = {
            price: sortByPrice
        }

    }

    try {
        const item = await Item.find()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(item)
    } catch(err){
        next(err)
    }
    
}

const postItem = async (req, res, next) => {
    try {
        const item = await Item.create(req.body)
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(item)
    } catch(err){
        next(err)
    }
}


const deleteItems = async (req, res, next) => {
    try {
        const deletedCategories = await Category.deleteMany();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedCategories)
    } catch(err){
        next(err)
    }
}

//For '/item/:itemId'
const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.itemId);
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(item);
    } catch(err) {
        next(err)
    }
}

const putItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.itemId, req.body, {new: true});
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(item);
    } catch(err) {
        next(err)
    }
}

const deleteItem = async (req, res, next) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.itemId);
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedItem);
    } catch(err) {
        next(err)
    }
}

// For '/:itemId/ratings' endpoint 
const getItemRatings = async (req, res, next) => {
    try {
        const result = await Item.findById(req.params.itemId);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err){
        next(err); 
    }
}

const postItemRating = async (req, res, next) => {
    try {
        const result = await Item.findById(req.params.itemId);
        result.ratings.push(req.body)

        //saves new rating to the database 
        await result.save()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err){
        next(err); 
    }
}

const deleteItemRatings = async (req, res, next) => {
    try {
        const result = await Item.findById(req.params.itemId);
        result.ratings = []

        //saves new rating to the database 
        await result.save()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({msg: `Deleted all ratings for item id of ${req.params.itemId}`})
    } catch (err){
        next(err); 
    }
}

module.exports = {
    getItems,
    postItem,
    deleteItems,
    getItem,
    putItem,
    deleteItem, 
    getItemRatings, 
    postItemRating, 
    deleteItemRatings
};