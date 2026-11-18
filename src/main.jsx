import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet
} from "react-router";

import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import "./css/main.css";
import Scheduale from "./pages/Schedule/Schedule";
import Constructors from "./pages/LeaderBoard/Constructors";
import NavBar from "./components/NavBar";
import MenuBtn from "./components/MenuBtn";
import { Children } from "react";
const RootApp = () => {
	return (
		<div className="flex bg-black">
			<MenuBtn></MenuBtn>
			<Outlet></Outlet>
		</div>
	);
};

const routing = createBrowserRouter([
	{
		path: "/",
		element: <RootApp></RootApp>,

		children: [
			{
				path: "/Schedule",
				element: <Scheduale> </Scheduale>
			},
			{
				path: "/LeaderBoard",
				element: <LeaderBoard></LeaderBoard>
			}
		]
	}
]);

const rootLayout = createRoot(
	document.getElementById("root")
);

rootLayout.render(<RouterProvider router={routing} />);
