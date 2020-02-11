import React, { useState, useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			companies: [],
			vans: [],
			activities: []
		},
		actions: {
			// VANS
			createVan: data => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify({
						company_name: data.company,
						vin: data.vin
					})
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", JSON.stringify(data));
					})
					.then(() => {
						getActions().loadAllVans();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			loadAllVans: () => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(response => response.json())
					.then(data => {
						setStore({
							...getStore,
							vans: data
						});
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			getVan: id => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van/" + id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(response => response.json())
					.then(data => {
						//console.log(data.company_name, data.vin);
						return [data.company_name, data.vin];
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteVan: id => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(() => {
						getActions().loadAllVans();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			// ACTIVITIES

			createActivity: (data, history) => {
				fetch("https://loadtrackerapi.herokuapp.com/api/activity", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify(data)
				})
					.then(response => console.log(response.json()))
					.then(data => {
						console.log("Success:", JSON.stringify(data));
					})
					.then(() => {
						getActions().loadAllActivities();
						history.push("/app");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			loadAllActivities: () => {
				fetch("https://loadtrackerapi.herokuapp.com/api/activity", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(response => response.json())
					.then(data => {
						setStore({
							...getStore,
							activities: data
						});
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			getActivity: id => {
				fetch("https://loadtrackerapi.herokuapp.com/api/activity/" + id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(response => response.json())
					.then(data => {
						//console.log(data.company_name, data.vin);
						return [data.vin, data.scan_time];
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteActivity: id => {
				fetch("https://loadtrackerapi.herokuapp.com/api/activity/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(() => {
						getActions().loadAllActivities();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			// LOGIN
			login: (data, history) => {
				fetch("https://loadtrackerapi.herokuapp.com/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: data.email,
						password: data.password
					})
				})
					.then(response => response.json())
					.then(data => {
						localStorage.clear();
						localStorage.setItem("token", data.jwt);
						history.push("/admin");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
