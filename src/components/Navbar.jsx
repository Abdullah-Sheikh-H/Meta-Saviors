import logo from "../assets/image_18.svg"

const Navbar = () => {
	return (
		<div className="col-12">
			<nav className="shadow-lg" style={{ background: "#0000007a" }}>
				<div
					className="d-flex items-center justify-content-between py-2"
					style={{ paddingInline: "112px" }}
				>
					<img src={logo} />

					<div className="row align-items-center">
						<a className="rounded text-white p-2 col-auto header-links font-poppins mx-2 font-semibold">
							ABOUT US
						</a>
						<a className="rounded text-white p-2 col-auto header-links font-poppins mx-2 font-semibold">
							TEAM
						</a>
						<a className="rounded text-white p-2 col-auto header-links font-poppins mx-2 font-semibold">
							ROADMAP
						</a>
						<a className="rounded text-white p-2 col-auto header-links font-poppins mx-2 font-semibold">
							FAQ
						</a>
						<button className="rounded py-2 border-0 col-auto font-poppins font-semibold font-14 primary-btn mx-2 lh-sm px-3">
							Connect MetaMask
						</button>
					</div>
				</div>
			</nav>
		</div>
	)
}
export default Navbar
