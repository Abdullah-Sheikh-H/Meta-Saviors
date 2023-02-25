import theArtists from "../assets/image_16.png"

const TheArtist = () => {
	return (
		<div>
			<div className="" style={{ paddingBottom: "16px", paddingTop: "96px" }}>
				<div className="border-start border-2 border-danger col-12">
					<div
						className="dotted col-6"
						style={{ height: "3rem", borderTop: "1px dashed white" }}
					></div>
				</div>
			</div>
			<div className="px-5 mx-4 gap-5 justify-content-between">
				<div className="d-flex justify-content-center col-12">
					<h2
						className="color-theme-primary heading "
						style={{ fontSize: "48px" }}
					>
						THE ARTIST
					</h2>
				</div>
				<div className="d-flex justify-content-between">
					<div
						className="d-flex align-content-center justify-content-center flex-wrap"
						style={{ height: "882px", width: "408px" }}
					>
						<h4 className="font-arial fs-5 mb-4 lh-base text-white">
							The lead artist for the MetaSaviors collection is Genís Salvadó
							Esteves. Genís has been creating sci-fi / Metaverse genre 3D art
							before it got heavily popularized in the NFT space and the recent
							name change of Facebook. He is highly skilled in creating both
							characters and environments in Blender. In addition, he has been
							involved in numerous successful sold out NFT project including
							cybercrew.nft. Genís has done big collaborations with music labels
							in the past.
						</h4>
						<div className="py-4">
							<button className="px-2 py-2 primary-btn border-0 fw-semibold fs-5 rounded">
								GENIS ON INSTAGRAM
							</button>
						</div>
					</div>
					<img src={theArtists} height="882px" width="408px" />{" "}
				</div>
			</div>
		</div>
	)
}

export default TheArtist
