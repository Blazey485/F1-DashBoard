import { useState } from "react";
import { Link } from "react-router";
import NavBar from "./NavBar";

const ButtonPop = () => {
	const [toggle, setToggle] = useState(false);
	const closeMenu = () => setToggle(false);
	return (
		<div className="text-white">
			<button
				className="text-white bg-red-600 max-w-90 flex flex-col gap-3 max-h-max p-6 rounded 
				cursor-pointer
				"
				onClick={() => setToggle(!toggle)}
				style={{ width: toggle ? "400px" : "200px" }}
			>
				Menu:{" "}
			</button>

			{toggle && <NavBar onNavigate={closeMenu} />}
		</div>
	);
};

export default ButtonPop;
