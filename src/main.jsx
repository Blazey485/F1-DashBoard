import { createRoot } from "react-dom/client";

import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import "./main.css";
import Scheduale from "./pages/Schedule/Schedule";
import Constructors from "./pages/LeaderBoard/Constructors";
import NavBar from "./components/NavBar";
import MenuBtn from "./components/MenuBtn";
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
