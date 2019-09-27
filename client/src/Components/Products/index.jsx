import React, { Component } from "react";
import "./Products.css";

class Products extends Component {
	constructor() {
		super();
		this.state = {
			products: []
		};
	}
	__getAll = () => {
		fetch("api/products")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					})
				},
				err => console.log(err)
			)
	}

	__getTickets = () => {
		fetch("api/productfilter?category=Ticket")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					})
				},
				err => console.log(err)
			)
	}

	__getEquipment = () => {
		fetch("api/productfilter?category=Equipment")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					})
				},
				err => console.log(err)
			)
	}

	__getClothes = () => {
		fetch("api/productfilter?category=Clothing")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					})
				},
				err => console.log(err)
			)
	}

	componentDidMount() {
		fetch("api/products")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					});
				},
				err => console.log(err)
			);
	}

	render() {
		return (
			<div>
				<section className="product-hero">
					<div className="hero-inner">
						<h1>Products</h1>
					</div>
				</section>
				<div className="bg-products">
					<div>
						<button className="what" onClick={() => this.__getAll()}>
							No filter
					</button>
						<button className="what" onClick={() => this.__getClothes()}>
							Clothing
					</button>
						<button className="what" onClick={() => this.__getEquipment()}>
							Equipment
					</button>
						<button className="what" onClick={() => this.__getTickets()}>Events</button>
					</div>

					<div className="row">
						{this.state.products.map((product, index) => {
							return (
								<div key={index} className="col-lg-4 col-sm-6 js-product">
									<figure className="card card-product">
										<article className="img-wrap">
											<img src={product["product_img"]} />
										</article>
										<div className="bottom--section">
											<figcaption className="info-wrap">
												<h4 className="title">{product["product_name"]}</h4>
												<p className="desc">{product["product_description"]}</p>
											</figcaption>
											<section className="bottom-wrap">
												<a
													href={`/products/${product["product_id"]}`}
													className="btn btn-sm btn-primary float-right"
												>
													Order Now
											</a>
												<div className="price-wrap h5">
													<span className="price-new">${product.price}</span>{" "}
													<del className="price-old">${product.price * 2}</del>
												</div>
											</section>
										</div>
									</figure>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
export default Products;
