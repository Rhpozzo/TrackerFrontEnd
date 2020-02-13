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
<<<<<<< HEAD
						<div key={item.id}>
							<ContactCard vin={item.vin} scan_time={item.scan_time.split(" ")[1]} />
=======
						<div key={index}>
							<ContactCard vin={item.vin} scan_time={item.scan_time} />
>>>>>>> 95ea37481d0d6388e4a47bf7040e2b8af9e6861f
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrentAct;
