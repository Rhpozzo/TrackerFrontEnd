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
		<div>
			<div className="admin-view container-fluid">
				<div className="row">
					<p className="col s12 center-align">What would you like to do today?</p>
				</div>
				<div className="row">
					<div className="col s12">
						<div className="card col s6 center-align">
							<Link to={"add-company"}>
								<i className="large material-icons">group_add</i>
								<button className="btn">Add a Company?</button>
							</Link>
						</div>

						<div className="card col s6 center-align">
							<Link to="/addvan">
								<i className="large material-icons">directions_bus</i>
								<button className="btn">Add a van?</button>
							</Link>
						</div>
						<div className="card col s6 center-align">
							<Link to="/app">
								<i className="large material-icons">timer</i>
								<button className="btn">View clock</button>
							</Link>
						</div>

						<div className="card col s6 center-align">
							<Link to="/single">
								<i className="large material-icons">insert_chart</i>
								<button className="btn">View Companies</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
