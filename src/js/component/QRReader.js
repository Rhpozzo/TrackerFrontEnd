import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import QrReader from "react-qr-reader";

const QrRead = () => {
	const { actions, store } = useContext(Context);

	const [vin, setVin] = useState("");

	const handleScan = result => {
		console.log(result);
		if (result) {
			setVin: result;
		}
	};
	// actions.handleError = err => {
	// 	console.log(err);
	// };

	return (
		<div>
			<QrReader delay={3000} onScan={handleScan} style={{ width: "80%" }} />
			<p>Vin: {vin}</p>
		</div>
	);
};

export default QrRead;
