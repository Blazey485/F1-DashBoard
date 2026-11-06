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
			<div>
				<h1 className="text-white">
					Constructor champion ship leader board.
				</h1>

				<div className="text-white w-99 border-2 border-black my-1.5 mx-2 rounded-lg max-w-md">
					{constructorsChamp.map((standings) => (
						<div key={standings.position}>
							<div className="bg-blue-600 p-1 text-white w-99 border-2 border-black my-1.5 mx-2 rounded-lg shadow-md max-w-md">
								<div className="Driver flex justify-between items-center">
									<span className="font-black text-lg bg-purple-500 px-2.5 rounded-md">
										{" "}
										{standings.position}
									</span>

									<span className="flex gap-2 font-semibold">
										{" "}
										{standings.Constructor?.name}
									</span>

									<span>
										Name:{" "}
										{standings.Constructor?.nationality}
									</span>

									<span> wins :{standings.wins}</span>

									<span> Points :{standings.points}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Constructors;
