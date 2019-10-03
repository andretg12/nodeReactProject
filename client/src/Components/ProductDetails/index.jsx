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
			<article className="container">
				<div class="left-column">
					<img class="active" src={product.product_img} alt="Products" />
				</div>
				<div className="right-column">
					<div className="product_description">
						<span>{product.product_category}</span>
						<h2>{product.product_name}</h2>
						<p>{product.product_description}</p>
					</div>
					<div className="product-price">
						<span>{product.price}</span>
						<a
							href={`http://localhost:4000/api/productinvoice/${product.product_id}/1`}
							className="cart-btn"
						>
							Add to cart
						</a>
					</div>
				</div>
			</article>
		</div>
	);
}

export default ProductDetails;
