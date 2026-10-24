import { createRoot } from "react-dom/client";

import LeaderBoard from "./LeaderBoard";
import "./css/LeaderBoard.css";
import Scheduale from "./Schedule";
const RootApp = () => {
	return (
		<div
			className="
			flex
			bg-black"
		>
			<LeaderBoard></LeaderBoard>
			<Scheduale> </Scheduale>
		</div>
	);
};

const rootLayout = createRoot(
	document.getElementById("root")
);

rootLayout.render(<RootApp></RootApp>);
