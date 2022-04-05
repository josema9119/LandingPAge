import React from "react";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Cards from "./cards.js";
import Footer from "./footer.js";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="row">
				<Jumbotron />
			</div>
			<div className="container mt-4">
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<div className="row mt-4">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
