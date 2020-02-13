import React, { useState } from "react";
import Clock from "react-live-clock";
import moment from "moment";
import PropTypes from "prop-types";
import Count from "./CountdownClock";
import CurrentAct from "./CurrentAct";
import { Link } from "react-router-dom";

const Header = () => {
	const [time, setTime] = useState();

	const clicktime = () => {
		let time = new Date();
		let hours = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();

		return setTime(`${hours}:${minutes}:${seconds}`);
	};

	return (
		<div>
			<header className="top">
				<h1>
					<Clock format={"HH:mm:ss"} interval={1000} ticking={true} timezone={"EST"} />
					<br />
				</h1>
				<h1 className="countdown">
					<Count />
				</h1>
			</header>
			<div>
				<button className="waves-effect waves-light btn pulse" onClick={clicktime}>
					Wave End
				</button>
			</div>
			<Link to="/qrreader">
				<button className="btn">Scan In</button>
			</Link>
			<div>
				<p>{time}</p>
			</div>
		</div>
	);
};

Header.propTypes = {
	tagline: PropTypes.string
};

export default Header;
