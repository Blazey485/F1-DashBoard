// import "./css/LeaderBoard"
import { useState, useEffect } from "react";

import Standing from "./Standings.jsx";
import Constructors from "./Constructors.jsx";

//! Btw this is for the driver constructor
const LeaderBoard = () => {
	const [masterLD, setMasterLD] = useState([]);

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

	return (
		<div className="bg-black-100 max-w-2xl">
			<div className="Drivers max-w-2xl">
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
