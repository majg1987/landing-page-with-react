import React from "react";

const Card = (props) => {
	const { src, title } = props;
	return (
		<div className="card text-center mb-5">
			<img src={src} className="card-img-top" alt="img" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text pb-5 border-bottom">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>

				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;
