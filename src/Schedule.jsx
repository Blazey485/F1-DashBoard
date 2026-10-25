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
