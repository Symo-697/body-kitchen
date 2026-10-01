# Body & Kitchen

A personal app for nutrition, cooking, groceries and training, built around your own goals. Each person sets it up with a short questionnaire, and the app adapts its targets, workouts and recipes to them.

## What it does

- **Nutrition:** calories, protein, carbs, fat and fibre, a daily nutrition score, meals by time of day, planned meals, Crous meals, supermarket search and barcodes, and "describe your meal" estimates.
- **Kitchen:** your own recipes (amounts in grams, spoons or pieces), a bank of recipes to discover, recipe import/export, and prices per shop.
- **Groceries:** a weekly meal planner, meal-prep sessions, home stock with low-stock alerts, and a shopping list in real packs that you can share as a checklist.
- **Training:** generated programs, live workouts with rest timers and set types, an exercise library with muscle maps, a calendar, and progress charts.
- **Body & goals:** measurements, progress photos, phases and phase plans (fat loss, mini-cut, maintain, build, weight gain), weekly check-ins, and maintenance calories learned from your own data.
- **Health:** supplements with daily totals and safe maximums, medication interaction checks, conditions taken into account, and doctor-guided targets.

## Your data

- Everything is stored **on your own phone**, in the browser. There's no account and no server, and each person who opens the link has their own separate data.
- The app only goes online for optional features: supermarket product search (Open Food Facts) and, if you add your own key, AI meal estimates (Anthropic). Your logs are never uploaded.
- Use **⚙︎ Settings › Backup** regularly: deleting the app or clearing the browser erases the data on that phone.
- Never upload backups or personal files to this repository: it is public.

## Install it on your phone

1. Open the link and enter the passcode (once per phone).
2. **iPhone (Safari):** Share › **Add to Home Screen**.
   **Android (Chrome):** ⋮ menu › **Add to Home screen / Install app**.
3. Open it from the icon. It works offline and updates itself when a new version is uploaded.

## Private beta

- A passcode screen keeps casual visitors out, and `robots.txt` plus a "noindex" tag ask search engines not to list the site.
- This isn't strong security, since the code is public, but personal data never leaves each phone anyway.

## Put it online (GitHub Pages)

1. Upload `index.html`, `sw.js`, `manifest.webmanifest`, `robots.txt`, the icons, `README.md` and `CHANGELOG.md` to the root of a public repository.
2. **Settings › Pages:** deploy from branch `main`, folder `/ (root)`.
3. The app is live at `https://YOUR-USERNAME.github.io/REPOSITORY/` after 1–2 minutes.

## Updating the app

Upload the new files (usually `index.html` and `sw.js`) and commit. Phones pick up the new version the next time the app is opened.

## Versions

See [CHANGELOG.md](CHANGELOG.md) for what changed in each version.

## Credits

- Part of the exercise library comes from [wger.de](https://wger.de) (CC-BY-SA; muscle mapping adjusted for this app).
- Product search and barcodes: [Open Food Facts](https://world.openfoodfacts.org) (ODbL).
- Body figures: AI-generated illustrations, with muscle mapping done for this app.

*Not medical advice. Calorie targets, supplement limits and exercise tips are general estimates: check with a professional for your situation.*
