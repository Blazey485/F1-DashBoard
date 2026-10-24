import { createRoot } from "react-dom/client";

import LeaderBoard from "./LeaderBoard";
import "./css/LeaderBoard.css";
const apiKey = import.meta.env.VITE_REACT_SCHEDULE_API_KEY;

const RootApp = () => {
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
