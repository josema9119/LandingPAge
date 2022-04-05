import React from "react";

const Cards = () => {
	return (
		<div className="col">
			<div
				className="card"
				style={{ width: "300px", marginBottom: "10px" }}>
				<img
					className="card-img-top"
					src="https://placebeard.it/640x360"
					alt="This is an image"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
