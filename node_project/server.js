const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const category = require('./routes/category');
const item = require('./routes/item');
const user = require('./routes/user');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');
const connectDB = require('./config/dtb');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './config/config.env'});
connectDB();

const app = express(); 

//parse application/json
app.use(bodyParser.json());

//creating route and referencing router
app.use(fileupload());
app.use(cookieParser());
app.use(logger);
app.use(errorHandler);
app.use('/category', category);
app.use('/item', item)
app.use('/user', user)
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
});