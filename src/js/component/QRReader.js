import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import QrReader from "react-qr-reader";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const QrRead = ({ history }) => {
	const { actions, store } = useContext(Context);
	const [time, setTime] = useState("");
	const [vin, setVin] = useState("");

	let timeNow = new Date();
	let year = timeNow.getFullYear();
	let month = timeNow.getMonth();
	let day = timeNow.getDay();
	let hours = timeNow.getHours();
	let minutes = timeNow.getMinutes();
	let seconds = timeNow.getSeconds();

	//"2020-01-1 20:00:00"
	const wholeDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	const handleScan = result => {
		console.log(result);
		if (result) {
			actions.createActivity(
				{
					vin: result,
					scan_time: wholeDate
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
			<QrReader delay={1000} onScan={handleScan} style={{ width: "50%" }} />
			<p>Vin: {setVin}</p>
		</div>
	);
};

QrRead.propTypes = {
	history: PropTypes.object
};

export default withRouter(QrRead);
