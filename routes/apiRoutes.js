const mysql = require("mysql");
const router = require("express").Router()

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: process.env.MYPASSWORD,
	database: "ecommerce"
})


router.get("/products", (req, res) => {
	connection.query(`SELECT * from products LEFT JOIN price ON price.product_id = products.product_id `, (err, data) => {
		if (err) return res.send(err)
		res.send(data)
	})
});

router.get('/productfilter', (req, res) => {
	const {
		category,
		price
	} = req.query

	let sqlQuery = `SELECT * FROM products LEFT JOIN price ON price.product_id = products.product_id WHERE 1`;
	if (price && !category) {
		sqlQuery += `AND price = "${price}"`
	} else if (category && !price) {
		sqlQuery += `AND product_category = "${category}"`
	} else if (category && price) {
		sqlQuery += `AND price = "${price}" AND product_category = "${category}"`
	}
	connection.query(sqlQuery, [],
		(err, data) => {
			if (err) throw new Error(`${req.query.category} is an invalid type. Please enter in either these instead: "other", "animal", "character"`)
			res.json(data)
		})

})

router.get('/contact', (req, res) => {
	connection.query(`SELECT * FROM contacts`, (err, data) => {
		if (err) return res.send(err);
		res.send(data)
	})
})

module.exports = router;