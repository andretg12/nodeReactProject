import React, { useState, useEffect } from "react";
import "./product.css";

function ProductDetails({
	match: {
		params: { id }
	}
}) {
	const [product, setProduct] = useState({ product_name: "init-value" });

	async function fetchProduct() {
		const response = await fetch(`http://localhost:3000/api/products/${id}`);
		const data = await response.json();
		setProduct(data[0]);
	}
	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div>
			<article>
				<h2>{product["product_name"]}</h2>
			</article>
		</div>
	);
}

export default ProductDetails;
