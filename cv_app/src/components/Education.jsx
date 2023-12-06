import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Education.css";

function Education() {
	const [educationFormCount, setEducationFormCount] =
		useState(1);

	const handleAddEducation = (e) => {
		e.preventDefault();
		setEducationFormCount(educationFormCount + 1);
	};

	return (
		<div className="edu_container">
			{[...Array(educationFormCount)].map((_, idx) => {
				const randId = uuidv4();

				return (
					<div
						key={randId}
						className="edu_options">
						<select
							name="edu_degree"
							id="edu_degree">
							<option value="bachelors">Bachelors</option>
							<option value="masters">Masters</option>
							<option value="phd">PhD</option>
						</select>
						<input
							id="edu_major"
							type="text"
							placeholder="Major"
							required
						/>
						<input
							id="edu_school"
							type="text"
							placeholder="University/College"
							required
						/>
					</div>
				);
			})}

			<button
				type="button"
				onClick={handleAddEducation}>
				Add More
			</button>
		</div>
	);
}

export default Education;
