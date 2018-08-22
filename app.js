const bodyParser    = require('body-parser');
const express       = require('express');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://chino:123data@ds229722.mlab.com:29722/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

app.use('/products', product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;

app.listen(port, () => {
    console.log('server is up and running on port: '+port);
});