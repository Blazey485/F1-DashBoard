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
			setShowResult(json);

			console.log(setShowResult?.Leaderboard);
		} catch (err) {
			console.log(
				"error fetching check if the you ran `npm run dev` in both folders.",
				err
			);
		}
	};

	return (
		<div>
			<h2>Hello test</h2>
		</div>
	);
};

export default Results;
