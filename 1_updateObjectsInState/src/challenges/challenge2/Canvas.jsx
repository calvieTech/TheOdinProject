import { useState } from "react";
import Background from "./Background.jsx";
import Box from "./Box.jsx";

/**
 * * Problem:  The background is moving after the color change due to faulty mutation in state
 */

const initialPosition = {
	x: 0,
	y: 0,
};

export default function Canvas() {
	const [shape, setShape] = useState({
		color: "orange",
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		// shape.position.x += dx;
		// shape.position.y += dy;
		const updatedShapePosition = {
			x: shape.position.x + dx,
			y: shape.position.y + dy,
		};
		const updatedShape = {
			...shape,
			position: updatedShapePosition,
		};
		setShape(updatedShape);
	}

	function handleColorChange(e) {
		e.preventDefault();
		// setShape({
		// 	...shape,
		// 	color: e.target.value,
		// });
		const updatedColorShape = {
			...shape,
			color: e.target.value,
		};
		setShape(updatedColorShape);
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
			<Background position={initialPosition} />
			<Box
				color={shape.color}
				position={shape.position}
				onMove={handleMove}>
				Drag me!
			</Box>
		</>
	);
}
