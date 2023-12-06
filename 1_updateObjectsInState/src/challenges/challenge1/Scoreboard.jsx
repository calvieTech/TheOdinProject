import { useState } from "react";

export default function Scoreboard() {
	const [player, setPlayer] = useState({
		firstName: "Ranjani",
		lastName: "Shettar",
		score: 10,
	});

	/**
	 * * Make sure to create a new object and then update state on it
	 */
	function handlePlusClick() {
		// player.score++;
		const updatedPlayerScore = {
			...player,
			score: player.score + 1,
		};
		setPlayer(updatedPlayerScore);
	}

	function handleFirstNameChange(e) {
		e.preventDefault();
		const updatedPlayerFirstName = {
			...player,
			firstName: e.target.value,
		};
		setPlayer(updatedPlayerFirstName);
	}

	function handleLastNameChange(e) {
		e.preventDefault();
		const updatedPlayerLastName = {
			...player,
			lastName: e.target.value,
		};
		setPlayer(updatedPlayerLastName);
	}

	return (
		<>
			<label>
				Score: <b>{player.score}</b>{" "}
				<button onClick={handlePlusClick}>+1</button>
			</label>
			<label>
				First name:
				<input
					value={player.firstName}
					onChange={handleFirstNameChange}
				/>
			</label>
			<label>
				Last name:
				<input
					value={player.lastName}
					onChange={handleLastNameChange}
				/>
			</label>
		</>
	);
}
