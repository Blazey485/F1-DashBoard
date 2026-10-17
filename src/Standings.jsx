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

	return (
		<div>
			<div className="Driver">
				{/* team */}
				<p>{points}</p>

				{/* Driver num */}
				<p>{driverId}</p>

				{/* fullname / family name */}
				<p>{familyName}</p>

				{/* points */}
				<p>{points}</p>

				{/* position */}
				<p>{position}</p>

				{/* Wins */}
				<p>{wins}</p>
			</div>
		</div>
	);
};

export default Standings;
