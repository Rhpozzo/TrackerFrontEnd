import React from "react";
import Clock from "react-live-clock";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from "react-countdown";
import PropTypes from "prop-types";

const renderer = ({ minutes, seconds }) => {
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	return (
		<span>
			{minutes}:{seconds}
		</span>
	);
};

const Count = () => {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	let timeLeft = 0;
	let newSeconds = minutes * 60;
	let sum = newSeconds + seconds;

	if (minutes < 30) {
		timeLeft = (1800 - sum) * 1000;
	}

	if (minutes > 30) {
		timeLeft = (3600 - sum) * 1000;
	}
	if (minutes == 0) {
		timeLeft = 1800001;
	}

	return (
		<div>
			<Countdown date={Date.now() + timeLeft} renderer={renderer} />
		</div>
	);
};

renderer.propTypes = {
	minutes: PropTypes.number,
	seconds: PropTypes.number
};

export default Count;
