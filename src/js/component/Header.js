import React, { useState } from "react";
import Clock from "react-live-clock";
import moment from "moment";
import PropTypes from "prop-types";
import Countdown from "./CountdownClock";

const Header = () => {
	return (
		<div>
			<header className="top">
				<h1>
					<Clock format={"HH:mm:ss"} interval={1000} ticking={true} timezone={"EST"} />
					<br />
				</h1>
				<h3 className="tagline" />
				<h1>
					<Countdown />
				</h1>
			</header>
			<button>Wave ended</button>
		</div>
	);
};

Header.propTypes = {
	tagline: PropTypes.string
};

export default Header;
