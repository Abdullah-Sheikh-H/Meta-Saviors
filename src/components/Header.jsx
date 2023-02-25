import metaverseImg from "../assets/image_13.png"
import headerdImg from "../assets/image_14.png"
import scrollImg from "../assets/image_0.png"

const Header = () => {
	return (
		<div className="py-96">
			<div className="px-5 mx-4">
				<div className="d-flex justify-content-between">
					<div className="d-grid">
						<img src={metaverseImg} width="424px" height="220px" />
						<div>
							<button className="px-4 py-3 primary-btn border-0 rounded">
								JOIN OUR DISCORD
							</button>
						</div>
					</div>
					<div>
						<img src={headerdImg} width="424px" height="334px" />
					</div>
				</div>
				<div className="d-flex justify-content-center animate-bounce ">
					<img src={scrollImg} width="24px" height="114px" />
				</div>
			</div>
		</div>
	)
}

export default Header
