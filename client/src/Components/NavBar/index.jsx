import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function NavBar(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" id="home" href="/">
					<i className="fas fa-mountain"></i> ANDES
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto">
						<Link to="/">
							<li className="nav-item">
								<p className="nav-link">Home</p>
							</li>
						</Link>
						<Link to="/products">
							<li className="nav-item">
								<p className="nav-link">Shop </p>
							</li>
						</Link>
						<Link to="/contact">
							<li className="nav-item">
								<p className="nav-link">Contact</p>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
