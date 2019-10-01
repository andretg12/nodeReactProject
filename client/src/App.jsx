import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
	state = {
		page: 0
	};
	setPageChange = i => {
		this.setState({ page: i });
	};

	render() {
		return (
			<Router>
				<div>
					<NavBar />
					<Route path="/" exact component={Landing} />
					<Route path="/contact" component={Contact} />
					<Route path="/products" exact component={Products} />
					<Route path="/products/:id" component={ProductDetails} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
