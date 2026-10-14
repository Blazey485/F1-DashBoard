// import "./css/LeaderBoard"
/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";

const LeaderBoard = () => {
	const [masterLD, setMasterLD] = useState();

	return (
		<div className="LeaderBoard">
			<h1>Leader Board</h1>
			<div className="Drivers">
				<h3>10/43</h3>
				<h4> driver</h4>
			</div>
		</div>
	);
};

export default LeaderBoard;
