import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ChartCar1 from "../component/ChartCar1";
import ChartCar2 from "../component/ChartCar2";
import ChartCar3 from "../component/ChartCar3";

const CompanyInfo = () => {
	return (
		<div style={{ marginBottom: "10px" }}>
			<h1 style={{ marginTop: "20px" }}>Van N1</h1>
			<ChartCar1 />
			<h1 style={{ marginTop: "20px" }}>Van N2</h1>
			<ChartCar2 />
			<h1 style={{ marginTop: "20px" }}>Van N3</h1>
			<ChartCar3 />
		</div>
	);
};

export default CompanyInfo;
