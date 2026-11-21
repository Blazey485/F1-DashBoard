import { useState, useRef, useEffect } from "react";
import MenuBtn from "./MenuBtn";

import { Link } from "react-router";

const NavBar = ({ onNavigate }) => {
	const [activeSection, setActiveSection] =
		useState("static");

	return (
		<>
			<div className="text-white bg-zinc-900 max-w-90 flex flex-col gap-3 max-h-max p-6 rounded">
				{/*  */}

				<div className="STATIC justify-center">
					<h2 className="flex justify-around">
						Hello Navbar Static
					</h2>
					<hr />
					<Link
						to="/LeaderBoard"
						onClick={onNavigate}
					>
						<button className="bg-red-600 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  duration-75 active:scale-90  transform scale-100 ">
							Drivers Standings && Constructor Standings
						</button>
					</Link>

					<Link
						to="/Schedule"
						onClick={onNavigate}
					>
						<button className="bg-red-600 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  duration-75 active:scale-90  transform scale-100 ">
							{" "}
							Upcoming Sessions / Schedules
						</button>
					</Link>
				</div>

				{/*  */}
				<hr className="h-2 border-2" />

				<div className="LIVE">
					<h2 className="flex justify-around my-2">
						hello navbar live
					</h2>
					<hr />
					<Link
						to="/Session"
						onClick={onNavigate}
					>
						<button className="bg-red-600 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  duration-75 active:scale-90  transform scale-100 ">
							{" "}
							Session && Lap Counts && Race Timing
						</button>
					</Link>
					<button className="bg-red-600 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  duration-75 active:scale-90  transform scale-100 ">
						{" "}
						Race Control
					</button>
				</div>
			</div>
		</>
	);
};

export default NavBar;
