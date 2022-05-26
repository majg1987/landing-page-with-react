import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-center">
					<div className="col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
