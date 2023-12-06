import React, { useState } from "react";

function Person() {
	const [person, setPerson] = useState({
		first_name: "Calvin",
		last_name: "Thang",
		age: 28,
	});

	const handleIncreaseAge = (e) => {
		e.preventDefault();
		const updatePerson = { ...person, age: person.age + 1 };
		setPerson(updatePerson);
	};

	const handleDecreaseAge = (e) => {
		e.preventDefault();
		if (person.age <= 0) {
			const resetPerson = { ...person, age: 1 };
			setPerson(resetPerson);
			return;
		}
		const updatePerson = { ...person, age: person.age - 1 };
		setPerson(updatePerson);
	};

	const handleIncrementAge = (e) => {
		e.preventDefault();
		const updatePerson = { ...person, age: person.age + 5 };
		setPerson(updatePerson);
	};

	const handleDecrementAge = (e) => {
		e.preventDefault();
		if (person.age < 5) {
			const resetPerson = { ...person, age: 1 };
			setPerson(resetPerson);
			return;
		}
		const updatePerson = { ...person, age: person.age - 5 };
		setPerson(updatePerson);
	};

	const handleFirstNameChange = (e) => {
		e.preventDefault();
		const updatePerson = {
			...person,
			first_name: e.target.value,
		};
		setPerson(updatePerson);
	};

	const handleLastNameChange = (e) => {
		e.preventDefault();
		const updatePerson = {
			...person,
			[e.target.name]: e.target.value,
		};
		setPerson(updatePerson);
	};

	return (
		<div>
			<h1>
				{person.first_name} {person.last_name}
			</h1>
			<h2>{person.age} years old</h2>
			<div>
				<button
					type="button"
					onClick={handleIncrementAge}>
					Increment Age by 5
				</button>
				<button
					type="button"
					onClick={handleIncreaseAge}>
					Increase Age
				</button>
				<button
					type="button"
					onClick={handleDecreaseAge}>
					Decrease Age
				</button>
				<button
					type="button"
					onClick={handleDecrementAge}>
					Decrement Age by 5
				</button>
			</div>
			<div style={{ marginTop: "14px" }}>
				<input
					type="text"
					name="first_name"
					value={person.first_name}
					placeholder="Set first name"
					onChange={handleFirstNameChange}
				/>
				<input
					type="text"
					name="last_name"
					value={person.last_name}
					placeholder="Set last name"
					onChange={handleLastNameChange}
				/>
			</div>
		</div>
	);
}

export default Person;
