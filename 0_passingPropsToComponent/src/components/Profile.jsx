import React from "react";
import { getImageUrl } from "../pages/utils";

function Profile({
	name,
	imageUrl,
	profession,
	numAwards,
	awards,
	discovered,
	imageSize = 70,
}) {
	return (
		<>
			<h2>{name}</h2>
			<img
				className="avatar"
				src={getImageUrl(imageUrl)}
				alt={name}
				width={imageSize}
				height={imageSize}
			/>
			<ul>
				<li>
					<b>Profession: </b>
					{profession}
				</li>
				<li>
					<b>Awards: {numAwards} </b>({awards})
				</li>
				<li>
					<b>Discovered: </b>
					{discovered}
				</li>
			</ul>
		</>
	);
}

export default Profile;
