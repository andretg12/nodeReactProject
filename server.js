const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
//logger morgan
const morgan = require('morgan')
// security package
const helmet = require("helmet")

const apiRoutes = require("./routes/apiRoutes");

const dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
	throw result.error
}


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
	res.sendFile(path.join(__dirname, "./client/src/public/index.html"));
});
// Server initiates 
app.listen(PORT, function () {
	console.log(`API server now on port ${PORT}`);
});