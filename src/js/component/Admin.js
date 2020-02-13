import React from "react";
import AddVanForm from "./AddVanForm";
import addVan from "./App";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Login from "./Login";
import QrReader from "./QRReader";
export const Admin = props => {
	return (
		<div className="track">
			<div className="">
				<div className="row">
					<div className="col 12s">
						<h1>Welcome Admin</h1>
					</div>
				</div>
				<div className="card admin-card center-align">
					<p className="center-align blue-gret darken-1">What would you like to do today?</p>
					<Link to={AddVanForm}>
						<button className="z-depth-2 waves-effect">Create a Company?</button>
					</Link>
					<Link to={AddVanForm}>
						<button className="z-depth-2 waves-effect">Add a van?</button>
					</Link>
					<Link to="/app">
						<button className="z-depth-2 waves-effect">View clock</button>
					</Link>
					<Link to="">
						<button className="z-depth-2 waves-effect">View Companies</button>
					</Link>
				</div>
			</div>
			<QrReader />
		</div>
	);
};

export default Admin;
