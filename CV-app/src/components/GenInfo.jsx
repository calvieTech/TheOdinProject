import React from "react";
import "../styles/GenInfo.css";

function GenInfo({ cvData, setCvData }) {
	const onGenInfoChange = (e) => {
		const changedGenInfo = {
			...cvData,
			[e.target.name]: e.target.value,
		};
		setCvData(changedGenInfo);
	};

	return (
		<div className="gi_container">
			<h3>General Info</h3>
			<input
				id="gi_fName"
				name="firstName"
				type="text"
				placeholder="First Name"
				value={cvData.firstName}
				onChange={(e) => onGenInfoChange(e)}
				required
			/>
			<input
				id="gi_lName"
				name="lastName"
				type="text"
				placeholder="Last Name"
				value={cvData.lastName}
				onChange={(e) => onGenInfoChange(e)}
				required
			/>
			<input
				id="gi_number"
				name="phone"
				type="text"
				placeholder="Phone Number"
				value={cvData.phone}
				onChange={(e) => onGenInfoChange(e)}
				required
			/>
			<input
				id="gi_email"
				name="email"
				type="email"
				placeholder="Email"
				value={cvData.email}
				onChange={(e) => onGenInfoChange(e)}
				required
			/>
			<input
				id="gi_city"
				name="city"
				type="text"
				placeholder="US City"
				value={cvData.city}
				onChange={(e) => onGenInfoChange(e)}
				required
			/>
			<input
				id="gi_state"
				name="state"
				type="text"
				placeholder="US State"
				value={cvData.state}
				onChange={(e) => onGenInfoChange(e)}
				required
			/>
		</div>
	);
}

export default GenInfo;
