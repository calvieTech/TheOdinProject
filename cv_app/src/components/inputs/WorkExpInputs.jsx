import React from "react";
import "../WorkExp.css";

function WorkExpInputs({
	workExp,
	workExpArr,
	setWorkExpArr,
	idx,
}) {
	const changeWorkExpHandler = (e, index) => {
		e.preventDefault();
		if (index === idx) {
			const updatedWorkExpArr = [
				...workExpArr,
				{ ...workExp, [e.target.name]: e.target.value },
			];
			console.log(`updatedWorkExp: `, updatedWorkExpArr);
		}
	};

	return (
		<>
			<input
				id={`we_position_${idx}`}
				name="position"
				type="text"
				value={workExp.company}
				placeholder="Position"
				onChange={(event) =>
					changeWorkExpHandler(event, idx)
				}
			/>
			<input
				id={`we_company_${idx}`}
				name="company"
				type="text"
				value={workExp.company}
				placeholder="Company"
				onChange={(event) =>
					changeWorkExpHandler(event, idx)
				}
			/>
			<input
				id={`we_title_${idx}`}
				name="title"
				type="text"
				value={workExp.title}
				placeholder="Title"
				onChange={(event) =>
					changeWorkExpHandler(event, idx)
				}
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
				onChange={(event) =>
					changeWorkExpHandler(event, idx)
				}
			/>
			<input
				id={`we_end_${idx}`}
				name="endingDate"
				type="date"
				value={workExp.endingDate}
				placeholder="End Date"
				onChange={(event) =>
					changeWorkExpHandler(event, idx)
				}
			/>
			<textarea
				id={`we_description_${idx}`}
				name="description"
				type="text"
				value={workExp.description}
				placeholder="Description"
				rows="5"
				onChange={(event) =>
					changeWorkExpHandler(event, idx)
				}
			/>
		</>
	);
}

export default WorkExpInputs;
