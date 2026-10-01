# Body & Kitchen: changelog

Newest first. Each version = one upload of `index.html` + `sw.js` to GitHub.

## 0.33 beta
- **Search everywhere works the same way:** type several words in any order, accents and capitals don't matter. Train › Progress now has a search bar for your exercises (by name, muscle or equipment, e.g. "leg curl", "hamstring", "machine abduction"); the Library and My recipes search also look at muscles/equipment and ingredients.
- **Deload reminder:** weeks of training now count from your last deload or your last break of 2+ weeks (imported history from long ago no longer triggers it).

## 0.32 beta: home stock gauges
- **Two gauges per ingredient in Home stock:** the dark bar is what you have **now** (it only goes down when you log a meal); the light bar on top is what will be left **at the end of the week** if you eat the meals still planned and not yet logged. The light bar turns red, with a message, when the week's plan would leave you almost empty or short ("buy at least …").
- **Already at home:** untick an item to put it back on the grocery list (1 pack, marked "added by you" with an undo).

## 0.31 beta: exercise library + workout history import
- **124 new exercises:** every exercise from the imported history (Lever machines, Sled 45°, Smith, cable variants…), more machines with their free versions (e.g. Lever Standing Calf Raise / Calf Raise), and cable attachments and grips: Cable Seated Row (V-bar, wide bar, rope, single handle, underhand, MAG), Lat Pulldown (wide, normal, close V-bar, underhand, neutral wide, one arm, rope), Straight-Arm Pulldown, Triceps Pushdown and Cable Biceps Curl variants. Each one has its own muscles.
- **Import workout history** (⚙︎ Settings): add past workouts from a CSV export (Lyfta, Hevy, Strong…). Workouts are added to your data, never replaced; importing the same file again skips what's already there. Set types (warm-up, drop, left/right, negative, partial), timed holds and cardio are kept; kg or lb is asked. Imported workouts appear in the Calendar (grey "H") with their original title, and in your progress charts. A **Remove imported workouts** button undoes an import (your own workouts are kept).

## 0.30 beta: report #2, part 2
- **Move workouts in your week:** long-press a day in the Plan & log week table and drag it onto another day (or release to get a "Move to…" menu). Two workouts switch places; a workout dropped on a rest day moves there. Each change asks: *this week only* or *every week*.
- **Rest rules:** max 2 workouts in a row for a plan of 4 days or fewer, max 3 for 5–6 days, never 7 days. If a move or an addition breaks the rule, the workout goes to the next day that respects it, and the app tells you where.
- **Routines not in your week** (e.g. created from the Library) are listed under the table: tap one to add it to a day. Adding to a rest day turns an x-day plan into x+1 days; adding onto a workout day replaces it.
- **Shopping mode** in Groceries: a big tickable list by shop and aisle, works offline in the store; ticked items go into your home stock. "Share list" still sends the text version.

## 0.29 beta: report #2, part 1
- **New profiles:** male body figure until the profile is set; My recipes starts empty (breakfasts and snacks are in Discover); the phase pill shows **＋ Set up** until the setup is done.
- **Calendar** is now its own tab (6 tabs): tap a day for the workout done, planned, missed or rest, the cardio, the meals logged with their totals, supplements and habits.
- **Cardio add-ons:** add a 25-min cardio session to any day from the week table (this week only or every week); it doesn't count as a workout day. Today shows it in the afternoon with ▶ Start.
- **Save as…** on a logged meal: save it as a quick meal or as a **recipe** in My recipes (AI estimates become ingredients).
- **✨ Estimate from a description** in the new-recipe form (Claude, your API key or the offline estimator).
- **Planner:** "＋ Add recipes…" option, and buttons to Discover or log a recipe when you have none.
- **Library:** ＋ New exercise button next to the search; the selection bar stays pinned at the top.
- **Timers:** a beep on each of the last 3 seconds of rest and countdown, louder sounds, and a message when you come back to the app after the rest ended.
- **Live workout:** totals update as you type; the rest timer no longer hides "Add an exercise".
- **Decimals** everywhere, and commas are accepted (62,5).
- "Saved on this device" no longer shown on every page.

## 0.28 beta: report #1, part 2
- **Planned meals ↔ log:** in Today, choose 📋 *Planned meal* (one tap logs today's breakfast/lunch/dinner/snack from your planner, marked ✓), ✎ *Modify planned* (edit the portion's ingredients, or describe the change and let Claude / the offline estimator apply it) or ＋ *Another meal* (the usual form).
- **Home stock:** what you have at home, with a gauge per ingredient. Logging meals uses it up; ticking items as bought adds the real pack (1 kg rice, 6 eggs…). It carries over from week to week. Pack sizes and alert levels are editable.
- **Grocery list in real packs:** needed this week minus what you have, rounded up to packs; low-stock items are added automatically with an alert; **⬇ Generate list** shares a checklist (Notes, Messages…).
- **Exercise library** (Train › Library): all exercises by muscle group or equipment, search, anatomy pop-up, tick several to add them to a day or **create a new routine**.
- **Caffeine and bedtime:** set your usual bedtime in ⚙︎; ticking the pre-workout or adding a coffee less than 6 h before bed shows a warning.
- **Today adapts to the time:** supplements first in the morning, today's workout card in the afternoon, a day summary in the evening.

## 0.27 beta: first beta report (Thursday)
- **Settings (⚙︎)** at the top right of Today and Me: appearance, profile & body data, AI key, setup and backup moved there.
- **Appearance:** System / Light / Dark / Auto by time (dark 20:00–7:00), and 5 colour palettes (Plum, Ocean, Forest, Sunset, Rose), each with a light and dark version.
- **Kitchen › My recipes:** new recipe, ingredients and prices now come first; the list shows your 5 latest recipes with a **See all** pop-up (with search).
- **Shops:** add your own shops (e.g. halal butcher), choose where you buy each ingredient and its real price; the grocery list is split by shop with a subtotal each.
- **Meal time:** "Eaten at" time when logging food, shown in the log.
- **Workouts:** start and end times saved (editable when finishing) and shown in the Calendar.
- **Supplements:** amount per dose for each ingredient (caffeine, magnesium, vitamin D…), daily totals across all products, warnings above safe maximums, and a coffee/tea counter for caffeine.

## 0.26
- Fixed the API key Save button; every button in the app checked for the same error.

## 0.25
- "Describe your meal" in the GitHub app: your own Anthropic API key, or a free offline estimator.

## 0.24
- Fibre as a 4th macro and in the nutrition score; male figure front/side shoulder split; AI meal description (claude.ai).

## 0.23
- Medical conditions in setup, adaptive maintenance from real logs, doctor-guided targets.

## 0.22
- Phase plan (order, durations, targets, timeline, calendar band); Weight gain and Mini-cut phases.

## 0.21
- Private beta: passcode screen and hidden from search engines.

## 0.20
- In-app confirmation dialogs (Discard / Finish fixed in claude.ai); Finish saves filled sets.

## 0.19
- Live workout stats sheet (gauges, muscles, radar).

## 0.18
- Live workout mode: timer, rest timers with suggestions, set types, PREVIOUS column, menu (photo, notes, share, discard).

## 0.17
- Crous meals (6-point system, pastry, bread, drink) with their own counter.

## 0.16
- Supplements & medication tracker with interaction checks; spoons/pieces/cans units; pantry section; alloco, attiéké, tilapia.

## 0.15
- Recipe import/export; Better Than Takeout conversion; Discover search.

## 0.14
- Setup questionnaire, generated workout programs (preview), recipe bank (36 recipes) and "Plan my week".

## 0.13 and earlier
- Supermarket search and barcodes (Open Food Facts), meals and saved meals, workout calendar, exercise library (wger), editing exercises, anatomical muscle maps, measurements, nutrition score, progress charts, meal prep, groceries, first release.
