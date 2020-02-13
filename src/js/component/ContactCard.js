import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ContactCard = props => {
	return (
		<li>
			<div className="row">
				<div className="col s12 m7">
					<div className="card">{/* <span className="card-title">{props.vin}</span> */}</div>
					<div className="card-content">
						<p>{props.scan_time}</p>
					</div>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	vin: PropTypes.string,
	scan_time: PropTypes.string,
	index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
