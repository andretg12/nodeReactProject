// Imports
const mysql = require("mysql");
const router = require("express").Router()
// Setting up the MySQL connection
const connection = mysql.createConnection({
	host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	port: 3306,
	user: 'ettylhc7p47ckyph',
	password: process.env.MYPASSWORD,
	database: "zab5rvaac77tmff8"
})
// this route gets id from the param of the url and uses it to get an specific product
router.get("/products/:id", (req, res) => {
	const id = req.params.id
	connection.query(`SELECT * from products LEFT JOIN price ON price.product_id = products.product_id WHERE products.product_id = ? `, [id], (err, data) => {
		if (err) return res.send(err)
		res.send(data)
	})
});

// Get endpoints for all products
router.get("/products", (req, res) => {
	connection.query(`SELECT * from products LEFT JOIN price ON price.product_id = products.product_id `, (err, data) => {
		if (err) return res.send(err)
		res.send(data)
	})
});
// Get endpoint that gets products depending on category or price or both
router.get('/productfilter', (req, res) => {
	// getting the two variables from the query
	const {
		category,
		maxPrice
	} = req.query
	// Creating a sql query
	let sqlQuery = `SELECT * FROM products LEFT JOIN price ON price.product_id = products.product_id WHERE 1`;
	// appending price to the query if there is one
	if (maxPrice) {
		sqlQuery += ` AND price <= "${maxPrice}"`
	}
	// appending category if there is one
	if (category) {
		sqlQuery += ` AND product_category = "${category}"`
	}
	connection.query(sqlQuery,
		(err, data) => {
			if (err) return res.send(err);
			res.json(data)
		})
})

// Gets all contacts and messages
router.get('/contacts', (req, res) => {
	connection.query(`SELECT * FROM contacts`, (err, data) => {
		if (err) return res.send(err);
		res.send(data)
	})
})

// Tells you the total for an specific product
router.get("/productinvoice/:id/:qty", (req, res) => {
	// gettubg the two variables from the parameters
	let item = req.params.id;
	let quantity = req.params.qty;
	// running the query on conecction with a dynamic query that uses the params from the url
	connection.query(
		`SELECT products.product_id, product_name, (price * ? * 1.08)AS invoice_price FROM products INNER JOIN price ON price.product_id = products.product_id WHERE products.product_id = ?`,
		[quantity, item],
		(err, data) => {
			if (err) return res.send(err)
			res.json(data);
		}
	);
});
// Inserts user and comment to contacts table
router.post('/user', function (req, res) {
	// getting the parameters i need for the query from the body of the request
	const {
		name,
		email,
		message,
	} = req.body
	// if there is no message return an error
	if (!message) {
		return res.status(400).send({
			error: 400,
			message: 'Please provide message'
		});
	}
	// run the query
	connection.query(`INSERT INTO contacts(contact_name, contact_email, contact_message) VALUES(?,?,?) `, [name, email, message], function (error, insertID) {
		if (error) res.send(`failed to insert contact`);
		return res.send({
			error: false,
			contact_id: insertID,
			message: 'New user has been created successfully.'
		});
	});
});


module.exports = router;