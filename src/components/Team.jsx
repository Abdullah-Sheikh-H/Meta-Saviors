import { useState } from "react"
import Perry from "../assets/image_9.png"
import John from "../assets/image_11.png"
import Josh from "../assets/image_7.png"
import Parker from "../assets/image_12.png"
import Genis from "../assets/image_4.png"
import Danny from "../assets/image_6.png"
import Travis from "../assets/image_10.png"
import Winston from "../assets/image_8.png"
import Card from "./Card"

const Team = () => {
	const [teamMembers, SetTeamMembers] = useState([
		{
			name: "Perry",
			designation: "The architect",
			profileImage: Perry,
		},
		{
			name: "John",
			designation: "The marketing wizzard",
			profileImage: John,
		},
		{
			name: "Josh",
			designation: "The Technician",
			profileImage: Josh,
		},
		{
			name: "Parker",
			designation: "The Discord lord",
			profileImage: Parker,
		},
		{
			name: "Genis",
			designation: "The art mad man",
			profileImage: Genis,
		},
		{
			name: "Danny",
			designation: "The cyber doc",
			profileImage: Danny,
		},
		{
			name: "Travis",
			designation: "The Raid leader",
			profileImage: Travis,
		},
		{
			name: "Winston",
			designation: "The community builder",
			profileImage: Winston,
		},
	])
	return (
		<div className="mx-4 px-2 gap-5 justify-content-between">
			<div className="d-flex col-8  m-auto justify-content-center mb-5">
				<div>
					<h1
						className="text-white px-3 mb-4 text-center"
						style={{ fontSize: "3rem", fontWeight: "700", lineHeight: "1" }}
					>
						MEET THE <br /> METASAVIORS TEAM
					</h1>
					<p
						class="text-xl text-center text-white"
						style={{
							fontSize: "1.25rem",
							lineHeight: "1.75rem",
						}}
					>
						The MetaSaviors team is a collective of experts from different
						backgrounds ranging from marketing to blockchain development.
						<br />
						<br />
						The idea of disrupting the entertainment industry is what brought
						these individuals from all of the world together to join forces.
						<br />
						<br />
						We are proud to present leadership team of the MetaSaviors to you
						below.
					</p>
				</div>
			</div>
			<div className="d-flex flex-wrap px-3 justify-content-center">
				{teamMembers.map((TM) => (
					<Card
						name={TM.name}
						designation={TM.designation}
						profileImage={TM.profileImage}
					/>
				))}
			</div>
		</div>
	)
}

export default Team
