import React, { useState } from "react";
import "./GeneralInfo.css";

function GeneralInfo() {
	const [generalInfo, setGeneralInfo] = useState({
		fName: "",
		lName: "",
		title: "",
		phone: "",
		email: "",
	});

	const changeGeneralInfoHandler = (e) => {
		e.preventDefault();
		setGeneralInfo({
			...generalInfo,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="gi_container">
			<input
				id="gi_fName"
				name="fName"
				type="text"
				placeholder="First Name"
				value={generalInfo.fName}
				onChange={changeGeneralInfoHandler}
			/>
			<input
				id="gi_lName"
				name="lName"
				type="text"
				placeholder="Last Name"
				value={generalInfo.lName}
				onChange={changeGeneralInfoHandler}
			/>
			<input
				id="gi_title"
				name="title"
				type="text"
				placeholder="Title"
				value={generalInfo.title}
				onChange={changeGeneralInfoHandler}
			/>
			<input
				id="gi_number"
				name="phone"
				type="text"
				placeholder="Phone Number"
				value={generalInfo.phone}
				onChange={changeGeneralInfoHandler}
			/>
			<input
				id="gi_email"
				name="email"
				type="email"
				placeholder="Email"
				value={generalInfo.email}
				onChange={changeGeneralInfoHandler}
			/>
		</div>
	);
}

export default GeneralInfo;
