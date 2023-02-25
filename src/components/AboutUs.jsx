import abountUsImg from "../assets/image_17.png"

const AboutUs = () => {
	return (
		<div className="py-96">
			<div className="px-5 mx-4 d-flex gap-5 justify-content-between">
				<div className="text-white">
					<h1 className="heading pb-4">
						ABOUT <span className="color-theme-primary">US</span>
					</h1>
					<h5 className="font-arial fs-5 mb-4 lh-base">
						Metasaviors is a collection of 8004 soldiers of the Metaverse. There
						are 4 factions of heroes, which are stored as ERC-721 tokens on the
						ethereum blockchain ready to save the metaverse.
					</h5>
					<h5 className="font-arial fs-5 mb-4 lh-base">
						After a major economic crisis, the richest part of the population
						has transferred their consciousness into the metaverse, but a faulty
						program corrupted the upload process causing some humans to turn
						into mindless machines with only one goal: to spread chaos in the
						metaverse. We call these evil beings the Deviants. Fortunately, the
						creators of The Metaverse created a peacekeeping program called the
						Metasaviors. It’s time to find out if you are one of the 8004
						soldiers that have been chosen to save the metaverse.
					</h5>
					<h5 className="font-arial fs-5 mb-4 lh-base">
						After a major economic crisis, the richest part of the population
						has transferred their consciousness into the metaverse, but a faulty
						program corrupted the upload process causing some humans to turn
						into mindless machines with only one goal: to spread chaos in the
						metaverse. We call these evil beings the Deviants. Fortunately, the
						creators of The Metaverse created a peacekeeping program called the
						Metasaviors. It’s time to find out if you are one of the 8004
						soldiers that have been chosen to save the metaverse.
					</h5>
				</div>
				<div>
					<img src={abountUsImg} height="461px" width="408" />
				</div>
			</div>
		</div>
	)
}

export default AboutUs
