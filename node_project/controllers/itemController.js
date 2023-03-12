// For /item endpoint

const getItems = (req, res, next) => {
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

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Show me all items'})
}

const postItem = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Create item with name of ${req.body.itemName} and item description of ${req.body.itemDescription}`});
}


const deleteItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Deleting the items'});
}

//For '/item/:itemId'
const getItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Show me the item with item ID of ${req.params.itemId}`});
}

const putItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Update the item with item ID of ${req.params.itemId}`});
}

const deleteItem = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Delete the item with item ID of ${req.params.itemId}`});
}

module.exports = {
    getItems,
    postItem,
    deleteItems,
    getItem,
    putItem,
    deleteItem
};