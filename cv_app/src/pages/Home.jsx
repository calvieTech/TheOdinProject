import React, { useState } from "react";
import "./Home.css";
import ResumeEdit from "../components/ResumeEdit";
import ResumePreview from "../components/ResumePreview";

function Home() {
	const [educationForm, setEducationForm] = useState({});

	return (
		<div className="home">
			<ResumeEdit />
			<ResumePreview />
		</div>
	);
}

export default Home;
