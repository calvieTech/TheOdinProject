import React, { useState } from "react";
import "./WorkExp.css";
import { v4 as uuidv4 } from "uuid";
import WorkExpInputs from "./inputs/WorkExpInputs";

// Do NOT store JSX elements in the state, store ONLY the number of components you want to render
// Then, use this number to map over and render the components
function WorkExp() {
	// the state that counts the number of components to render
	const [workExpCount, setWorkExpCount] = useState(1);
	const [workExpArr, setWorkExpArr] = useState([
		{
			position: "",
			company: "",
			title: "",
			address: "",
			startingDate: "",
			endingDate: "",
			description: "",
		},
	]);

	// Incrememnt the number of components to render by 1 each time the button is clicked
	const handleAddMoreWorkExp = (e) => {
		e.preventDefault();
		setWorkExpArr([
			...workExpArr,
			{
				position: "",
				company: "",
				title: "",
				address: "",
				startingDate: "",
				endingDate: "",
				description: "",
			},
		]);
		setWorkExpCount(workExpCount + 1);
	};

	const changeWorkExpHandler = (e) => {
		e.preventDefault();
		console.log(`$`);
	};

	return (
		<div className="we_container">
			{workExpArr.map((workExp, idx) => {
				const randomId = uuidv4();
				return (
					<div
						key={randomId}
						className="we_container">
						<input
							id={`we_position_${idx}`}
							name="position"
							type="text"
							value={workExp.company}
							placeholder="Position"
							onChange={changeWorkExpHandler}
						/>
						<input
							id={`we_company_${idx}`}
							name="company"
							type="text"
							value={workExp.company}
							placeholder="Company"
							onChange={changeWorkExpHandler}
						/>
						<input
							id={`we_title_${idx}`}
							name="title"
							type="text"
							value={workExp.title}
							placeholder="Title"
							onChange={changeWorkExpHandler}
						/>
						<input
							id={`we_address_${idx}`}
							name="address"
							type="text"
							value={workExp.address}
							placeholder="Address"
							onChange={changeWorkExpHandler}
						/>
						<input
							id={`we_start_${idx}`}
							name="startingDate"
							type="date"
							value={workExp.startingDate}
							placeholder="Start Date"
							onChange={changeWorkExpHandler}
						/>
						<input
							id={`we_end_${idx}`}
							name="endingDate"
							type="date"
							value={workExp.endingDate}
							placeholder="End Date"
							onChange={changeWorkExpHandler}
						/>
						<textarea
							id={`we_description_${idx}`}
							name="description"
							type="text"
							value={workExp.description}
							placeholder="Description"
							rows="5"
							onChange={changeWorkExpHandler}
						/>
					</div>
				);
			})}
			<button
				type="button"
				onClick={handleAddMoreWorkExp}>
				Add More
			</button>
		</div>
	);
}

export default WorkExp;
