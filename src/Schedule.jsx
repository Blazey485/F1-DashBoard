import { useState, useEffect } from "react";
import SchedualePopup from "./SchedulePopup";
const Scheduale = () => {
	const [scheduale, setScheduale] = useState([]);
	const [currentSchedule, setCurrentSchedule] =
		useState(null);

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

			setScheduale(json.MRData.RaceTable.Races);
		} catch (err) {
			console.log("error fetching:", err);
		}
	};

	return (
		<div className="text-gray-300 w-80">
			<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
				{scheduale.map((race) => (
					<div key={race.round}>
						<button
							className="cursor-pointer w-full bg-slate-800/50 hover:bg-slate-800 transition-colors text-left border-b border-slate-800/80 last:border-b-0"
							onClick={() =>
								setCurrentSchedule(
									currentSchedule === race.round
										? null
										: race.round
								)
							}
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
						{currentSchedule === race.round && (
							<SchedualePopup info={race} />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Scheduale;
