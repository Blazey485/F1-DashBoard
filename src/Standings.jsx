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
		<div className="bg-blue-600 p-1 text-white w-99 border-2 border-black my-1.5 mx-2 rounded-lg shadow-md">
			<div className="Driver flex justify-between items-center">
				{/* Position */}
				<span className="font-black text-lg bg-yellow-400 text-black px-2.5 py-1 rounded-md">
					{position}
				</span>

				{/* Name */}
				<div className="flex gap-2 font-semibold">
					<span>{familyName}</span>
				</div>

				{/* Team */}
				<span className="text-sky-200 text-sm font-medium italic">
					{name}
				</span>

				{/* Wins */}
				<span className="bg-emerald-500/80 text-emerald-50 px-2 py-0.5 rounded text-sm font-medium">
					Wins: {wins}
				</span>

				{/* Points */}
				<span className="bg-purple-600 text-purple-100 px-2.5 py-0.5 rounded-full font-bold text-sm">
					{points} pts
				</span>
			</div>
		</div>
	);
};

export default Standings;
