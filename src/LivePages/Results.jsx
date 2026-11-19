import { useState, useEffect } from "react";

const Results = () => {
	const [showResult, setShowResult] = useState([]);

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
			console.log(
				"Leaderboard response:",
				json?.Leaderboard
			);
			setShowResult(json?.Leaderboard);

			console.log(setShowResult);
		} catch (err) {
			console.log(
				"error fetching check if the you ran `npm run dev` in both folders.",
				err
			);
		}
	};

	return (
		<div>
			<h2>Results</h2>
		</div>
	);
};

export default Results;
