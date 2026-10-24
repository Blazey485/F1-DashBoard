import { createRoot } from "react-dom/client";

import LeaderBoard from "./LeaderBoard";
import "./css/LeaderBoard.css";
import Scheduale from "./Sche"
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
