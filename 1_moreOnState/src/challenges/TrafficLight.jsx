import React, { useState } from "react";

function TrafficLight() {
	const [walk, setWalk] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		const message = walk ? "Stop is next" : "Walk is next";
		setWalk(!walk);
		alert(message);
	};

	return (
		<>
			<button
				type="button"
				onClick={handleClick}>
				Change to {walk ? "Stop" : "Walk"}
			</button>
			<h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
				{walk ? "Walk" : "Stop"}
			</h1>
		</>
	);
}

export default TrafficLight;
