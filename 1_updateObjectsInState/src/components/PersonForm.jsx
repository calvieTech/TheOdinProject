import React, { useState } from "react";

function PersonForm() {
	const [person, setPerson] = useState({
		name: "Niki de Saint Phalle",
		author: "Calvin Thang",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});

	const handlePersonChange = (e) => {
		const updatedPerson = {
			...person,
			[e.target.name]: e.target.value,
		};
		setPerson(updatedPerson);
	};

	const handleArtworkChange = (e) => {
		const updatedArtwork = {
			...person.artwork,
			[e.target.name]: e.target.value,
		};
		setPerson({
			...person,
			artwork: updatedArtwork,
		});
	};

	return (
		<>
			<h1>Person Form</h1>
			<label>
				Name:
				<input
					name="name"
					value={person.name}
					onChange={handlePersonChange}
				/>
			</label>
			<label>
				Author:
				<input
					name="author"
					value={person.author}
					onChange={handlePersonChange}
				/>
			</label>
			<label>
				Title:
				<input
					name="title"
					value={person.artwork.title}
					onChange={handleArtworkChange}
				/>
			</label>
			<label>
				City:
				<input
					name="city"
					value={person.artwork.city}
					onChange={handleArtworkChange}
				/>
			</label>
			<label>
				Image:
				<input
					name="image"
					value={person.artwork.image}
					onChange={handleArtworkChange}
				/>
			</label>
			<p>
				<i>{person.artwork.title}</i>
				{" by "}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img
				src={person.artwork.image}
				alt={person.artwork.title}
			/>
			<p>Coded by {person.author}</p>
		</>
	);
}

export default PersonForm;
