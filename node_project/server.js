const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const category = require('./routes/category');
const item = require('./routes/item');
const user = require('./routes/user');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');

dotenv.config({ path: './config/config.env'});

const app = express(); 

//parse application/json
app.use(bodyParser.json());

//creating route and referencing router
app.use(logger);
app.use(errorHandler);
app.use('/category', category);
app.use('/item', item)
app.use('/user', user)
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});