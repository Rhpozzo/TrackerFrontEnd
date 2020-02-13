import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const AddVanForm = ({ history }) => {
	const { actions, store } = useContext(Context);
	const [company, setCompany] = useState("");
	const [vin, setVin] = useState("");

	const addVan = event => {
		//.1 stop the form from subbiting
		event.preventDefault();

		actions.createVan({
			company,
			vin
		}),
			history;
		//reset the form.
		event.currentTarget.reset();
	};

	return (
		<form className="input-field col s6" style={{ marginTop: "20px", width: "75%" }} onSubmit={addVan}>
			<input
				name="company"
				type="text"
				placeholder="company"
				required
				onChange={e => setCompany(e.target.value)}
				value={company}
			/>
			<input
				name="vin"
				type="text"
				required
				placeholder="vin"
				onChange={e => setVin(e.target.value)}
				value={vin}
			/>
			<select name="status" placeholder="status">
				<option value="available"> Good to go</option>
				<option value="unavailable"> Getting Repairs </option>
			</select>
			<Link to="/admin">
				<button>+ Add Van</button>
			</Link>
		</form>
	);
};

AddVanForm.propTypes = {
	history: PropTypes.object
};

export default withRouter(AddVanForm);
