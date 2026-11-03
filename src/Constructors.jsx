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
			console.log(json)
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
				<h1 className="text-white">Constructor champion ship leader board.</h1>
			</div>
		</div>
	);
};

export default Constructors;
