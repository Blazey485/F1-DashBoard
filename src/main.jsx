import { createRoot } from "react-dom/client";

import LeaderBoard from "./LeaderBoard";
import "./css/LeaderBoard.css";
import Scheduale from "./Schedule";
import Constructors from "./Constructors";
import NavBar from "./NavBar";
import MenuBtn from "./MenuBtn";
const RootApp = () => {
	return (
		<div className="flex bg-black">
			<MenuBtn></MenuBtn>
			{/* <LeaderBoard></LeaderBoard>

			<Scheduale> </Scheduale> */}
		</div>
	);
};

const rootLayout = createRoot(
	document.getElementById("root")
);

rootLayout.render(<RootApp></RootApp>);
