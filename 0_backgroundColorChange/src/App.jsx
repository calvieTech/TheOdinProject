import React, { useState } from "react";
import "./App.css";

const COLORS = [
	"pink",
	"green",
	"blue",
	"yellow",
	"purple",
];

function App() {
	const [color, setColor] = useState(COLORS[0]);
	const [count, setCount] = useState(0);

	const onButtonClick = (color) => {
		setColor(color);
		setCount(count + 1);
	};

	return (
		<>
			<h2
				style={{
					display: "flex",
					textAlign: "center",
					justifyContent: "center",
				}}>
				{count} number of times clicked
			</h2>
			<div
				className="App"
				style={{ backgroundColor: color }}>
				{COLORS.map((colorVal) => (
					<button
						type="button"
						key={colorVal}
						onClick={() => onButtonClick(colorVal)}
						className={
							color === colorVal ? "selected" : ""
						}>
						{colorVal}
					</button>
				))}
			</div>
		</>
	);
}

export default App;
