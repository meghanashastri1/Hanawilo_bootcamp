// For '/category' endpoints 

const getCategories = (req, res, next) => {
    //query parameter 
    if (Object.keys(req.query).length){
        const category = req.query.category;
        console.log(`Searching for category: ${category}`)
    }

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'You hit me! Shoe me all the categories'});
}

const createCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Create category with name of ${req.body.categoryName} and gender ${req.body.gender}`});
}

const deleteCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'Deleting the categories'});
}

//For '/category/:categoryId'
const getCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Show me the category with category ID of ${req.params.categoryId}`});
}

const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Update the category with category ID of ${req.params.categoryId}`});
}

const deleteCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: `Delete the category with category ID of ${req.params.categoryId}`});
}

module.exports = {
    getCategories,
    createCategory,
    putCategory,
    deleteCategories,
    getCategory,
    deleteCategory
};