import { useEffect, useState } from "react";

const SchedualePopup = (props) => {
	const { info } = props;

	const timeToLocal = (convert) => {
		if (!convert?.date || !convert?.time) return null;

		const CalenderDate = new Date(
			`${convert.date}T${convert.time}`
		);
		return {
			date: CalenderDate.toLocaleDateString(undefined, {
				weekday: "short",
				day: "numeric",
				month: "short"
			}),
			time: CalenderDate.toLocaleTimeString(undefined, {
				hour: "2-digit",
				minute: "2-digit",
				hourCycle: "h23"
			})
		};
	};

	return (
		<div className="text-black flex justify-center items-center p-4">
			<div className="w-full max-w-2xl flex flex-col items-center">
				<h1 className="bg-slate-900 w-full p-4 flex flex-col items-center justify-center font-bold mb-3 text-xl rounded-xl text-center text-white">
					<span>{info.Circuit.circuitName}</span>
					<span className="text-sm font-normal mt-1">
						Location: {info.Circuit.Location.locality},{" "}
						{info.Circuit.Location.country}
					</span>
				</h1>

				<div className="SCHEDULE_PARENT grid-cols-1 flex flex-col items-center justify-center w-full text-xl text-slate-900">
					<div className="Practice1 my-3 p-3 bg-amber-400 w-full flex flex-col items-center justify-center gap-1 rounded-xl">
						<h3>First Practice</h3>
						<span>
							{timeToLocal(info.FirstPractice)?.date ??
								"TBA"}
						</span>
						<span>
							{timeToLocal(info.FirstPractice)?.time ??
								"TBA"}
						</span>
					</div>

					{info.SecondPractice && (
						<div className="Practice2 my-3 p-3 flex flex-col gap-1 items-center justify-center bg-amber-400 w-full rounded-xl">
							<h3>Second Practice</h3>
							<span>
								{timeToLocal(info.SecondPractice)?.date ??
									"TBA"}
							</span>
							<span>
								{timeToLocal(info.SecondPractice)?.time ??
									"TBA"}
							</span>
						</div>
					)}

					{info.SprintQualifying && (
						<div className="SprintQualifying my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-500 w-full rounded-xl">
							<h3>Sprint Quali</h3>
							<span>
								{timeToLocal(info.SprintQualifying)?.date ??
									"TBA"}
							</span>
							<span>
								{timeToLocal(info.SprintQualifying)?.time ??
									"TBA"}
							</span>
						</div>
					)}

					{info.Sprint && (
						<div className="Sprint my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-500 w-full rounded-xl">
							<h3>Sprint Race</h3>
							<span>
								{timeToLocal(info.Sprint)?.date ?? "TBA"}
							</span>
							<span>
								{timeToLocal(info.Sprint)?.time ?? "TBA"}
							</span>
						</div>
					)}

					{info.ThirdPractice && (
						<div className="Practice3 my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-400 w-full rounded-xl">
							<h3>Third Practice</h3>
							<span>
								{timeToLocal(info.ThirdPractice)?.date ??
									"TBA"}
							</span>
							<span>
								{timeToLocal(info.ThirdPractice)?.time ??
									"TBA"}
							</span>
						</div>
					)}

					<div className="Qualifying my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-600 w-full rounded-xl">
						<h3>Qualifying</h3>
						<span>
							{timeToLocal(info.Qualifying)?.date ?? "TBA"}
						</span>
						<span>
							{timeToLocal(info.Qualifying)?.time ?? "TBA"}
						</span>
					</div>

					<div className="GrandPrix my-3 p-3 flex flex-col items-center justify-center gap-1 bg-amber-600 w-full rounded-xl">
						<h3>Grand Prix</h3>
						<span>{timeToLocal(info)?.date ?? "TBA"}</span>
						<span>{timeToLocal(info)?.time ?? "TBA"}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SchedualePopup;
