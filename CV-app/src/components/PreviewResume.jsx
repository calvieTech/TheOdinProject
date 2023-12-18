import React from "react";
import "../styles/PreviewResume.css";

function PreviewResume({ cvData, isSubmitted }) {
	// console.log(`cvData: `, cvData.summary);

	return (
		<section className="pr_container">
			<h1>Preview Resume</h1>
			{isSubmitted && (
				<div className="pr_resume">
					<section className="pr_genInfo">
						<h3 className="pr_name">
							{cvData.firstName} {cvData.lastName}
						</h3>
						<h4 className="pr_info">
							{cvData.phone} | {cvData.email} |{" "}
							{cvData.city}, {cvData.state}
						</h4>
					</section>
					<section className="pr_summary">
						<h3>Summary:</h3> <p>{cvData.summary}</p>
					</section>
					<section className="pr_education">
						<h3>Education: </h3>
						<span>
							{cvData.degree} in {cvData.study} from{" "}
							{cvData.college}
						</span>
					</section>
					<section className="pr_workExp">
						<h3>Work Experience: </h3>
						<ul>
							{cvData.workExp.map((exp, idx) => (
								<div
									key={exp.companyName}
									className={`pr_exp exp${idx}`}>
									<h4>
										{exp.positionTitle} {exp.companyName}
									</h4>
									<p>{exp.responsibility}</p>
								</div>
							))}
						</ul>
					</section>
				</div>
			)}
		</section>
	);
}

export default PreviewResume;
