import React from "react";
import "../styles/EditButton.css";

function EditButton({ isEnabled }) {
	return (
		<button
			className="editButton_container"
			disabled={!isEnabled}>
			Edit Info
		</button>
	);
}

export default EditButton;
