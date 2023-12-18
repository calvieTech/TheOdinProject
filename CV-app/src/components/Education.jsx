import React from "react";
import "../styles/Education.css";
import { v4 as uuidv4 } from "uuid";
import EducationSelect from "./EducationSelect";

function Education({ cvData, setCvData }) {
	const onEducationChange = (e) => {
		const updatedCVData = {
			...cvData,
			[e.target.name]: e.target.value,
		};

		// console.log(`updatedCVData: `, updatedCVData);

		setCvData(updatedCVData);
	};

	return (
		<div className="edu_container">
			<h3>Education</h3>
			<div className="edu_options">
				<select
					name="degree"
					id="edu_degree"
					value={cvData.degree}
					onChange={(e) => onEducationChange(e)}
					required>
					<option
						name="degree"
						value="Bachelor Degree">
						Bachelor Degree
					</option>
					<option
						name="degree"
						value="Masters Degree">
						Masters Degree
					</option>
					<option
						name="degree"
						value="PhD">
						PhD
					</option>
				</select>
				<input
					id="study"
					name="study"
					type="text"
					placeholder="Program of Study"
					value={cvData.study}
					onChange={(e) => onEducationChange(e)}
					required
				/>
				<input
					id="college"
					name="college"
					type="text"
					placeholder="University/College"
					value={cvData.college}
					onChange={(e) => onEducationChange(e)}
					required
				/>
			</div>
		</div>
	);
}

export default Education;
