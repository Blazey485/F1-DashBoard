const NavBar = () => {
	return (
		<div className="text-black bg-purple-50 w-30 flex flex-col gap-3 max-h-max ">
			<div className="STATIC">
				<h2>Hello Navbar Static</h2>
			</div>

			{/*  */}

			<div className="LIVE">
				<h2>hello navbar live</h2>
			</div>
		</div>
	);
};

export default NavBar;
