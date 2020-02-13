import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const AddCompanyForm = ({ history }) => {
	const { actions, store } = useContext(Context);
	const [company, setCompany] = useState("");
	const [fcId, setFcId] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const addCompany = event => {
		//.1 stop the form from subbiting
		event.preventDefault();

		actions.createCompany(
			{
				company,
				fcId,
				email,
				password
			},
			history
		);
		//reset the form.
		event.currentTarget.reset();
	};

	return (
		<form className="input-field col s6" style={{ marginTop: "100px" }} onSubmit={addCompany}>
			<input
				name="company"
				type="text"
				placeholder="company"
				required
				onChange={e => setCompany(e.target.value)}
				value={company}
			/>
			<input
				name="fcId"
				type="number"
				required
				placeholder="fcId"
				onChange={e => setFcId(e.target.value)}
				value={fcId}
			/>
			<input
				name="email"
				type="email"
				required
				placeholder="email"
				onChange={e => setEmail(e.target.value)}
				value={email}
			/>
			<input
				name="password"
				type="password"
				required
				placeholder="password"
				onChange={e => setPassword(e.target.value)}
				value={password}
			/>
			<select name="status" placeholder="status">
				<option value="available"> Good to go</option>
				<option value="unavailable"> Getting Repairs </option>
			</select>
			<button>+ Register Company</button>
		</form>
	);
};

AddCompanyForm.propTypes = {
	history: PropTypes.object
};

export default withRouter(AddCompanyForm);
