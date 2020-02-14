import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar fixed nav-wrapper">
			<div className="">
				<a href="#!" className="brand-logo center">
					<img />
					TimeTracker <span className="technologies">Warehouse Technologies.</span>
				</a>
				<ul className="left hide-on-med-and-down">
					<li>
						<Link to="/app">
							<a href="">Clock</a>
						</Link>
					</li>
					<li>
						<Link to="/admin">
							<a href="badges.html">Admin</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
