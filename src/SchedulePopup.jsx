import { useEffect, useState } from "react";

const SchedualePopup = (props) => {
	const { info } = props;

	return (
		<div className="text-black flex justify-center items-center p-4">
			<div className="w-full max-w-2xl flex flex-col items-center">
				<h1 className="bg-purple-600 w-full p-4 flex flex-col items-center justify-center font-bold mb-3 text-xl rounded-xl text-center text-white">
					<span>{info.Circuit.circuitName}</span>
					<span className="text-sm font-normal mt-1">
						Location: {info.Circuit.Location.locality},{" "}
						{info.Circuit.Location.country}
					</span>
				</h1>

				<div className="SCHEDULE_PARENT grid-cols-1 flex flex-col items-center justify-center w-full text-xl">
					<div className="Practice1 my-3 p-3 bg-amber-300 w-full flex flex-col items-center justify-center gap-1 rounded-xl">
						<h3>First Practice</h3>
						<span>Date: {info.FirstPractice?.date}</span>
						<span>Time: {info.FirstPractice?.time}</span>
					</div>

					{info.SecondPractice && (
						<div className="Practice2 my-3 p-3 flex flex-col gap-1 items-center justify-center bg-amber-300 w-full rounded-xl">
							<h3>Second Practice</h3>
							<span>{info.SecondPractice.date}</span>
							<span>{info.SecondPractice.time}</span>
						</div>
					)}

					{info.SprintQualifying && (
						<div className="SprintQualifying my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-400 w-full rounded-xl">
							<h3>Sprint Quali</h3>
							<span>{info.SprintQualifying.date}</span>
							<span>{info.SprintQualifying.time}</span>
						</div>
					)}

					{info.Sprint && (
						<div className="Sprint my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-400 w-full rounded-xl">
							<h3>Sprint Race</h3>
							<span>{info.Sprint.date}</span>
							<span>{info.Sprint.time}</span>
						</div>
					)}

					{info.ThirdPractice && (
						<div className="Practice3 my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-300 w-full rounded-xl">
							<h3>Third Practice</h3>
							<span>{info.ThirdPractice.date}</span>
							<span>{info.ThirdPractice.time}</span>
						</div>
					)}

					<div className="Qualifying my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-200 w-full rounded-xl">
						<h3>Qualifying</h3>
						<span>{info.Qualifying?.date}</span>
						<span>{info.Qualifying?.time}</span>
					</div>

					<div className="GrandPrix my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-200 w-full rounded-xl">
						<h3>Grand Prix</h3>
						<span>{info.date}</span>
						<span>{info.time}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchedualePopup;
