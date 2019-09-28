const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
const morgan = require('morgan')
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

// Use apiRoutes
app.use("/api", apiRoutes);

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/src/public/index.html"));
});

app.listen(PORT, function () {
	console.log(`API server now on port ${PORT}`);
});