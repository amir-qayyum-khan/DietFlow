# DietFlow — Daily Family Meal Scheduler 🥗 ✨

**A World-Class 31-Day Family Food Scheduler, Portion Guide & Automated Grocery Hub**

Designed with rich glassmorphic aesthetics, deep dark mode, and vibrant accents inspired by [site.swiftwf.com](https://site.swiftwf.com/). Built 100% locally with zero server dependencies for complete privacy and maximum speed.

---

## 🌟 Key Features

- **31-Day Unique Menu Database (93 Total Recipes)**: Every day of the month features a unique, carefully curated Breakfast, Lunch, and Dinner tailored for a 5-person family standard.
- **Explicit Portion Sizes Per Person**: Every single meal includes dedicated portion size guidelines per person (~300g–450g / 1 bowl or plate per person) along with exact caloric energy and macro nutrition.
- **Exact Metric Measurements**: Clear, unambiguous units (**g, ml, tbsp, tsp**) for every ingredient so anyone in the family can prepare meals with ease.
- **Seasonal Family Guidance**: Dedicated tips on keeping meals gentle on digestion, hydrating for warm/rainy weather, and soothing for elderly or young family members without storing or displaying private health data.
- **Automated Grocery Hub**: Generate consolidated shopping lists for a **Single Day**, **7-Day Week**, or **Full Month**. Features an interactive checklist and **1-Click Copy to Clipboard** formatted for messaging apps.
- **Instant Recipe Search**: Filter across all 93 meals by ingredient name (e.g., *Chicken, Mutton, Oats, Paneer*), meal type, or cuisine (*Pakistani & Punjabi, Mediterranean, Continental*).
- **100% Local Privacy & Persistence**: All your completed meal checkmarks and saved favorites are stored locally in your browser's `localStorage`. No databases, no external servers, no tracking.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or v20+ recommended)
- npm or yarn

### Installation & Running

1. **Install dependencies**:
   ```bash
   npm install --no-bin-links
   ```
   *(Note: `--no-bin-links` is used for compatibility with non-symlink storage drives).*

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser to the URL provided in the terminal (usually `http://localhost:5173`).

3. **Build for production**:
   ```bash
   npm run build
   ```
   This generates a static bundle in the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages (1-Click Setup)

This repository comes pre-configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) and relative base paths (`vite.config.js`), making deployment effortless:

1. **Push this repository to GitHub** (public or private repo).
2. Go to your repository on GitHub and navigate to **Settings** > **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. Push any change to the `main` or `master` branch. GitHub Actions will automatically build and publish your app live to the web!

---

## 🎨 Design & Architecture

- **Framework**: Vite 5 + React 18
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (`src/index.css`) featuring custom CSS variables, glassmorphic card overlays, responsive CSS grids, and smooth micro-animations.
- **Data Source**: `src/data/recipesData.js` — Easily update or customize the 31-day meal plans directly in this file without backend configuration.

---
*Built with ❤️ for healthy, delicious, and stress-free family nutrition.*
