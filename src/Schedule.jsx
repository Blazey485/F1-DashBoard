import { useState, useEffect } from "react";

const Scheduale = () => {
	const apiWeb = import.meta.env
		.VITE_REACT_SCHEDULE_API_WEBSITE;
	const apiKey = import.meta.env
		.VITE_REACT_SCHEDULE_API_KEY;

	const [Schedule, setSchedule] = useState([]);

	useEffect(() => {
		fetchScheduale();
	}, []);

	const fetchScheduale = async () => {
		try {
			console.log("Using API Key:", apiKey);

			const SchedualeData = await fetch(
				"https://f1dash.net/api/free/schedule",
				{ headers: { "X-API-Key": apiKey } }
			);

			if (!SchedualeData.ok) {
				const errorText = await SchedualeData.text();
				console.error(
					`Server error (${SchedualeData.status}):`,
					errorText
				);
				return;
			}

			const json = await SchedualeData.json();
			console.log("Success! Data received:", json);
			setSchedule(json);
		} catch (err) {
			console.error("Network or parsing error:", err);
		}
	};

	return (
		<div className="text-white">
			<h1>Scheduale</h1>
			<pre>{JSON.stringify(Schedule, null, 2)}</pre>
		</div>
	);
};

export default Scheduale;
