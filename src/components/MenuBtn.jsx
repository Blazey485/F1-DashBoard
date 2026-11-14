import { useState } from "react";
import NavBar from "./NavBar";

const ButtonPop = () => {
	const [toggle, setToggle] = useState(null);
	return (
		<div className="text-white">
			<button
				className="text-white bg-purple-800 max-w-90 flex flex-col gap-3 max-h-max p-6 rounded "
				onClick={() => setToggle(!toggle)}
				style={{ width: toggle ? "400px" : "200px" }}
			>
				Menu:{" "}
			</button>

			{toggle && <NavBar />}
		</div>
	);
};

export default ButtonPop;
