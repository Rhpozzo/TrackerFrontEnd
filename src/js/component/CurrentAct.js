import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard.js";

const CurrentAct = () => {
	const { store, actions } = useContext(Context);
	// const [clearInter, setClearInter] = useState(setInterval(() => actions.loadAllActivities(), 5000))
	useEffect(() => {
		// const clearInter = () => {
		// 	setInterval(() => actions.loadAllActivities(), 5000);
		// };
		// clearInter();
		//return () => {
		// 	clearInter();
		// };
	}, []);
	return (
		<div>
			<ul>
				{store.activities.map((item, index) => {
					return (
						<div key={index}>
							<ContactCard scan_time={item.scan_time.split(" ")[1]} />
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrentAct;
