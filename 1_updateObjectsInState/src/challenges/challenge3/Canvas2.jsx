import { useState } from "react";
import { useImmer } from "use-immer";
import Background2 from "./Background2.jsx";
import Box2 from "./Box2.jsx";

const initialPosition = {
	x: 0,
	y: 0,
};

export default function Canvas2() {
	const [shape, setShape] = useImmer({
		color: "orange",
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		// shape.position.x += dx;
		// shape.position.y += dy;
		setShape((myShape) => {
			myShape.position.x += dx;
			myShape.position.y += dy;
		});
	}

	function handleColorChange(e) {
		setShape({
			...shape,
			color: e.target.value,
		});
	}

	return (
		<>
			<select
				value={shape.color}
				onChange={handleColorChange}>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background2 position={initialPosition} />
			<Box2
				color={shape.color}
				position={shape.position}
				onMove={handleMove}>
				Drag me!
			</Box2>
		</>
	);
}
