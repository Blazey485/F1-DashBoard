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
		<div className="text-white">
			<div>
				{data.map((info) => (
					<div key={info.round}>
						<h1>
							{info.Circuit.circuitName}. Location:{" "}
							{/* {info.Location.locality},{" "}
							{info.Location.locality.country} */}
						</h1>
						<br />
						<div className="SCHEDULE_PARENT">
							<div className="Practice1">
								<h3>First Practice</h3>
								<span>{info.FirstPractice?.date}</span>
								<span>{info.FirstPractice?.time}</span>
							</div>
							{info.SecondPractice && (
								<div className="Practice2">
									<h3>Second Practice</h3>
									<span>{info.SecondPractice.date}</span>
									<span>{info.SecondPractice.time}</span>
								</div>
							)}
							{info.SprintQualifying && (
								<div className="SprintQualifying">
									<h3>Sprint Quali</h3>
									<span>{info.SprintQualifying.date}</span>
									<span>{info.SprintQualifying.time}</span>
								</div>
							)}
							{info.Sprint && (
								<div className="Sprint">
									<h3>Sprint Race</h3>
									<span>{info.Sprint.date}</span>
									<span>{info.Sprint.time}</span>
								</div>
							)}

							{info.ThirdPractice && (
								<div className="Practice3">
									<h3>Third Practice</h3>
									<span>{info.ThirdPractice.date}</span>
									<span>{info.ThirdPractice.time}</span>
								</div>
							)}
							<div className="Qualifying">
								<h3>Qualifying</h3>
								<span>{info.Qualifying?.date}</span>
								<span>{info.Qualifying?.time}</span>
							</div>

							<div className="GrandPrix">
								<h3>Grand Prix</h3>
								<span>{info.date}</span>
								<span>{info.time}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SchedualePopup;
