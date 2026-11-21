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
		<div className="text-zinc-300">
			<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col max-w-md p-1 ">
				{scheduale.map((race) => (
					<div key={race.round}>
						<button
							className="cursor-pointer w-full bg-zinc-800/50 hover:bg-zinc-700 transition-colors text-left border-b border-zinc-800 size-15 border-2 rounded "
							onClick={() =>
								setCurrentSchedule(
									currentSchedule === race.round
										? null
										: race.round
								)
							}
						>
							<p className="my-2 px-3 py-1 flex items-center gap-4">
								<span className="bg-red-500/15 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-xs font-semibold">
									Race{race.round}
								</span>
								<span className="text-zinc-100 font-medium flex-1">
									{race.raceName}
								</span>
								<span className="text-zinc-400 text-sm">
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
