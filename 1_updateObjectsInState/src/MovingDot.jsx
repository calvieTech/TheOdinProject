import React, { useState } from "react";

export default function MovingDot() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});
	return (
		<div
			onPointerMove={(e) => {
				/**
				 * ! do NOT mutate state (i.e. position) directly like the following:
				 * ! position.x = e.clientX;
				 * ! position.y = e.clientY;
				 */

				/**
				 * * The following is the right way to update state:
				 */
				setPosition({
					x: e.clientX,
					y: e.clientY,
				});

				/**
				 * * Alternative way: create a brand new object and mutate it (this is called a LOCAL MUTATION)
				 */
				const nextPosition = {};
				nextPosition.x = e.clientX;
				nextPosition.y = e.clientY;
				setPosition(nextPosition);
			}}
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
			}}>
			<div
				style={{
					position: "absolute",
					backgroundColor: "red",
					borderRadius: "50%",
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</div>
	);
}
