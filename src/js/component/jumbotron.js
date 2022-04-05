import React from "react";

const Jumbotron = () => {
	return (
		<div className="container-fluid col-8 py-5 bg-light rounded-3 ">
			<h1 className="display-5 fw-bold pl-2">A Warm Welcome!</h1>
			<p className="fs-4 p-2">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged.
			</p>
			<button className="btn btn-primary btn-lg" type="button">
				Call to action!
			</button>
		</div>
	);
};

export default Jumbotron;
