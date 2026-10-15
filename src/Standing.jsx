const standings = (props) => {
	const apiData = props;

	//- for the positions
	const { position, points, wins, Driver } =
		apiData?.StandingsTable?.DriverStandings;

	//- for driver info, like their info shi
	const {
		driverId,
		permanentNumber,
		familyName,
		nationality
	} = apiData?.StandingsTable?.DriverStandings?.Driver;

	return (
		<div>
			<div className="Driver">
				{/* team */}
				<p></p>

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

export default standings;
