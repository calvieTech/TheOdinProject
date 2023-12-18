import React, { useState } from "react";
import GenInfo from "./GenInfo";
import "../styles/EditResume.css";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import EditInfo from "./EditInfo";

function EditResume({
	cvData,
	setCvData,
	isSubmitted,
	setIsSubmitted,
}) {
	const [isEnabled, setIsEnabled] = useState(false);

	const onSubmitResume = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

	return (
		<form
			className="re_container"
			onSubmit={(e) => onSubmitResume(e)}
			disabled={isSubmitted ? true : false}>
			<h2>Edit Resume</h2>
			<EditInfo
				cvData={cvData}
				setCvData={setCvData}
			/>
			<div className="re_buttons">
				<button
					className="editButton_container"
					disabled={!isEnabled}>
					Edit Info
				</button>
				<button
					type="submit"
					className="submitButton_container">
					Submit CV
				</button>
			</div>
		</form>
	);
}

export default EditResume;
