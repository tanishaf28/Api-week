# 🚀 API Week Triple Pack

Three projects, three vibes, one goal: build chaotic things powered by public APIs.

## 🎯 Challenges

| # | Challenge | Project |
|---|-----------|---------|
| 1 | Use an API in a game | 🚩 FlagBlitz |
| 2 | Build a useless hack with an API | 🌦️ VibeChecker |
| 3 | Hack with a public API | 👾 Pokemon Roast |

## 📦 Projects

### 1. 🚩 FlagBlitz (API Game)
**File:** `FlagBlitz.html`  
**Languages:** `HTML5` `CSS3` `JavaScript (ES6)`

Fast-paced flag guessing game with score, timer, streaks, hints, autocomplete, and multiple game modes.

**Highlights:**
- Classic, Blitz, Europe, and Asia modes
- Timer ring and streak multiplier feel
- Hint system with score penalties
- End-game grading and confetti
- Flag rendering via live country data + flag image service

**APIs:**
- 🌍 **REST Countries API** – country metadata (name, region, capital, population, currencies, languages, cca2)
- 🚩 **FlagsAPI** – flag image rendering by country code

---

### 2. 🌦️ VibeChecker (Useless Hack)
**File:** `vibeChecker.html`  
**Languages:** `HTML5` `CSS3` `JavaScript (ES6)`

A weather-to-vibe translator that takes real weather data and outputs dramatic, useless life energy readings.

**Highlights:**
- Cozy rainy-day themed UI
- City quick-pick chips
- Weather stat cards (temperature, cloud, wind)
- Local fallback vibe text so it still works when API is unavailable

**APIs:**
- 🌡️ **Open-Meteo API** – current weather data
- 🤖 **Optional AI endpoint** – `/api/vibe` through `vibeServer.js`

---

### 3. 👾 Pokemon Roast Battle Arena (Public API Hack)
**File:** `pokemon.html`  
**Languages:** `HTML5` `CSS3` `JavaScript (ES6)`

Pick two Pokemon and watch them get roasted based on their real stats.

**Highlights:**
- Pulls real Pokemon stats and sprite data
- Type-aware stat cards and battle layout
- Random matchup generator
- Local roast engine (no key required)

**APIs:**
- ⚡ **PokeAPI** – Pokemon stats, types, moves, sprites

## 📊 API Summary

| 🎮 Project | 🔌 API | 🎯 Used For |
|-----------|--------|------------|
| 🚩 FlagBlitz | REST Countries | Country data for game rounds |
| 🚩 FlagBlitz | FlagsAPI | Flag images by country code |
| 🌦️ VibeChecker | Open-Meteo | Real-time weather for vibe scoring |
| 🌦️ VibeChecker | AI Endpoint | Generated vibe text |
| 👾 Pokemon Roast | PokeAPI | Pokemon data and stats |

---

## 📂 Repository Structure

```
api-week/
├── 🚩 FlagBlitz.html          (HTML5, CSS3, Vue-like JS)
├── 🌦️ vibeChecker.html        (HTML5, CSS3, Vanilla JS)
├── 👾 pokemon.html            (HTML5, CSS3, Vanilla JS)
├── server.js                  (Node.js)
├── vibeServer.js              (Node.js)
├── package.json               (Node dependencies)
└── README.md                  (This file)
```

**Backend Stack:** `Node.js` `Express` (optional AI integration)  
**Frontend Stack:** `HTML5` `CSS3` `Vanilla JavaScript (ES6+)`  
**APIs:** `REST Countries` `FlagsAPI` `PokeAPI` `Open-Meteo`

---

## 🚀 Quick Start

### 1. **Static Serving** (HTML-only, no server)
```bash
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000/FlagBlitz.html`

### 2. **Node.js Server** (with optional vibe AI)
```bash
npm install
npm start
```

---

## 🎓 Made for API Week.
Challenge yourself. Break things. Learn APIs.
