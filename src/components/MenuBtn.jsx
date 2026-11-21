import { useState } from "react";
import { Link } from "react-router";
import NavBar from "./NavBar";

const ButtonPop = () => {
	const [toggle, setToggle] = useState(null);
	return (
		<div className="text-white">
			<Link to="/">
				<button
					className="text-white bg-red-600 max-w-90 flex flex-col gap-3 max-h-max p-6 rounded 
				cursor-pointer
				"
					onClick={() => setToggle(!toggle)}
					style={{ width: toggle ? "400px" : "200px" }}
				>
					Menu:{" "}
				</button>
			</Link>
			{toggle && <NavBar />}
		</div>
	);
};

export default ButtonPop;
