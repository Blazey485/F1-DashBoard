import { useState, useEffect } from "react";

const Scheduale = () => {
	const [scheduale, setScheduale] = useState([]);

	useEffect(() => {
		fetchScheduale();
	}, []);

	const fetchScheduale = async () => {
		try {
			const Scheduale = await fetch(
				"https://api.jolpi.ca/ergast/f1/2026.json"
			);
			if (!Scheduale.ok) {
				console.error(
					`Server error (${Scheduale.status}):`,
					await Scheduale.text()
				);
				return;
			}
			const json = await Scheduale.json();
			console.log(json);
			setScheduale(json.MRData.RaceTable.Races);
		} catch (err) {
			console.log("error fetching:", err);
		}
	};

	//todo : Make so every GP is like clickable/expandable so once you click on it shows when the FP1, FP2, FP3, QUALI, GP. This will help enormous cus i want to have everything in 1 page, so we gotta clamp down bby 😘. and also i want to find a way to remove "expierd" gps. not sure how tf i can do that, will ask AI for help but wont copy paste. committing this todo to GH as well. written on line 28

	return (
		<div className="text-gray">
			<div className=" bg-amber-600">
				{scheduale.map((race) => (
					<p
						className=" "
						key={race.round}
					>
						{race.round}. {race.raceName} – {race.date}
					</p>
				))}
			</div>
		</div>
	);
};

export default Scheduale;
