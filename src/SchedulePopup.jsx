import { useEffect, useState } from "react";

const SchedualePopup = (props) => {
	const { info } = props;

	return (
		<div className="text-black flex justify-center items-center">
			{/* <h2 className="justify-center items-center text-amber-300">
				BTW THE TIME IS UTC +0 MEANING THE TIME IS 2 HOURS
				BEHIND EU-TIME
			</h2> */}

			<div>
				<h1 className="bg-purple-600 p-2 ">
					{info.Circuit.circuitName}. <br></br>
					Location: {""}
					{info.Circuit.Location.locality},
					{info.Circuit.Location.country}
					{""}
				</h1>

				<div className="SCHEDULE_PARENT flex flex-col items-center justify-center">
					<div className="Practice1 m-3.5 bg-amber-200 ">
						<h3>First Practice</h3>
						<span>Date: {info.FirstPractice?.date}</span>
						<br />

						<span>Time: {info.FirstPractice?.time}</span>
					</div>
					{info.SecondPractice && (
						<div className="Practice2 m-3.5 bg-amber-300">
							<h3>Second Practice</h3>
							<span>{info.SecondPractice.date}</span>
							<br />
							<span>{info.SecondPractice.time}</span>
						</div>
					)}
					{info.SprintQualifying && (
						<div className="SprintQualifying m-3.5 bg-amber-200">
							<h3>Sprint Quali</h3>
							<span>{info.SprintQualifying.date}</span>
							<br />

							<span>{info.SprintQualifying.time}</span>
						</div>
					)}
					{info.Sprint && (
						<div className="Sprint m-3.5 bg-amber-400">
							<h3>Sprint Race</h3>
							<span>{info.Sprint.date}</span>
							<br />

							<span>{info.Sprint.time}</span>
						</div>
					)}

					{info.ThirdPractice && (
						<div className="Practice3 m-3.5 bg-amber-300">
							<h3>Third Practice</h3>
							<span>{info.ThirdPractice.date}</span>
							<br />

							<span>{info.ThirdPractice.time}</span>
						</div>
					)}
					<div className="Qualifying m-3.5 bg-amber-200">
						<h3>Qualifying</h3>
						<span>{info.Qualifying?.date}</span>
						<br />

						<span>{info.Qualifying?.time}</span>
					</div>

					<div className="GrandPrix m-3.5 bg-amber-200">
						<h3>Grand Prix</h3>
						<span>{info.date}</span>
						<br />

						<span>{info.time}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchedualePopup;
