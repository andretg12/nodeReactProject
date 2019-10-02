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
				<div>
					<img src={product.product_img} />
				</div>
			</article>
		</div>
	);
}

export default ProductDetails;
