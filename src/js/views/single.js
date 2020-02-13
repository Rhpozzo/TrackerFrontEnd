import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ChartComp1 from "../component/ChartComp1";
import ChartComp2 from "../component/ChartComp2";
import ChartComp3 from "../component/ChartComp3";

const Single = () => {
	return (
		<div style={{ marginTop: "20px", marginLeft: "50px" }}>
			<h1 style={{ textAlign: "center" }}>
				Company N1
				<Link to="/company">
					<button style={{ marginLeft: "100px" }} className="btn">
						View Vans
					</button>
				</Link>
			</h1>
			<ChartComp1 />
			<h1 style={{ textAlign: "center", marginTop: "30px" }}>
				Company N2
				<Link to="/company">
					<button style={{ marginLeft: "100px" }} className="btn">
						View Vans
					</button>
				</Link>
			</h1>
			<ChartComp2 />
			<h1 style={{ textAlign: "center", marginTop: "30px" }}>
				Company N3
				<Link to="/company">
					<button style={{ marginLeft: "100px" }} className="btn">
						View Vans
					</button>
				</Link>
			</h1>
			<ChartComp3 />
		</div>
	);
};

export default Single;
