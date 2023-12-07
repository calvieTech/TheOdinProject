import { useState } from "react";
import "./WorkExp.css";
import { v4 as uuidv4 } from "uuid";
import WorkExperience2 from "./WorkExperience2";

let id = 1;

// Do NOT store JSX elements in the state, store ONLY the number of components you want to render
// Then, use this number to map over and render the components
function WorkExp() {
	// the state that counts the number of components to render
	const [workExpCount, setWorkExpCount] = useState(1);
	const [workExpArr, setWorkExpArr] = useState([
		{
			id: id,
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
				id: ++id,
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

	// const changeWorkExpHandler = (e, workExpId) => {
	// 	e.preventDefault();
	// 	console.log(`id: `, id);

	// 	const updatedWorkExpArr = workExpArr.map(
	// 		(workExp, idx) => {
	// 			if (workExp.id === workExpId) {
	// 				const updatedWorkExp = {
	// 					...workExp,
	// 					[e.target.name]: e.target.value,
	// 				};
	// 				return updatedWorkExp;
	// 			} else {
	// 				return workExp;
	// 			}
	// 		}
	// 	);

	// 	console.log(`workExpArr: `, workExpArr);
	// 	// console.log(`updatedWorkExpArr: `, updatedWorkExpArr);

	// 	// setWorkExpArr(updatedWorkExpArr);
	// };

	return (
		<div className="we_container">
			{workExpArr.map((workExp) => {
				const randomId = uuidv4();
				return <WorkExperience2 key={randomId}  id={workExp.id} setWorkExpArr={setWorkExpArr}/>;
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

{
	/* <div
						key={randomId}
						className="we_container">
						<input
							id={`we_position_${idx}`}
							name="position"
							type="text"
							value={workExp.position}
							placeholder="Position"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_company_${idx}`}
							name="company"
							type="text"
							value={workExp.company}
							placeholder="Company"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_title_${idx}`}
							name="title"
							type="text"
							value={workExp.title}
							placeholder="Title"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_address_${idx}`}
							name="address"
							type="text"
							value={workExp.address}
							placeholder="Address"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_start_${idx}`}
							name="startingDate"
							type="date"
							value={workExp.startingDate}
							placeholder="Start Date"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_end_${idx}`}
							name="endingDate"
							type="date"
							value={workExp.endingDate}
							placeholder="End Date"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<textarea
							id={`we_description_${idx}`}
							name="description"
							type="text"
							value={workExp.description}
							placeholder="Description"
							rows="5"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
					</div> */
}
