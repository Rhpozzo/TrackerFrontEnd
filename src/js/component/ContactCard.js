import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ContactCard = props => {
	return (
		<li>
			<div className="currentActCard">
				<i className="small material-icons">directions_bus</i>
				<p>{props.scan_time}</p>
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
