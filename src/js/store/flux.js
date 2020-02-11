import React, { useState, useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			hash: "",
			company: [],
			vans: []
		},
		actions: {
			handleScan: data => {
				if (data) {
					setQr: data;
				}
			},
			handleError: err => {
				console.log(err);
			},

			createVan: data => {
				console.log("van added", data);
			},

			login: (data, history) => {
				fetch("http://loadtrackerapi.herokuapp.com/api/login", {
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
						console.log("This is store: ", data);
						setStore({
							hash: data.jwt
						});
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
