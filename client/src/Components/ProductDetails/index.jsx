import React from "react";
import "./product.css";
const ProductDetails = () => {
	const getId = () => {
		const url_string = window.location.href; //window.location.href
		const url = new URL(url_string);
		const id = url.href.charAt(url.href.length - 1);
		if (id === 1) {
			return (
				<div>
					<h1>US VS KOR</h1>
					<section className="row">
						<img
							className="col-sm-12 col-md-6"
							src="https://cdn.ussoccer.com/-/media/project/ussf/2019-stories/08/wntvkor-release/wntvkor-releasetn.ashx?h=1440&la=en-US&w=1440&rev=92e63463cc0d4a2aa5c93072ffccfc40&hash=2D838A470CDDB13D4FE3F17A0E6375B2"
						></img>
						<article className="col-sm-12 col-md-6">
							<p>
								Women's Football Match OCT 03 at 8pm, this will match of the
								Champions for their Championship Tour is sure to be filled
								with emotion
							</p>
						</article>
					</section>
				</div>
			);
		} else if (id === 2) {
			return <div></div>;
		}
	};
	return (
		<div>
			{getId}
		</div>

	);
};

export default ProductDetails;
