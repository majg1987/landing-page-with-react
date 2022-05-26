import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
			<span className="navbar-brand mb-0 h1"> Start Bootstrap </span>

			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
