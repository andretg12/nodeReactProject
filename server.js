//importing packages needed
require('dotenv').config()
const express = require("express");
const path = require("path");
// seeting up the port variable from env file 
const PORT = process.env.PORT || 4000;
// using express 
const app = express();
//logger morgan
const morgan = require('morgan')
// security package
const helmet = require("helmet")
// importing my api routes so that i can route /api to them
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({
	extended: true
}));
app.use(morgan('combined'))
app.use(helmet())
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Use routes all the endpints with /api to use the api routes folder with all the specific routes
app.use("/api", apiRoutes);

// Serves the react page 
app.get("*", function (req, res) {
	res.send("Success");
});

// Server initiates 

app.listen(PORT, function () {
	console.log(`API server now on port ${PORT}`);
});