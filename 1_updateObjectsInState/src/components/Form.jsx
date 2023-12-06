import React, { useState } from "react";

function Form() {
	const [person, setPerson] = useState({
		name: "Niki de Saint Phalle",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});

	setPerson({
		...person, // copy other fields
		artwork: {
			// replace the artwork
			...person.artwork, // with the same as previous
			city: "New York", // but change the city to New York
		},
	});

	return (
		<div>
			{" "}
			<label>
				First name:
				<input
					value={person.firstName}
					onChange={handleFirstNameChange}
				/>
			</label>
			<label>
				Last name:
				<input
					value={person.lastName}
					onChange={handleLastNameChange}
				/>
			</label>
			<label>
				Email:
				<input
					value={person.email}
					onChange={handleEmailChange}
				/>
			</label>
			<p>
				{person.firstName} {person.lastName} ({person.email}
				)
			</p>
		</div>
	);
}

export default Form;
