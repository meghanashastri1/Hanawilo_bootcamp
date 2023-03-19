const Item = require('../models/Item');

// For /item endpoint

const getItems = async (req, res, next) => {
    //query parameter 
    if (Object.keys(req.query).length){
        const {
            gender, 
            price, 
            isClearance,
            colors,
            sizes
        } = req.query;

        const filter = []; 

        if (gender) filter.push(gender)
        if (price) filter.push(price)
        if (isClearance) filter.push(isClearance)
        if (colors) filter.push(colors)
        if (sizes) filter.push(sizes)

        for (const query of filter){
            console.log(`Searching item by ${query}`);
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

module.exports = {
    getItems,
    postItem,
    deleteItems,
    getItem,
    putItem,
    deleteItem
};