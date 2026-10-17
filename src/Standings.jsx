const Standings = (props) => {
	const { apiData } = props;

	//- for the positions
	const { position, points, wins, Driver, Constructors } =
		apiData || {};
	//- for driver info, like their info shi
	const {
		driverId,
		permanentNumber,
		familyName,
		nationality
	} = Driver || {};

	const { constructorId, name } = Constructors[0] || {};

	return (
		<div>
			<div className="Driver">
				{/* Team  */}
				<p>{name}</p>
				{/* fullname / family name */}
				<p>{familyName}</p>
				{/* Wins */}
				<p>{wins}</p>
				{/* points */}
				<p>{points}</p>
				{/* position */}
				<p>{position}</p>
			</div>
		</div>
	);
};

export default Standings;
