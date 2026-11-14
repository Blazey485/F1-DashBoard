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
		<div className="">
			<div className="Drivers max-w-2xl bg-blue-900 p-2">
				{masterLD.map((Champions) => (
					<Standing
						key={Champions.position}
						apiData={Champions}
					/>
				))}
				<Constructors />
			</div>
		</div>
	);
};

export default LeaderBoard;
