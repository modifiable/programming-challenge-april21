'use strict'

// Import DB Connection
require("./config/dbConnection");

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// create express app
const  app = express();

app.use(express.static('public'));
//importing route
var routes = require('./api/routes/moviesRoutes');
routes(app);

// define port to run express app
const  port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {
    
    console.log(`Server running at http://localhost:${port}`);
});