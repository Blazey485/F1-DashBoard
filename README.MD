# F1 DashBoard made with React

A website where you can keep track of the current F1 season.

## Features

- Driver standings
- Constructor standings
- List of Grand Prix weekends
- Schedules for practice, sprint quali, sprint, quali and Grand Prix
- Live qualifying data (in progress, needs the optional live server below)
- `More coming soon, I ain't finished`

## Tech Stack

- **React** (hooks: useState, useEffect) with **Vite**
- **Tailwind CSS** for styling
- **Jolpica F1 API** (the Ergast successor) for standings and schedules

## What the different files are for

- `LeaderBoard.jsx` fetches the driver standings and renders one `Standings.jsx` row per driver. It also renders `Constructors.jsx`.
- `Constructors.jsx` is the leaderboard for **teams**, not drivers. It fetches its own data.
- `Schedule.jsx` lists the race calendar. `SchedulePopup.jsx` shows the session times for a weekend.
- `main.jsx` is where everything renders.
- `f1-livetiming-api/` is a separate live timing server made by julesr0y (see Credits). It is not my work.

## How to install and run locally

Required tools: **Node.js (with npm)** and **Git**

```bash
git clone https://github.com/Blazey485/F1-DashBoard.git
cd F1-DashBoard
npm install
npm run dev
```

### Optional: live data server (if you want to get live data during sessions)

Live data comes from [f1-livetiming-api](https://github.com/julesr0y/f1-livetiming-api) by julesr0y, included under its own license. Open a second terminal and run:

```bash
cd f1-livetiming-api
npm install
npm start
```

It runs on `http://localhost:3000`. It only has data **while an F1 session is live**, and only while it is running on your own machine, so it won't work on a deployed copy of the site.

## How to contribute

Just fork it and create a Pull Request. I have one rule:

1. Write a detailed PR. Explain what you changed and why. Comments in the code are welcome, as long as you explain it thoroughly.

## License

This project is open-source under the [MIT License](LICENSE).

The `f1-livetiming-api/` folder is a third-party project under the Apache License 2.0. See `f1-livetiming-api/LICENSE` and `f1-livetiming-api/NOTICE`.

## Credits

Live timing server: [f1-livetiming-api](https://github.com/julesr0y/f1-livetiming-api) by julesr0y, Apache 2.0, included unmodified.

## Disclaimer

This is an unofficial, fan-made hobby project and is not affiliated with Formula One Licensing B.V., Formula 1, the FIA or any F1 team. Standings and schedules come from the Jolpica F1 API. The live server reads F1's unofficial live timing stream, which may change or stop working at any time.
