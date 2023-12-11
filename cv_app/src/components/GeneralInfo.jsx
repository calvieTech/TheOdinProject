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

	const [isSaved, setIsSaved] = useState(false);

	const isGeneralInfoEmpty = (genInfo) => {
		let check = true;
		for (let value in Object.values(genInfo)) {
			console.log(`value: `, value);
			if (value.length !== 0) {
				check = false;
			} else {
				check = true;
			}
		}
		return check;
	};

	const saveGeneralInfoHandler = (e) => {
		e.preventDefault();
		if (isGeneralInfoEmpty(generalInfo)) {
			console.log(`generalInfo has content`);
		} else {
			console.log(`generalInfo has no content`);
		}
		setIsSaved(!isSaved);
	};

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
			<div className="gi_buttons">
				<button>Edit</button>
				<button onClick={saveGeneralInfoHandler}>
					Save
				</button>
			</div>
		</div>
	);
}

export default GeneralInfo;
