import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const Main = ({ history }) => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = event => {
		//.1 stop the form from subbiting
		event.preventDefault();

		actions.login(
			{
				email,
				password
			},
			history
		);
		//reset the form.
		event.currentTarget.reset();
	};

	return (
		<div className="card">
			<div className="admin-card">
				<form onSubmit={login}>
					<p>Welcome please sign in to view admin dashboard, else view clock</p>
					<div className="input-field">
						<input
							type="email"
							required
							placeholder="Email"
							className="validate"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="input-field">
						<input
							type="password"
							required
							placeholder="Password"
							onChange={e => setPassword(e.target.value)}
							value={password}
							className="validate"
						/>
					</div>
					<button className="btn waves-effect waves pulse	" type="submit" name="action">
						Submit
						<i className="material-icons right">send</i>
					</button>
				</form>
			</div>
		</div>
	);
};

Main.propTypes = {
	history: PropTypes.object
};

export default Main;
