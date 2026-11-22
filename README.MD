# F1 DashBoard made with React

A website where you can keep track of the current F1 season.

## Features

- Driver standings
- Constructor standings
- List of Grand Prix weekends
- Schedules for practice, sprint quali, sprint, quali and Grand Prix

- Live qualifying data (yet to test )
- Live race data with gap to leader

## Tech Stack

- **React** (hooks: useState, useEffect) with **Vite**
- **Tailwind CSS** for styling
- **Jolpica F1 API** (the Ergast successor) for standings and schedules

## What the different files are for

- `LeaderBoard.jsx` fetches the driver standings and renders one `Standings.jsx` row per driver. It also renders `Constructors.jsx`.
- `Constructors.jsx` is the leaderboard for **teams**, not drivers. It fetches its own data.
- `Schedule.jsx` lists the race calendar. `SchedulePopup.jsx` shows the session times for a weekend.
- `main.jsx` is where everything renders.
- `LIVE/` is a separate live timing server made by Jules (julesr0y) (see Credits). It is not my work. I renamed the folder from `f1-livetiming-api` to `LIVE` to make it clearer what it does.

## How to install and run locally

Required tools: **Node.js (with npm)** and **Git**

```bash
git clone https://github.com/Blazey485/F1-DashBoard.git
cd F1-DashBoard
npm install
npm run dev
```

### Optional: live data server (if you want to get live data during sessions)

Live data comes from [f1-livetiming-api](https://github.com/julesr0y/f1-livetiming-api) by ROY Jules (julesr0y), included under its own license. In this project the folder has been renamed from `f1-livetiming-api/` to `LIVE/`. Open a second terminal and run:

```bash
cd LIVE
npm install
npm start
```

It runs on `http://localhost:3000`. It only has data **while an F1 session is live**, and only while it is running on your own machine, so it won't work on a deployed copy of the site.

## How to contribute

Just fork it and create a Pull Request. I have one rule:

1. Write a detailed PR. Explain what you changed and why. Comments in the code are welcome, as long as you explain it thoroughly.

## License

This project is open-source under the [MIT License](LICENSE).

The `LIVE/` folder (renamed from `f1-livetiming-api/`) is a third-party project under the Apache License 2.0. See `LIVE/LICENSE` and `LIVE/NOTICE`.

## Credits

- Live timing server: [f1-livetiming-api](https://github.com/julesr0y/f1-livetiming-api) by ROY Jules (julesr0y), Apache 2.0. Renamed to `LIVE/` in this project. Included with the generated `docs/` folder removed.
- Standings and schedule data: [Jolpica F1 API](https://github.com/jolpica/jolpica-f1), the successor to the Ergast API.

## Disclaimer

This is an unofficial, fan-made hobby project and is not affiliated with Formula One Licensing B.V., Formula 1, 2, 3, 4 or any thing related to the FIA or any F1 team. Standings and schedules come from the Jolpica F1 API. The live server reads F1's unofficial live timing stream, which may change or stop working at any time. Use is personal and non-commercial; see F1's [Legal Notices](https://www.formula1.com/en/information/legal-notices.7egvZU48hzrypubGBNcQKt) and [Guidelines](https://www.formula1.com/en/information/guidelines.4EOKE9RRqevL4niTK9kWyt).
