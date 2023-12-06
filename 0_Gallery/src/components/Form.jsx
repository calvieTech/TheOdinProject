import React, { useState } from "react";

function Form() {
	// let firstName = "",
	// 	lastName = "";
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleReset = () => {
		setFirstName("");
		setLastName("");
	};

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				placeholder="First name"
				value={firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				placeholder="Last name"
				value={lastName}
				onChange={handleLastNameChange}
			/>
			<h1>
				Hi, {firstName} {lastName}
			</h1>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}

export default Form;
