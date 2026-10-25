// import "./css/LeaderBoard"
import { useState, useEffect } from "react";

import Standing from "./Standings.jsx";

//! Btw this is for the driver constructor
const LeaderBoard = () => {
	const [masterLD, setMasterLD] = useState([]);
	const [Driver, setDriver] = useState();
	const [Constructor, setConstructor] = useState();

	useEffect(() => {
		fetchLeader();
	}, []);

	const fetchLeader = async () => {
		const data = await fetch(
			"https://api.jolpi.ca/ergast/f1/2026/driverstandings/?format=json"
		);
		const json = await data.json();

		setMasterLD(
			json?.MRData?.StandingsTable?.StandingsLists[0]
				?.DriverStandings
		);
	};

	//todo : Make so every GP is like clickable/expandable so once you click on it shows when the FP1, FP2, FP3, QUALI, GP. This will help enormous cus i want to have everything in 1 page, so we gotta clamp down bby 😘. and also i want to find a way to remove "expierd" gps. not sure how tf i can do that, will ask AI for help but wont copy paste. committing this todo to GH as well. written on line 28

	return (
		<div className="bg-black-100">
			<div className="Drivers">
				{masterLD.map((Champions) => (
					<Standing
						key={Champions.position}
						apiData={Champions}
					/>
				))}
			</div>
		</div>
	);
};

export default LeaderBoard;
