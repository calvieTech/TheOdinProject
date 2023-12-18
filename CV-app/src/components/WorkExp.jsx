import React from "react";
import "../styles/WorkExp.css";
import WorkExpInput from "./WorkExpInput";
import * as dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

function WorkExp({ cvData, setCvData }) {
	const onAddWorkExpClick = (e) => {
		e.preventDefault();
		const addWorkExp = {
			companyName: "",
			positionTitle: "",
			responsibility: "",
			startingDate: "",
			endingDate: "",
		};
		const addWorkExpArr = cvData.workExp.concat(addWorkExp);
		setCvData({ ...cvData, workExp: addWorkExpArr });
	};

	return (
		<div className="workExp_container">
			<h3>Work Experience</h3>
			{cvData?.workExp?.map((exp, idx) => {
				return (
					<div
						key={exp}
						className="workExp">
						<WorkExpInput
							exp={exp}
							idx={idx}
							setCvData={setCvData}
							cvData={cvData}
						/>
					</div>
				);
			})}
			<button onClick={(e) => onAddWorkExpClick(e)}>
				Add More Work Experience
			</button>
		</div>
	);
}

export default WorkExp;
