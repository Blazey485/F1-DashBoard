# 🏎️ F1 Real-Time Dashboard
---

## 🛠️ Tech Stack & Architecture

### Frontend
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS or Normal CSS



### Free F1 APIs Integrated
1. **Jolpica F1 API**
   * **Role:** Powers the upcoming race calendar, weekend session timetables, and real-time Driver & Constructor championship standings.
   * **Access:** Free REST JSON endpoints with zero authentication or API keys required.
2. **OpenF1 API**
   * **Role:** Fetches session telemetry metadata, track/air weather changes, and historical lap data.
   * **Access:** Free Community Tier (no key needed; live real-time endpoints require a sponsor tier, but post-session/historical views are fully accessible).

### Designing app
1. **Figma** 

---

## 📂 Project Structure

```text
f1-dashboard/
│
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # Standings, Leaderboards, Weather Widget, Schedule
│   │   ├── services/        # API client modules for Jolpica & OpenF1
│   │   └── App.jsx
│   └── package.json
```


F1 Data Website: 

Project SummaryWhat it is: A React-powered web application that serves as a central dashboard for Formula 1.


What it does:Fetches & Displays Schedules: Automatically pulls live calendar data to show upcoming and past Grand Prix weekends. 

Tracks Countdown Timers: Calculates the exact time remaining until the next race session ("lights out").Shows Championship Standings: Displays real-time tables for the World Drivers' and Constructors' Championships.

It will also have a inspo from f1.com, like the menu, to only show 1 thing, instead of the entire dash board. 

tools: React, tailwind/CSS

Maybe might use: Lucide animation


API: https://openf1.org/

But i also asked AI, what the best free api for f1 is. and it said this: 

# 1. Jolpica F1 API (Schedules & Standings)
* **What it covers:** Upcoming race calendars, circuit details, session timetables, and current Driver & Constructor championship standings.
* **Cost & Access:** 100% free, REST-based JSON responses, with zero API keys or authentication required.

# 2. OpenF1 API (Leaderboards, Telemetry & Weather)
* **What it covers:** Practice, Qualifying, Sprint, and Grand Prix session leaderboards, historical lap times, pit stops, weather metrics, and deep car telemetry.
* **Cost & Access:** 
  * **Historical & Post-Session Data:** Free forever. Every session from 2023 onward can be queried without charge or API keys.
  * **Real-Time Live Streaming:** Absolute real-time streaming while a session is actively happening (starting 30 minutes before to 30 minutes after) requires a paid sponsor tier. Outside of that live window, the exact same data becomes free.

Feature	API
Championship standings	Jolpica
Track list and circuit info	Jolpica
Driver laps	OpenF1
Track temp	OpenF1
Weather forecast	Open-Meteo

# create the design: Figma

things to do in order:

1. find api
2. find how to bypass the dammed cors
3. design it in figma
4. code it 🥛 😎


