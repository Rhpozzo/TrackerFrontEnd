import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard.js";

const CurrentAct = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		const clearInter = setInterval(() => actions.loadAllActivities(), 2000);
		// return () => {
		// 	clearInter();
		// };
	}, []);
	return (
		<div>
			<ul>
				{store.activities.map((item, index) => {
					return (
						<div key={item.id}>
							<ContactCard vin={item.vin} scan_time={item.scan_time.split(" ")[1]} />
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrentAct;
