const Roadmap = () => {
	const data = [
		{
			name: "MetaSaviors Unite!",
			description:
				"It is time to disrupt the entertainment industry. <br/> In the past century, we have seen many different mediums of entertainment evolve: comic books, radio, tv, and mobile devices. Right now you are entering a new era - the era of the Metaverse. This new medium of entertainment unleashes new types of innovative experiences. <br/> We will create a Metaverse-Native entertainment franchise to push the boundaries of the entertainment industry. Our team of 3D artists, VR specialists, designers, and storytellers are working together to create The MetaSaviors: a collection of 8004 soldiers ready to save the Metaverse. Our goal is to disrupt an industry together with our community.",
		},
		{
			name: "Deviants Drop",
			description:
				"Every holder of the MetaSaviors will receive an additional free NFT! <br/> No superhero storyline is complete without a sworn enemy. In the MetaSaviors storyline, the Metaverse is under attack by the evil “Deviants”. These mindless creatures have only one goal: to spread fear and chaos throughout the Metaverse. <br/> In this phase of our roadmap, our team of 3D artists, VR specialists, designers, and storytellers will create the “Deviants” collection. As a MetaSaviors holder, you will be able to stake your NFT on our members-only portal. As a reward, you will receive a free Deviant NFT. Will you join the good or the evil side in this epic Metaverse battle?",
		},

		{
			name: "The Metaverse experience",
			description:
				"Together we will bring a new type of experience into the Metaverse. <br/> We have established a strategic partnership with one of the largest landowners in Decentraland. Together we will create the MetaSaviors experience in the Metaverse. We have chosen to build in Decentraland, because this is one of the fastest growing Metaverses out there with a great ecosystem and a lot more growth potential. Building on top of an existing ecosystem enables us to deliver the MetaSaviors experience a lot faster to our community. <br/> Now you are probably wondering what this experience will be? Is it a game? Is it just a building on a piece of land? No, it is none of that. The Metaverse is enabling new types of immersive experiences. We want to be pioneering these new experiences with our community members. Curious how this will all look? We will soon share some previews.",
		},
		{
			name: "Exclusive holder perks",
			description:
				"Our loyal holders will get access to exclusive perks, events and merchandise. <br/> We take great care in building the strongest possible community around the MetaSaviors project. Part of our roadmap is provide exclusive member perks to our holders. These perks include physical merchandize, such as 3D-printed models of their NFT's and also exclusive members-only events in the physical world as well as in the Metaverse. <br/> We are also working on a special piece of tech that our holders can use to make their NFT's come alive in the real world. It is one thing to look at the art on Opensea, but it is even better to see the art in real life so that you can be amazed by the level of detail, the anatomy of the models and the textures.",
		},
		{
			name: "Community DAO",
			description:
				"Let's expand the franchise together. <br/>It takes time to build a successful entertainment franchise. Star Wars, The Avengers, and Pokemon took a long time to develop into the household names that they are today. Our team, on the other hand, is committed to the long haul. Our goal is to upend the entertainment sector, pave the path for new unique experiences, and establish ourselves as a MetaVerse pioneer. Over time, we'll expand the series with additional characters, planets, storylines, and games. But, in order to provide you with the best possible experience, we'll take it one step at a time. <br/>As a community member, you will be able to take part in shaping The MetaSaviors franchise. MetaSaviors NFT holders get to vote on important matters related to the roadmap of this project. Together we will write Metaverse history. Our holders will also be rewarded with a percentage of the franchise’s profits.",
		},
	]

	return (
		<div>
			<div className="position-relative d-grid justify-content-center flex-wrap">
				<h1
					className=""
					style={{
						fontSize: "6rem",
						fontWeight: "500",
						letterSpacing: ".1em",
						color: "#0B1644",
						lineHeight: "85%",
					}}
				>
					ROADMAP
				</h1>
				<h1
					className="text-white align-text-top text-end position-absolute bottom-0 start-50 translate-middle-x"
					style={{ fontSize: "3rem", lineHeight: "1", fontWeight: "700" }}
				>
					ROADMAP
				</h1>
			</div>
			<div className="d-flex items-center justify-content-center py-96">
				<div className="d-flex flex-column">
					<div className="" style={{ paddingInline: "96px" }}>
						<div className="col-12 position-relative">
							<div
								className="position-absolute top-0 start-0 translate-middle-x ps-0 ms-4 my-2"
								style={{
									borderRight: "2px dotted white",
									height: "100%",
									zIndex: "-1",
								}}
							></div>
							<ul className="ps-0">
								{data.map((d, i) => (
									<li
										key={i}
										className="mb-2"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										<div class="d-flex align-items-center mb-1">
											<div
												class="bg-secondary border-0 rounded-circle d-flex justify-content-center align-items-center"
												style={{ width: "3rem", height: "3rem" }}
											>
												<div
													class="bg-white border-0 rounded-circle d-flex justify-content-center align-items-center"
													style={{ width: "2rem", height: "2rem" }}
												>
													<div
														class="bg-theme-primary border-0 rounded-circle d-flex justify-content-center align-items-center"
														style={{ width: "1rem", height: "1rem" }}
													></div>
												</div>
											</div>
											<div class="d-flex ms-3 fw-bold">
												<h2 class="color-theme-primary fs-1 fw-bold">
													0{i + 1}
												</h2>
											</div>
										</div>
										<div
											class="text-4xl text-white fs-1 font-poppins pt-1 pb-3 fw-bold "
											style={{ marginLeft: "64px" }}
										>
											{d.name}
										</div>
										<div class="ml-16">
											<p
												class="text-lg text-white "
												style={{ marginLeft: "64px" }}
											>
												{d.description.split("<br/>").map((d, ii) => (
													<span key={ii}>
														{d}
														<br />
														<br />
													</span>
												))}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Roadmap
