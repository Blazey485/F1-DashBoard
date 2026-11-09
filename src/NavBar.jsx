import { useState } from "react";

const NavBar = () => {
	return (
		<div className="text-white bg-purple-800 max-w-90 flex flex-col gap-3 max-h-max p-6">
			{/*  */}

			<div className="STATIC justify-center">
				<h2 className="flex justify-around">
					Hello Navbar Static
				</h2>
				<hr />
				<button className="bg-pink-500 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  delay-200  transform scale-100 ">
					Drivers Standings && Constructor Standings
				</button>

				<button className="bg-pink-500 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  delay-200  transform scale-100 ">
					Upcoming Sessions / Schedules
				</button>
			</div>

			{/*  */}
			<hr className="h-2 border-2" />

			<div className="LIVE">
				<h2 className="flex justify-around my-2">
					hello navbar live
				</h2>
				<hr />

				<button className="bg-pink-500 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  delay-200  transform scale-100 ">
					Radio Message
				</button>
				<button className="bg-pink-500 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  delay-200  transform scale-100 ">
					Race Control
				</button>
				<button className="bg-pink-500 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  delay-200  transform scale-100 ">
					Session && Lap Counts
				</button>

				<button className="bg-pink-500 rounded-md cursor-pointer p-1 py-7 my-6 w-full hover:scale-105  delay-200  transform scale-100 ">
					Race Leader Board
				</button>
			</div>
		</div>
	);
};

export default NavBar;
