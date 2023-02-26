const Card = ({ name, designation, profileImage }) => {
	return (
		<div className="px-3 mb-4">
			<img src={profileImage} height="230px" width="204px" />
			<h5 className="text-uppercase font-semibold text-white py-1 mt-2 mb-0">
				{name}
			</h5>
			<div className="text-secondary">{designation}</div>
		</div>
	)
}
export default Card
