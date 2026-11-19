import { useState, useEffect } from "react";

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

	return (
		<div>
			<div>
				<h2>
					Lap number:{" "}
					{showResult?.LapCount?.CurrentLap ?? "—"}
				</h2>
				{racingNumbers.map((racingNumber) => {
					const driver = lines[racingNumber] ?? {};

					return (
						<div key={racingNumber}>
							<span>{driver.Position}</span>
							<span>
								{driver.Tla ??
									driver.FullName ??
									racingNumber}
							</span>
							<span>{driver.GapToLeader?.Value ?? ""}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Results;
