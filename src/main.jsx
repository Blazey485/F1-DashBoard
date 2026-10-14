import { createRoot } from "react-dom/client";
// import "./css/main.css";
import LeaderBoard from "./LeaderBoard.jsx";

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
