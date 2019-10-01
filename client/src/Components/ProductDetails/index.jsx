import React from "react";
import "./product.css";
const ProductDetails = ({ match }) => {
	console.log(match);
	let data = [];
	fetch(`http://localhost:3000/api/products/${match.params.id}`)
		.then(res => res.json())
		.then(
			res => {
				console.log(res);
				data.push(res);
			},
			err => console.log(err)
		);
	return (
		<div>
			<article>{/* {data.map(product => {
					return (
						
					)
				})} */}</article>
		</div>
	);
};

export default ProductDetails;
