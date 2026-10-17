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

	console.log("masterset");
	console.log(setMasterLD);

	console.log("masternormal");
	console.log(masterLD);
	return (
		<div className="LeaderBoard">
			<h1>Leader Board</h1>
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
