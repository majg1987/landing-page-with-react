import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//create your first component

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-center">
					<div className="col-md-6 col-lg-3">
						<Card
							src="https://picsum.photos/id/1011/5472/3648"
							title="Navegando por el Lago"
						/>
					</div>
					<div className="col-md-6 col-lg-3">
						<Card
							src="https://picsum.photos/id/110/5616/3744"
							title="Atardecer"
						/>
					</div>
					<div className="col-md-6 col-lg-3">
						<Card
							src="https://picsum.photos/id/28/4928/3264"
							title="Naturaleza"
						/>
					</div>
					<div className="col-md-6 col-lg-3">
						<Card
							src="https://picsum.photos/id/374/3888/2592"
							title="Playas Virgenes"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
