import { useState } from "react";
import NavBar from "./NavBar";

const ButtonPop = () => {
	const [toggle, setToggle] = useState(null);
	return (
		<div className="text-white">
			<button
				className="p-10 bg-amber-300 text-black rounded-2xl"
				onClick={() => setToggle(!toggle)}
			>
				Menu:{" "}
			</button>

			{toggle && <NavBar />}
		</div>
	);
};

export default ButtonPop;
