// biome-ignore assist/source/organizeImports: <explanation>
import { useState, useEffect } from "react";

const Constructors = () => {
	const [constructorsChamp, setConstructorsChamp] =
		useState([]);

	useEffect(() => {
		fetchConstructors();
	}, []);

	const fetchConstructors = async () => {
		try {
			const Constructors = await fetch(
				"https://api.jolpi.ca/ergast/f1/2026/constructorstandings/?format=json"
			);
			if (!Constructors.ok) {
				console.error(
					`Server error (${Constructors.status}):`,
					await Constructors.text()
				);
				return;
			}

			const json = await Constructors.json();
			console.log(json);
			setConstructorsChamp(
				json?.MRData?.StandingsTable?.StandingsLists[0]
					?.ConstructorStandings
			);

			console.log(setConstructorsChamp);
		} catch (err) {
			console.log("error fetching:", err);
		}
	};

	return (
		<div className="CONSTRUCTOR_PARENT">
			<div className="text-white w-99 border-black my-1.5 mx-2 rounded-lg max-w-md">
				{constructorsChamp.map((standings) => (
					<div key={standings.position}>
						<div className="bg-blue-600 p-1 border-2 text-white w-99 border-black my-1  rounded-lg shadow-md max-w-md">
							<div className="Driver flex justify-between items-center p-1">
								{""}
								<span className="font-black text-lg bg-yellow-400 text-black px-3 py-1.5 rounded-md">
									{" "}
									{standings.position}
								</span>

								<span className="flex gap-2 font-semibold bg-blue-500 w-20 justify-around p-1 rounded align-middle text-balance text-sm text-center">
									{" "}
									{standings.Constructor?.name}
								</span>

								<span className="text-sky-200 text-sm font-medium italic shrink-0 hidden sm:inline p-2">
									{" "}
									{standings.Constructor?.nationality}
								</span>

								<span className="font-bold bg-blue-400 rounded-2xl w-20 flex text-center justify-around p-2">
									{" "}
									{standings.wins} Wins
								</span>

								<span className="bg-blue-500 rounded w-20 flex text-center  p-2 justify-around font-extrabold">
									{" "}
									{standings.points} pts
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Constructors;
