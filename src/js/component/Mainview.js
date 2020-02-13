import React from "react";
import CurrentAct from "./CurrentAct";

const Mainview = () => {
	return (
		<div className="inventory">
			<h1>Current Activity: </h1>
			<div>
				<CurrentAct />
			</div>
		</div>
	);
};

export default Mainview;
