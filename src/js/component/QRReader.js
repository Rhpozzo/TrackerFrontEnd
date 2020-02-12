import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import QrReader from "react-qr-reader";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const QrRead = ({ history }) => {
	const { actions, store } = useContext(Context);

	const [vin, setVin] = useState("");

	const handleScan = result => {
		console.log(result);
		if (result) {
			actions.createActivity(
				{
					vin: result
				},
				history
			);
		}
	};
	// actions.handleError = err => {
	// 	console.log(err);gfrttr
	// };

	return (
		<div>
			<QrReader delay={1000} onScan={handleScan} style={{ width: "80%" }} />
			<p>Vin: {setVin}</p>
		</div>
	);
};

QrRead.propTypes = {
	history: PropTypes.object
};

export default withRouter(QrRead);
