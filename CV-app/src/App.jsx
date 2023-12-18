import { useState } from "react";
import "./App.css";
import ResumePage from "./pages/ResumePage";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<ResumePage />
		</>
	);
}

export default App;
