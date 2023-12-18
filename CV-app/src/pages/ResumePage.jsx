import React, { useState } from "react";
import "../styles/ResumePage.css";
import EditResume from "../components/EditResume";
import PreviewResume from "../components/PreviewResume";
import * as dayjs from "dayjs";

function ResumePage() {
	const [cvData, setCvData] = useState(
		window.localStorage.getItem("cvData") || {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			city: "",
			state: "",
			summary: "",
			degree: "Bachelor Degree",
			study: "",
			college: "",
			workExp: [
				{
					companyName: "",
					positionTitle: "",
					responsibility: "",
					startingDate:
						"" || new Date().toLocaleDateString(),
					endingDate: "" || new Date().toLocaleDateString(),
				},
			],
		}
	);

	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<>
			<div className="home">
				<div className="editResume">
					<EditResume
						cvData={cvData}
						setCvData={setCvData}
						isSubmitted={isSubmitted}
						setIsSubmitted={setIsSubmitted}
					/>
				</div>
				<div className="previewResume">
					<PreviewResume
						cvData={cvData}
						isSubmitted={isSubmitted}
					/>
				</div>
			</div>
		</>
	);
}

export default ResumePage;
