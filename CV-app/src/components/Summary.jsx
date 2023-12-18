import React from "react";
import "../styles/Summary.css";

function Summary({ cvData, setCvData }) {
	const onSummaryChange = (e) => {
		const updatedSummary = {
			...cvData,
			[e.target.name]: e.target.value,
		};
		setCvData(updatedSummary);
	};

	return (
		<div className="su_container">
			<h3>Summary</h3>
			<textarea
				name="summary"
				className="su_textarea"
				placeholder={
					"What is one thing that makes you stand out?"
				}
				onChange={(e) => onSummaryChange(e)}
			/>
		</div>
	);
}

export default Summary;
