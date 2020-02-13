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
		<div className="admin-view container-fluid">
			<div className="card admin-card center-align">
				<p className="center-align">What would you like to do today?</p>
				<Link to={AddVanForm}>
					<button className="">Create a Company?</button>
				</Link>
				<Link to="/addvan">
					<button className="">Add a van?</button>
				</Link>
				<Link to="/app">
					<button className="">View clock</button>
				</Link>
				<Link to="/companies">
					<button className="">View Companies</button>
				</Link>
			</div>
		</div>
	);
};

export default Admin;
