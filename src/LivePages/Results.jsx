import { useState, useEffect } from "react";

const valueOrDash = (value) =>
	value === null || value === undefined || value === ""
		? "—"
		: value;

const getSessionLabel = (session) => {
	const { Name, Type } = session ?? {};

	if (Name) return Name;
	return valueOrDash(Type);
};

const getSessionCode = (label) => {
	const text = label.toLowerCase();

	if (
		text.includes("sprint shootout") ||
		text.includes("sprint qualifying")
	)
		return "SQ";
	if (text.includes("sprint")) return "SPR";
	if (text.includes("qualifying")) return "QUALI";
	if (text.includes("race")) return "RACE";

	const practice = text.match(/practice\s*(\d)/);
	if (practice) return `FP${practice[1]}`;

	const namedPractice = text.match(
		/(first|second|third)\s+practice/
	);
	const practiceWords = {
		first: "1",
		second: "2",
		third: "3"
	};
	if (namedPractice)
		return `FP${practiceWords[namedPractice[1]]}`;

	return null;
};

const Results = () => {
	const [showResult, setShowResult] = useState(null);

	useEffect(() => {
		DataResult();
	}, []);

	const DataResult = async () => {
		try {
			const RaceResults = await fetch(
				"http://localhost:3000/api/leaderboard"
			);
			if (!RaceResults.ok) {
				console.error(
					`Server error (${RaceResults.status}):`,
					await RaceResults.text()
				);
				return;
			}

			const json = await RaceResults.json();
			console.log("Leaderboard response:", json);
			setShowResult(json);
		} catch (err) {
			console.log(
				"error fetching check if the you ran `npm run dev` in both folders.",
				err
			);
		}
	};

	const racingNumbers = showResult?.Leaderboard ?? [];
	const lines = showResult?.Lines ?? {};
	const sessionInfo = showResult?.Session ?? {};
	const sessionLabel = getSessionLabel(sessionInfo);
	const sessionCode = getSessionCode(sessionLabel);

	return (
		<main className="min-h-screen bg-black px-4 py-8 text-white">
			<div className="mx-auto max-w-4xl">
				<header className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-zinc-800 pb-4">
					<div>
						<p className="text-xs font-semibold tracking-[0.2em] text-red-500 uppercase">
							Live Timing
						</p>
						<h1 className="mt-1 text-2xl font-bold sm:text-3xl">
							Live Results
						</h1>
					</div>
					<div className="flex flex-wrap items-stretch gap-3">
						<div className="flex flex-col justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2">
							<span className="block text-xs text-zinc-400">
								Session
							</span>
							<div className="mt-0.5 flex items-center gap-2">
								<span className="text-lg font-semibold">
									{sessionLabel}
								</span>
								{sessionCode ? (
									<span className="rounded bg-red-500/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-red-400">
										{sessionCode}
									</span>
								) : null}
							</div>
							<span className="mt-0.5 block text-xs text-zinc-500">
								{valueOrDash(sessionInfo.Meeting?.Name)}
							</span>
						</div>
						<div className="flex flex-col justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-right">
							<span className="block text-xs text-zinc-400">
								Current lap
							</span>
							<span className="text-lg font-semibold tabular-nums">
								{valueOrDash(
									showResult?.LapCount?.CurrentLap
								)}
							</span>
						</div>
					</div>
				</header>

				<div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg">
					<table className="w-full text-left text-sm">
						<thead className="bg-zinc-900 text-xs tracking-wider text-zinc-400 uppercase">
							<tr>
								<th
									scope="col"
									className="w-16 px-4 py-3"
								>
									Pos
								</th>
								<th
									scope="col"
									className="px-4 py-3"
								>
									Driver Name
								</th>
								<th
									scope="col"
									className="px-4 py-3 text-right"
								>
									Best lap
								</th>
								<th
									scope="col"
									className="px-4 py-3 text-right"
								>
									Gap
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-zinc-800">
							{racingNumbers.length === 0 ? (
								<tr>
									<td
										colSpan={4}
										className="px-4 py-10 text-center text-zinc-500"
									>
										Waiting for timing data…
									</td>
								</tr>
							) : (
								racingNumbers.map((racingNumber) => {
									const driver = lines[racingNumber] ?? {};
									const fullName =
										driver.FullName ??
										driver.BroadcastName ??
										driver.Tla ??
										racingNumber;

									return (
										<tr
											key={racingNumber}
											className="transition-colors hover:bg-zinc-900/70"
										>
											<td className="px-4 py-3">
												<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 font-bold tabular-nums">
													{valueOrDash(driver.Position)}
												</span>
											</td>
											<td className="px-4 py-3">
												<div className="flex items-center gap-3">
													{driver.TeamColour ? (
														<span
															className="h-8 w-1 shrink-0 rounded-full"
															style={{
																backgroundColor: `#${driver.TeamColour}`
															}}
														/>
													) : null}
													<div className="min-w-0">
														<div className="flex flex-wrap items-center gap-2">
															<span className="font-semibold text-white">
																{fullName}
															</span>
															{driver.Tla ? (
																<span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-zinc-300">
																	{driver.Tla}
																</span>
															) : null}
														</div>
														{driver.TeamName ? (
															<span className="text-xs text-zinc-500">
																{driver.TeamName}
															</span>
														) : null}
													</div>
												</div>
											</td>
											<td
												className={`px-4 py-3 text-right font-mono tabular-nums ${
													driver.BestLapTime?.OverallFastest
														? "font-bold text-purple-400"
														: "text-zinc-200"
												}`}
											>
												{valueOrDash(
													driver.BestLapTime?.Value
												)}
											</td>
											<td className="px-4 py-3 text-right font-mono tabular-nums text-zinc-300">
												{valueOrDash(
													driver.GapToLeader?.Value
												)}
											</td>
										</tr>
									);
								})
							)}
						</tbody>
					</table>
				</div>

				<p className="mt-4 text-center text-xs text-zinc-600">
					Best lap and gap to leader update live.
				</p>
			</div>
		</main>
	);
};

export default Results;
