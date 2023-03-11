const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const category = require('./routes/category');

dotenv.config({ path: './config/config.env'});

const app = express(); 

//parse application/json
app.use(bodyParser.json());

//creating route and referencing router
app.use('/category', category);
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});