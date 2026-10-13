import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/main.css";
import LeaderBoard from "./LeaderBoard.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<LeaderBoard />
	</StrictMode>
);
