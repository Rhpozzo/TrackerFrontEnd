import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard.js";

const CurrentAct = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<ul>
				{store.currentActivities.map((item, index) => {
					return (
						<div key={item.id}>
							<ContactCard vin={item.vin} scan_time={item.scan_time} />
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrentAct;
