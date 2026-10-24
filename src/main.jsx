import { createRoot } from "react-dom/client";

import LeaderBoard from "./LeaderBoard";
import "./css/LeaderBoard.css";

const RootApp = () => {
	const apiKey = import.meta.env.REACT_SCHEDULE_API_KEY;

	console.log(apiKey);
	return (
		<div>
			<LeaderBoard></LeaderBoard>
		</div>
	);
};

const rootLayout = createRoot(
	document.getElementById("root")
);

rootLayout.render(<RootApp></RootApp>);
