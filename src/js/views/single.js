import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ChartComp1 from "../component/ChartComp1";
import ChartComp2 from "../component/ChartComp2";
import ChartComp3 from "../component/ChartComp3";

const Single = () => {
	return (
		<div>
			<h1>Company N1</h1>
			<ChartComp1 />
			<h1>Company N2</h1>
			<ChartComp2 />
			<h1>Company N3</h1>
			<ChartComp3 />
		</div>
	);
};

export default Single;
