// import React, { useState, useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			companies: [],
			vans: [],
			activities: []
		},
		actions: {
			// COMPANIES
			createCompany: (data, history) => {
				fetch("https://loadtrackerapi.herokuapp.com/api/company", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify({
						fc_id: data.fcId,
						company_name: data.company,
						email: data.email,
						password: data.password
					})
				})
					.then(response => response.json())
					.then(data => {
						getActions().loadAllCompanies();
						history.push("/admin");
						console.log("Success:", JSON.stringify(data));
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			updateCompany: (data, id, history) => {
				fetch("https://loadtrackerapi.herokuapp.com/api/company" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify({
						fc_id: data.fcId,
						company_name: data.company,
						email: data.email,
						password: data.password
					})
				})
					.then(response => response.json())
					.then(data => {
						getActions().loadAllCompanies();
						console.log("Success:", JSON.stringify(data));
						history.push("/app");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			loadAllCompanies: () => {
				fetch("https://loadtrackerapi.herokuapp.com/api/company", {
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
							companies: data
						});
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			getCompany: id => {
				fetch("https://loadtrackerapi.herokuapp.com/api/company/" + id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(response => response.json())
					.then(data => {
						//console.log(data.company_name, data.vin);
						return [data.company_name, data.email];
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteCompany: id => {
				fetch("https://loadtrackerapi.herokuapp.com/api/van/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				})
					.then(() => {
						getActions().loadAllCompanies();
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			// VANS
			createVan: (data, history) => {
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
						getActions().loadAllVans();
						history.push("/app");
						console.log("Success:", JSON.stringify(data));
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
				const store = getStore();
				console.log("to send ", data);
				fetch("https://loadtrackerapi.herokuapp.com/api/activity", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`
					},
					body: JSON.stringify(data)
				})
					.then(response => {
						if (response.status !== 200) {
							throw Error("Wrong VIN");
						} else {
							return response.json();
						}
					})
					.then(data => {
						getActions().loadAllActivities();
						console.log("Success:", JSON.stringify(data));
						history.push("/app");
					})
					.catch(error => {
						console.error(error);
					});
			},

			loadAllActivities: () => {
				const store = getStore();
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
							activities: store.activities === null ? [] : data
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
