import React from "react";

const Jumbotron = () => {
	return (
		<div className="container-fluid col-8 py-5 bg-light rounded-3 ">
			<h1 className="display-5 fw-bold pl-2">A Warm Welcome!</h1>
			<p className="fs-4 p-2">
				Using a series of utilities, you can create this jumbotron, just
				like the one in previous versions of Bootstrap. Check out the
				examples below for how you can remix and restyle it to your
				liking
			</p>
			<button className="btn btn-primary btn-lg" type="button">
				Call to action!
			</button>
		</div>
	);
};

export default Jumbotron;
