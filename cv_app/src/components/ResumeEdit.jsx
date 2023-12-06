import React, { useState } from "react";
import "./ResumeEdit.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import WorkExp from "./WorkExp";

function ResumeEdit() {

	return (
		<section className="re_container">
			<h2>Edit your CV</h2>
			<div className="re_edit">
				<h3>General Info</h3>
				<div>
					<GeneralInfo
					/>
				</div>
				<h3>Work Experience</h3>
				<div>
					<WorkExp />
				</div>
				<h3>Education</h3>
				<div>
					<Education />
				</div>
			</div>
		</section>
	);
}

export default ResumeEdit;
