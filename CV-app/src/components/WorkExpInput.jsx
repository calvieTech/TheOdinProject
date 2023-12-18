import React from "react";
import "../styles/WorkExp.css";
import * as dayjs from "dayjs";

function WorkExpInput({ exp, idx, cvData, setCvData }) {
	const onWorkExpChange = (e, idx) => {
		if (
			e.target.name == "startingDate" ||
			e.target.name == "endingDate"
		) {
			// const formattedDate = dayjs(e.target.value).format(
			// 	"YYYY-MM-DD"
			// );
			const updatedWorkExpDate = {
				...exp,
				[e.target.name]: e.target.value,
			};

			const updatedWorkExpArr = cvData.workExp.map(
				(workExp, index) => {
					if (idx === index) {
						return updatedWorkExpDate;
					}
					return workExp;
				}
			);

			setCvData({
				...cvData,
				workExp: updatedWorkExpArr,
			});
			return;
		}

		const updatedWorkExp = {
			...exp,
			[e.target.name]: e.target.value,
		};

		const updatedWorkExpArr = cvData.workExp.map(
			(workExp, index) => {
				if (idx === index) {
					return updatedWorkExp;
				}
				return workExp;
			}
		);
		setCvData({ ...cvData, workExp: updatedWorkExpArr });
	};
	return (
		<>
			<input
				type="text"
				name="companyName"
				value={exp.companyName || ""}
				placeholder="Company Name"
				onChange={(e) => onWorkExpChange(e, idx)}
			/>
			<input
				type="text"
				name="positionTitle"
				value={exp.positionTitle || ""}
				placeholder="Title of Position"
				onChange={(e) => onWorkExpChange(e, idx)}
			/>
			<textarea
				id="workExp_responsibilities"
				type="text"
				name="responsibility"
				value={exp.responsibility || ""}
				placeholder="Responsibilities, tasks and duties"
				onChange={(e) => onWorkExpChange(e, idx)}
			/>
			<div className="workExp_dates">
				<label
					className="startingDateClass"
					htmlFor="startingDate">
					Starting Date:{" "}
					<input
						id="startingDate"
						name="startingDate"
						type="date"
						value={exp.startingDate}
						placeholder="Starting Date"
						onChange={(e) => onWorkExpChange(e, idx)}
					/>
				</label>
				<label
					className="endingDateClass"
					htmlFor="endingDate">
					Ending Date:{" "}
					<input
						id="endingDate"
						name="endingDate"
						type="date"
						value={exp.endingDate}
						placeholder="Ending Date"
						onChange={(e) => onWorkExpChange(e, idx)}
					/>
				</label>
			</div>
		</>
	);
}

export default WorkExpInput;
