import { useState, useEffect } from "react";
import SchedualePopup from "./SchedulePopup";
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
		<div className="text-gray-300 w-80">
			<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
				{scheduale.map((race) => (
					<button
						className="cursor-pointer w-full bg-slate-800/50 hover:bg-slate-800 transition-colors text-left border-b border-slate-800/80 last:border-b-0"
						key={race.round}
					>
						<p className="my-2 px-3 py-1 flex items-center gap-4">
							<span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded text-xs font-semibold">
								Race{race.round}
							</span>
							<span className="text-slate-100 font-medium flex-1">
								{race.raceName}
							</span>
							<span className="text-slate-400 text-sm">
								{race.date}
							</span>
						</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default Scheduale;
