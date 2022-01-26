import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid bg-dark bg-dark pt-3 pb-3 border-bottom border-light">
		<nav className="container navbar navbar-dark ">
			<Link to="/">
				<img src="https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Emblema.png" className="logo"/>
			</Link>
			<div className="ml-auto">
				<Link to="">
					<div class="dropdown">
						<button class="btn dropdown-toggle" type="button" id="favoritesBtn" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown button
						</button>
						<ul class="dropdown-menu" aria-labelledby="favoritesBtn">
							<li><a class="dropdown-item" href="#">teste</a></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
		</div>
	);
};
