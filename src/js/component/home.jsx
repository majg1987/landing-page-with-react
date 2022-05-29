import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//create your first component

const Home = () => {
	const datos = [
		{
			title: "Paisaje Rio",
			url: "https://picsum.photos/id/1015/6000/4000",
		},
		{
			title: "Paisaje Montaña",
			url: "https://picsum.photos/id/1018/3914/2935",
		},
		{
			title: "Aurora Boreal",
			url: "https://picsum.photos/id/1022/6000/3376",
		},
		{
			title: "Paisaje Cascada",
			url: "https://picsum.photos/id/1039/6945/4635",
		},
	];

	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-center">
					{datos.map((item, index) => (
						<div className="col-md-6 col-lg-3">
							<Card
								url={item.url}
								title={item.title}
								key={index}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
