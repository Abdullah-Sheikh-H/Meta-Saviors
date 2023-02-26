const Card = ({ name, designation, profileImage, className }) => {
	return (
		<div className={`px-3 mb-4 ${className}`}>
			<img src={profileImage} width="100%" />
			<h5 className="text-uppercase font-semibold text-white py-1 mt-2 mb-0">
				{name}
			</h5>
			<div className="text-secondary">{designation}</div>
		</div>
	)
}
export default Card
