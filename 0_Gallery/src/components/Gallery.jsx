import React, { useState } from "react";
import { sculptureList } from "../data/data";

function Gallery() {
	// state is what we want the component to remember
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	// hasPrev is true if greater than 0
	const hasPrev = index > 0;
	// hasNext is true if less than length of sculptureList - 1
	const hasNext = index < sculptureList.length - 1;

	const handleNextClick = () => {
		if (hasNext) {
			setIndex(index + 1);
		}
	};

	const handlePrevClick = () => {
		if (hasPrev) {
			setIndex(index - 1);
		}
	};

	const handleMoreClick = () => {
		setShowMore(!showMore);
	};

	let sculpture = sculptureList[index];

	return (
		<div>
			<button
				onClick={handleNextClick}
				disabled={!hasNext}>
				Next
			</button>
			<button
				onClick={handlePrevClick}
				disabled={!hasPrev}>
				Previous
			</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? "Hide" : "Show"} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<img
				src={sculpture.url}
				alt={sculpture.alt}
			/>
		</div>
	);
}

export default Gallery;
