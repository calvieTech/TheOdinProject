import Profile from "../components/Profile.jsx";
import { getImageUrl } from "./utils.js";

const scientistsArr = [
	{
		name: "Maria Skłodowska-Curie",
		imageUrl: "szV5sdG",
		profession: "physicist and chemist",
		numAwards: 4,
		awards:
			"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
		discovered: "polonium (chemical element)",
	},
	{
		name: "Katsuko Saruhashi",
		imageUrl: "YfeOqp2",
		profession: "geochemist",
		numAwards: 2,
		awards: "Miyake Prize for geochemistry, Tanaka Prize",
		discovered:
			"method for measuring carbon dioxide in seawater",
	},
];

export default function Gallery() {
	const scientists = scientistsArr.map((scientist) => (
		<>
			<Profile
				name={scientist.name}
				imageUrl={scientist.imageUrl}
				profession={scientist.profession}
				numAwards={scientist.numAwards}
				awards={scientist.awards}
				discovered={scientist.discovered}
			/>
		</>
	));

	return <div>{scientists}</div>;

	// return (
	// 	<div>
	// 		<h1>Notable Scientists</h1>
	// 		<section className="profile">
	// 			<h2>Maria Skłodowska-Curie</h2>
	// 			<img
	// 				className="avatar"
	// 				src={getImageUrl("szV5sdG")}
	// 				alt="Maria Skłodowska-Curie"
	// 				width={70}
	// 				height={70}
	// 			/>
	// 			<ul>
	// 				<li>
	// 					<b>Profession: </b>
	// 					physicist and chemist
	// 				</li>
	// 				<li>
	// 					<b>Awards: 4 </b>
	// 					(Nobel Prize in Physics, Nobel Prize in
	// 					Chemistry, Davy Medal, Matteucci Medal)
	// 				</li>
	// 				<li>
	// 					<b>Discovered: </b>
	// 					polonium (chemical element)
	// 				</li>
	// 			</ul>
	// 		</section>
	// 		<section className="profile">
	// 			<h2>Katsuko Saruhashi</h2>
	// 			<img
	// 				className="avatar"
	// 				src={getImageUrl("YfeOqp2")}
	// 				alt="Katsuko Saruhashi"
	// 				width={70}
	// 				height={70}
	// 			/>
	// 			<ul>
	// 				<li>
	// 					<b>Profession: </b>
	// 					geochemist
	// 				</li>
	// 				<li>
	// 					<b>Awards: 2 </b>
	// 					(Miyake Prize for geochemistry, Tanaka Prize)
	// 				</li>
	// 				<li>
	// 					<b>Discovered: </b>a method for measuring carbon
	// 					dioxide in seawater
	// 				</li>
	// 			</ul>
	// 		</section>
	// 	</div>
	// );
}
