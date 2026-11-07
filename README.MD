# F1 DashBoard made with React.

A Website where you can keep track of the current season.

#### Features:

- Drivers Standing
- List Of Grand Prix Weekends
- Schedules Of Practices, Sprint Quali, Sprint, Quali, Grand Prix
- `More Coming Soon, I Aint Finished`

---

### 🛠️ Tech Stack

- **React** (with Hooks: useState, useEffect)
- **Tailwind CSS** for styling
- **Ergast F1 API** For data

---

Upcoming features during next push:
https://api.jolpi.ca/ergast/f1/2026/constructorstandings/?format=json
Contructors.

## What the different files are for:

- `Standings.jsx`, `LeaderBoard.jsx` are related. Standings is where you can find the api fetching, and in LeaderBoard its just the rendering of the standings.jsx component. Idk why but im lazy to change it

- `Schedule.jsx`, `SchedulePopup` are for the race calenders and etc. In Schedule you can see when the next weekend is, while in the `popup` you are able to view the practice, quali and the exact time of the things happening in the weekend.

- `main.jsx` is where everything renders at end.

- `Constructor.jsx` is for the leaderboard for **teams** and **not** for drivers. The component is rendered inside Standings.jsx

# How to Install and Run Locally

Required tools to download : **`NPM`** and **` Git`**

- Step 1:

```bash
  git clone https://github.com/Blazey485/F1-DashBoard.git
```

- Step 2: Open the folder in the terminal then run

```bash
   npm install
```

- Step 3: After its all of the node-modules are installed run

```bash
   npm run dev
```

# How to contribute to the project

Straight forward, just fork it and create a Pull Request. But i do have 1 rule.

1.  Detailed pr –- explain as good as you can of what you changed and why, feel free to use comments aswell within the code to explain, as long as you can explain it throughly

## License

This project is open-source and available under the [MIT License](LICENSE).

## Disclaimer

This application is an unofficial, fan-made hobby project and is not affiliated in any way with Formula One Licensing B.V., Formula 1, or any specific Formula 1 racing team. All racing data is fetched via the Ergast F1 API wrapper.

## Credits for the LIVE DATA
Live timing server: [f1-livetiming-api](https://github.com/julesr0y/f1-livetiming-api) by julesr0y, Apache 2.0.


