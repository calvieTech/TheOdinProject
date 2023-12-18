import React from "react";
import WorkExp from "./WorkExp";
import Education from "./Education";
import GenInfo from "./GenInfo";
import Summary from "./Summary";

function EditInfo({ cvData, setCvData }) {
	return (
		<div>
			<GenInfo
				cvData={cvData}
				setCvData={setCvData}
			/>
			<Summary
				cvData={cvData}
				setCvData={setCvData}
			/>
			<Education
				cvData={cvData}
				setCvData={setCvData}
			/>
			<WorkExp
				cvData={cvData}
				setCvData={setCvData}
			/>
		</div>
	);
}

export default EditInfo;
