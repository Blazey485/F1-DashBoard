import { useEffect, useState } from "react";

const SchedualePopup = () => {
	const [data, setDate] = useState([]);
	useEffect(() => {
		fetchDates();
	}, []);

	const fetchDates = async () => {
		try {
			const Date = await fetch(
				"https://api.jolpi.ca/ergast/f1/2026.json"
			);
			if (!Date.ok) {
				console.error(
					`Server error (${Date.status}):`,
					await Date.text()
				);
				return;
			}

			const json = await Date.json();
			setDate(json.MRData.RaceTable.Races);
		} catch (err) {
			console.log("error fetching:", err);
		}
	};

	return (
		<div>
			<div>
				{data.map((info) => (
					<div key={info.round}>
						<h1>{info.Circuit.circuitName}</h1>
                  <br />
                  <div className="Practice">
                     <h3></h3>
                  </div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SchedualePopup;
