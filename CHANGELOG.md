# Body & Kitchen: changelog

Newest first. Each version = one upload of `index.html` + `sw.js` to GitHub.

## 0.59n beta
- **Home stock order:** ingredients needed by this week's menu come first, most urgent at the top. The rest (even if running low) go below, and move up as soon as a planned meal needs them.

## 0.59m beta
- Space added between "See all recipes" and "＋ New recipe".

## 0.59l beta
- **My ingredients:** the list now comes first (5 shown, then See all), with the search above it. "＋ New ingredient" (name, macros, price, aisle) is folded below, and Edit on an ingredient opens it.

## 0.59k beta
- **Kitchen › My recipes, new order:** Share recipes, My recipes, ＋ New recipe (now folded like the others; it opens by itself when you tap Edit on a recipe), My ingredients, Shops, Add from a supermarket.

## 0.59j beta
- **How each ingredient is bought:** by the piece, in packs, or loose by weight (Home stock › Adjust › "Bought").
  - Set by default for the obvious ones: by the piece for carrots, onions, tomatoes, apples, bananas, lemons, peppers, courgettes, cucumbers, avocados, sweet potatoes, plantains, broccoli; in packs for spinach.
  - The grocery list says "3 pieces", "2 × 250 g pack", "300 g loose", "1 bulb" (garlic) or "1 bunch" (herbs).
- **No guessing:** fruit and veg with no buying mode yet appear in "How do you buy these?" at the top of Groceries. By the piece asks the weight of one piece if unknown, and In packs asks the pack size.
- **Piece items:** the stock gauge now compares what you have with what this week's meals need. Stock counts in pieces, "1 piece ≈ g" is editable in Adjust, and adding a piece ingredient to a recipe switches it to pieces automatically.

## 0.59i beta
- **Receipts recognise your existing ingredients** even when the receipt line is written differently ("ST MICHEL MADELEINES 500 g" → your "Madeleines St Michel"). Lines matched this way show "✓ matched to yours".
- **Merge duplicate ingredients:** Home stock › Adjust › "⇄ Same as another ingredient? Merge".
  - Stock, brands, prices, recipes, the grocery list and receipt memory move to the ingredient you pick, and the duplicate disappears.
  - Next receipts go straight to the right one.

## 0.59h beta
- **Receipts use the ingredient's unit:** ml for oils and sauces, pieces for eggs and onions, g for the rest, with a g / ml / pcs switch per line. You can also type "1.5L", "500g" or "12pcs". Stock and prices are still saved correctly.

## 0.59g beta
- **Assisted machines** (assisted pull-up, chin-up, dip, Gravitron):
  - the weight you enter is the **assistance** (the column says ASSIST KG);
  - the real load (body weight − assistance) is used for volume and strength charts;
  - progression **lowers** the assistance when you hit your reps ("Next: 47.5 kg assistance… Less help than last time (50 kg)"), and says when you're ready for no assistance;
  - percentage-based methods (undulating, pyramids) switch to double progression for these.
  - Band-assisted exercises are not affected.

## 0.59f beta
- Duplicate check: "Machine Side Lateral Raises" is now merged with "Machine Lateral Raise".

## 0.59e beta
- **Recipes show kitchen units:** tbsp, tsp, a pinch, pieces and cloves. Grams are shown in brackets only for bigger amounts.
- **Sides:** the "With sides (…)" line under the title and the batch totals are gone. Instead, "For the side (per portion)" with a table, and the "(counted in the groceries)" mention is gone.
- **Recipe editor:**
  - sides now have a unit (g, ml, tbsp, tsp, pinch, piece…), like ingredients;
  - you can edit the **Instructions** (one step per line) and a **Note**.

## 0.59d beta
- **Test my shortcuts** at the top of Settings › 📖 How Body & Kitchen works: a 10-second timer and a reminder in 2 minutes.
- **kg ⇄ lb** per exercise also in the workout editor (Workouts › Edit). Starting weights show in lb too.

## 0.59c beta
- **Duplicate exercises removed from the Library** (about 200).
  - Same exercise under several names: word order ("Barbell Decline Bench Press" / "Decline Barbell Bench Press"), plurals ("Crunch" / "Crunches"), Lever = Machine ("Lever Leg Extension" / "Machine Leg Extension"), "Assisted" = machine-assisted, and names missing their usual equipment ("Hammer curl" / "Dumbbell Hammer Curl").
  - One name is kept, always the one you've used if you have history. The others still find it in search, and its info shows "Same as: …".
  - Exercises you've already logged are never hidden.

## 0.59b beta
- **＋ Empty workout** next to ▶ Start: a blank live workout where you add exercises as you go. When you finish, it offers to **save it as a new workout** (name it, the next free letter is used).
- **Two (or more) workouts the same day:** finish one, then start another. Both are saved separately (history, charts, calendar), and the week shows "A+1✓".

## 0.59 beta (report #6)
- **Prices per shop are visible everywhere:**
  - under each ingredient in My ingredients, and on the 💶 button in the grocery list ("⭐ 3.96 €/kg Intermarché · 4.50 €/kg Grand Frais");
  - typing "4,50 €" now works (the € used to make the price silently not save);
  - when the price you enter is for a shop that isn't the ⭐ usual one, a message says the list still uses the usual shop and how to switch.
- **Scan-added exercises follow your week:** when you replace a workout in the week by another one, exercises added for your scan move into the new workout if it doesn't already cover that issue (max 2 added per workout).
- **Train: Plan & log and Workouts merged into one page:**
  - top: the week (drag days, ＋🏃 cardio) and the selected workout;
  - below: all workouts with search, type filters, Import, From my imported history, ＋ Add workout. Tap a workout's name or Open to show it at the top;
  - removed: "This week's workouts" and "Not in your week".
- **Switch exercise during a workout** (••• › ⇄ Switch exercise):
  - similar exercises are suggested first, or search any exercise;
  - sets already done stay on the old exercise, and the remaining sets go to the new one;
  - at the end, "Update workout?" offers to keep the switch for good.
- **Cardio:** ＋🏃 on a day asks which cardio exercise and how long, then plan it (this week / every week) or ▶ Start now (today).
  - Live cardio has a big stopwatch (Start / Pause / Done fills the minutes), and you can still add other exercises.
  - Tapping a planned cardio offers Start now / Change / Remove.
- **iPhone shortcuts from the Home Screen app:** no more Safari tab opening after the timer or reminder. Swipe back to the app (or tap "◀ Shortcuts" top-left) after the shortcut runs.

## 0.58c beta
- **"Training days" supplements** (like the pre-workout) no longer appear at all, not even as optional, on days with no workout and no cardio planned or logged. Their reminders don't fire on those days either. A training day is now checked for the right week (planned workout, planned cardio, a logged session, or a workout in progress).

## 0.58b beta
- **Settings › 📖 How Body & Kitchen works** rewritten: step-by-step sections for each tab, both iPhone shortcuts (exact setup, test without the app) and a "Shortcut problems?" checklist.

## 0.58 beta (report #5)
**Already shipped in the Claude version, now on GitHub too:**
- **Home stock:** 10 closest to running out + See all (A–Z, search).
- **Units per ingredient:** ml/L, pieces, grams; the "Count in" switch; amounts like 250ml / 1.5L / 3pcs.
- **Prices:** 💶 per shop (kg / L / piece, ⭐ usual shop); pop-ups stay above the keyboard.
- **Groceries:** meals already eaten no longer count; amounts scale to the portions still to cook.
- **Receipts:** SAS GREECE → Intermarché (shops merged, aliases learned).
- **Train:**
  - kg ⇄ lb per exercise;
  - Left vs right box in Progress;
  - no pop-ups between sides or superset exercises;
  - Smith machine hip thrust visible in the Library.

**New:**
- **Text review:** shorter or removed explanations on every tab.
  - BMI info is now behind ⓘ, and the progress formulas behind "About".
  - The 🎯 targets keep only the next target (plus a short pain note).
- **Log food:** recent foods show 3 + See all.
- **Workout header:** the title on its own line, type chips below, Rename in •••, "4 R · 4 L" instead of RRRRLLLL. The workout note is shown in the edit pop-up.
- **Workouts:**
  - search (name or exercise) + type filters;
  - **Edit** opens one pop-up with name, note, type, and every exercise (sets, reps, rest, note, superset, order, remove).
- **Finish:** "Update workout?" lists what was different (sets, added or skipped exercises) and you tick what to keep. Then 🎯 Next time.
- **Rest over:** big pop-up with the next set (+ beep + vibration), also when you come back to the app.
- **Sport water:** wait picked in 5-min steps; big "Refill time" alarm.
- **Supplements:**
  - "When" list (on waking, before/after breakfast/lunch/dinner, bedtime, training…);
  - reminder in 30-min steps: in-app alert (Taken / In 30 min) + 📲 iPhone Reminder via the "B&K Reminder" shortcut.
- **Settings:**
  - step goal (custom or off);
  - Workout timer: keep the screen on during workouts, iPhone timer via "B&K Timer" (every rest / 2 min + / off), launch delay measured and corrected automatically;
  - 📖 instruction manual, including the shortcut setup.
- **Calendar:** Today button; tap the month name to jump to any date.
- **Workout colours** stay the same after reloading (G–Z included).

## 0.57 beta
- **Planned set types:** a workout can define L/R per set (e.g. RRRRLLLL or RLRL…). Live mode starts with them, and side sets are numbered per side (1R…4R, 1L…4L).
- **Alternating sides:** after R, the app goes straight to L with no rest, then continues: rest, or the next superset exercise.
- **L/R pairing for progression** works in any order (all right then all left too), and follows the weaker side.
- **Exercise notes:** ••• › Add a note. Notes show in the plan and during the workout, and a workout can have its own note under its title.
- **Starting weight:** used as the pre-filled weight until you have history.
- **Workout file import:**
  - Each exercise can list alternative names ("also"), so it uses your history name first, then the library.
  - It can carry per-set types, a starting weight, a definition (muscles and logging mode) for exercises not in the library, rest 0 inside supersets, and a workout note.
- Plyometric exercises (jump squats etc.) now have muscles (quads, glutes, calves).

## 0.56 beta
- Removed the last glute-only rule: glute exercises no longer get an extra set in building/gain phases.
- **Train › Workouts › "Import workouts (file)"** imports one or more workouts from a JSON file.
  - Supported per exercise: name, sets, reps, rest (s), superset group, progression method, tempo.
  - Supported per workout: title, type (upper/lower/full/cardio).
  - Each workout gets the next free letter. Names are matched to the library (including aliases). Unknown exercises are created as your own and listed.

## 0.55 beta
- **Workout type:** each workout is Upper, Lower, Full body or Cardio. The type is guessed from its exercises and shown as "(guessed)" until you tap one in the workout's plan. It's also shown in the Workouts list.
- **🎯 Apply to my workouts:** after importing a scan, or from the scan page, a list shows what the scan asks for and where you already work it.
  - It proposes exercises to add, aiming for each issue twice a week: upper issues go to upper or full-body days, lower issues to lower or full-body days, core/posture to any day (lower first). Never more than 2 added per workout.
  - You tick what you keep.
  - At the next scan, added exercises that are no longer needed are proposed for removal; the ones still needed stay.
- **Badges:** "➕ Added" on added exercises and 🎯 on exercises you already do that help (plan and live).
  - Tapping one shows why above the body figure: added after which scan and for what, what it helps with, and cues (soft knees for hyperextension, knees out for valgus, start with the weaker arm or leg).
- **Glute highlight removed** from exercise names everywhere.

## 0.54 beta
- **Body scans follow your routine:** when you import a report, the app asks "before or after training" (you can change it on the scan page).
- **New checks instead of "any evening scan is suspicious":**
  - the time is more than 2 h away from your previous scan,
  - one scan was before training and the other after,
  - it's a different weekday.
  - The first scan sets your routine.

## 0.53 beta
- **Set types reworked** (each one explains itself in the set-type sheet):
  - **Warm-up / feeder:** count as sets + volume, never drive progression.
  - **L / R:** ½ set each, weight of one side; progression follows the weaker side.
  - **Drop set:** part of the set above (adds volume, not an extra set), weight pre-filled at −25 %.
  - **Negative:** 1 set, ignored by progression.
  - **Partials:** type 10+5 → 1 set, partials = half volume, progression on the full reps.
  - **Myo-reps:** type 15+4+4+3 as one entry → 1 set, all reps in volume, progression on the activation reps.
  - **Top set:** progression reference.
  - **Back-off:** 1 set each, pre-filled ~12.5 % under the top set, progression follows the top set.
- **Supersets:** A → B → (C…) is one round, and the rest timer starts after the full round, using the longest rest of the group. The message no longer says "no rest".
- **Body composition (Me › Body composition):** "＋ Add a VisBody report" (PDF, or a screenshot via Claude).
  - Reads all values: weight, body fat %, fat mass, muscle, skeletal muscle, lean mass, water, visceral fat, BMR, ECW/TBW, left/right segments and posture.
  - Body fat % is also added to Other measurements.
- **Accuracy checks:**
  - It compares the scan with your scale average and the time of day.
  - It flags impossible changes between scans: fat up while weight down, lean mass moving more than weight, big muscle loss while training, body-fat % jumps.
  - It then asks for tape measurements (📏 Verify): if the tape disagrees, the scan is marked doubtful and left out of trends. You can also ignore or restore a scan by hand.
- **What to prioritise:** rule-based advice from the scan and your phase.
  - Rate of loss vs target, visceral fat, left/right differences (weaker side first).
  - Posture: forward head, rounded shoulders, anterior pelvic shift, knee hyperextension, valgus.
  - Exercise chips open the Library.
- **"🤖 Full analysis with Claude"** combines scan history, tape, scale, food/steps/sleep averages, injuries and your workouts into a summary, priorities and exercises to add.

## 0.52 beta (report #4, part 2)
- **Warm-up and feeder sets count as sets and volume** (you still carry the weight). They still don't drive progression.
- **"How was your workout?"** when you finish: tap your discomforts (profile areas ★ + common ones, or ＋ Other, which is also added to your profile). One tap = mild, two = painful.
  - Next session, exercises loading that area won't increase (mild), or go ~15 % lighter with a pain-free range (painful).
  - The 🎯 target says why. It clears once a later workout reports no discomfort there.
- **Supersets:** ••• / long-press an exercise › "Superset with the next exercise" (in a workout or live). Grouped exercises get a coloured bar and label (Superset 1 · A/B).
  - Live: no rest between A and B, the app jumps to the next exercise. The rest timer runs after the last one, then back to A.
- **Morning check-in:** the first time you open the app before 2 pm, a quick sheet asks your sleep, energy and morning supplements. It feeds today's training targets, and it can be turned off in Settings.
- **Sport water (Settings › My gym):** choose your gym (On Air, Basic-Fit, Fitness Park), tick "I have access". Defaults: 500 ml per refill, wait 30 min, ~3 kcal.
  - During a workout, 💧 Refilled counts refills, adds the water to today, shows the countdown and beeps when you can refill again.
  - The refills are logged as a 0-macro entry when you finish.
- **Running low:** the first time you open Kitchen each day, a pop-up lists ingredients running low (or that will be short by the end of the week). Tick the ones to add to the grocery list.
  - Low items are no longer added automatically. The grocery list shows the others with an "add" link.
- **Receipts:**
  - Receipt lines are remembered (✓ recognised next time, same ingredient/brand, so stock isn't split).
  - New products are looked up in Open Food Facts and saved with their barcode, so scanning the same barcode later finds the same ingredient.
  - Grocery items are ticked by their main ingredient.
- **Recipes:** the side ("Served with", e.g. rice for chicken yassa) now shows under the ingredients with the total for the whole batch, plus a final method step "Serve each portion with…".

## 0.51 beta (report #4, part 1)
- **Set types now have rules** (shown in the set-type sheet):
  - Not counted at all: warm-up and feeder sets.
  - **L / R:** ½ set each, so a left + right pair = 1 set, and only that side's volume (no ×2).
  - Drop set: ½ set, volume counted. Partial reps: ½ set, ½ volume.
  - Ignored by progression: drop, negative, partial, myo-rep and back-off sets.
  - **Top set:** the reference for progression.
  - These rules apply everywhere: live stats, weekly sets per muscle, volume charts and progression.
- **L → R automatically:** marking a set L turns the next one into R (and the reverse). "+ Add set" keeps alternating L/R, and the pair shares a number (1L, 1R, 2L…).
- **New set defaults:** a new set is pre-filled from the same set of your last workout, otherwise from the set just above.
- **Add an exercise during a workout:** results appear as you type (EN/FR, muscle, machine), like the other search bars.
- **Durations over an hour** show as 1h17min (calendar, summaries, cardio, charts).
- **Finish / edit a workout:** changing the start moves the end (duration kept). Changing the end changes the duration (start kept). Changing the minutes moves the end. Start/end can now also be edited on past sessions.
- **Supplements:** the time taken is saved and editable (time box next to each ticked supplement).
- **Crous counter:** when the week started last month, it now says "This week (since Mon 28 Sep)" and the month name, so the numbers no longer look contradictory.
- **Portions to make:** new "already have" field for portions already cooked. They're removed from cooking sessions and groceries; sides still count.
- **"I have it":** on every grocery item and pantry item, asks how much you have and puts it in home stock. This replaces the "need to buy" checkbox, which removed pantry items from the "check you have" list and added them to the grocery list (the chili-flakes problem).

## 0.50 beta
- **Exercise database v3 in the Library: 4,352 exercises** (was 967), every one a real exercise. Duplicates are merged: when two names mean the same exercise, you see the one you already use.
- **Three views:** Muscle, Equipment, Movement (49 families such as Hip Thrust / Glute Bridge, Row, Lateral Raise). New groups for Neck, Stretching & mobility and Cardio.
- **Two filters:** equipment category (Lyfta-style: Leverage machine, Sled machine, Smith machine, Band (tube), Resistance band (loop), Bosu ball, Battling rope…) and target muscle.
- **French search:** "développé couché", "fessiers poulie", "tirage vertical prise serrée", "étirement ischio" all work. Search also matches aliases and tolerates plurals, and the best matches come first.
- **Alternatives:** an exercise's info sheet lists up to 8 exercises with the same movement (same target muscle first). From a workout, **Swap** replaces the exercise in place: sets, reps and progression method are kept, and the old exercise's history stays.
- Your existing exercise names, history and workouts are unchanged.

## 0.49 beta
- **Edit a logged entry:** tap any food in Today's log to change its name, meal, time, amount or portions (with or without sides), its **ingredients** (change grams, remove, add), or the macros of a quick add / Crous meal; Delete is there too. Home stock is corrected automatically.

## 0.48 beta
- "Eaten at" time is also available when logging or modifying a **planned meal**.

## 0.47 beta
- **⚡ Quick add** in Today › Log food: log a meal with just its calories and macros (protein, carbs, fat, fibre), no ingredients. Only calories are required. Tick "Save it for next time" to get a one-tap ⚡ chip.

## 0.46 beta: progression methods
- **6 progression methods + Maintain:** Linear, Double progression, Volume (add sets), Undulating (rotates heavy 4×5 / moderate 3×10 / light 3×15 each time you do the exercise, weights from your estimated max), Pyramid 12/10/8/6 (+9% per set on compound lifts, +5% on isolation; longer rest each set) and Reverse pyramid 6/8/10/12 (−10% per set; rest shorter each set). **Tempo** (3-second lowering) is an option on any exercise and suggested on plateaus.
- **Choose per exercise, workout or phase** (exercise › workout › phase › default): long-press an exercise or a workout › Progression method, or Me › Phase › Change; each phase-plan step can have its own method. Defaults: Linear for beginners, Double progression otherwise, Maintain = no increases.
- Live workouts follow the method: number of sets, a different weight and reps per set for pyramids, and rest times.

## 0.45 beta: progression engine
- **Next-session targets for every exercise** (rule-based double progression): hit the top of your rep range on every set → the weight goes up (2.5 kg, 5 kg on heavy lower-body lifts, next dumbbell); otherwise same weight and +1 rep; two sessions under range → −10% and build back. Example: 30×10, 30×9, 32.5×7 at 3×8 → next 32.5 kg for 3×8, then 35 kg once you get 8/8/8.
- **Readiness:** low energy (≤2/5) or under 6 h of sleep today → no weight increase that day.
- **Plateau detection:** 3 sessions without progress → suggests a lighter week, a new rep range or a variation.
- Targets show in Plan & log, in each exercise card during the workout (🎯), and pre-fill the weight and reps boxes. After **Finish** (now with an energy rating), a **"Next time"** summary lists every exercise's next target.

## 0.44 beta
- **Repairs empty ingredients:** ingredients created by older versions with "(estimate)" and 0 kcal are fixed automatically when the app opens (Open Food Facts label values, or Claude with your API key); a "Find real values" button in My ingredients does it on demand. Ingredients show "(label)", "(estimated)" or "(no values)".

## 0.43 beta
- **Products are no longer linked to the wrong ingredient:** a scanned compote, juice, biscuit… is never treated as a brand of the raw fruit/ingredient anymore; when a product could be a brand of an ingredient, the app asks first. Existing wrong links are fixed automatically, and each product in My ingredients has a "Not a …" button to separate it.
- **Real nutrition values instead of empty estimates:** new ingredients from the recipe AI, "Describe your meal" and the recipe editor are first looked up in **Open Food Facts** (label values, GitHub app), then completed by Claude; no more ingredients with 0 kcal.
- **Recipes have a meal type** (breakfast, lunch, dinner, snack); in the planner, matching recipes come first with a ★.

## 0.42 beta: report #3
- **Long-press** a workout (chip or card) to edit, add exercises, rename, duplicate, add to week or **delete** it; long-press an exercise in a workout to see its muscles, move it or **delete** it.
- **Workouts** tab in Train: all your workouts with their exercises and days, ＋ Add workout, and **"From my imported history"** to rebuild workouts from your old app's sessions (exercises, usual sets and rep ranges).
- **＋ Add workout** opens an exercise picker right away (search by name, muscle or machine, tick several, add).
- Injury **warnings** are hidden behind a "⚠ Warnings" button.
- Week table: workouts not in your week are shown as letters only.
- Progress charts: rounded axes (30k, 2h30) and **tap a bar or point** to see that week's value.
- Up to 26 workouts (A–Z).

## 0.41 beta
- **＋ Add workout** in Train › Plan & log: name a new workout, add its exercises, then **Add to week** to put it on a day. Workouts can be renamed.
- Plan & log now only shows **this week's workouts**; the others are under "Show other workouts".

## 0.40 beta
- **Progress over time** (Train › Progress): 3M / 6M / Year / All with weekly **Duration**, **Volume** and **Workouts** charts, this week's value and the weekly average; each exercise's charts follow the same period.
- Prices and My ingredients now show 10 items before **See all**.

## 0.39 beta
- **Brands and products:** buying the same ingredient in another brand (e.g. two skyrs) creates a separate **product** under that ingredient, with its own name, macros and price per shop. Your recipes use the product you bought last (marked "✓ used" in My ingredients, changeable any time); home stock shows how much of each product you have; scanned barcodes are linked to their ingredient the same way. Logs keep the values of the moment, so past days don't change.

## 0.38 beta
- Prices and My ingredients show at most 20 items (bought / at home first), with **See all** pop-ups that have their own search.
- Layout fix: input boxes no longer overlap on small screens (forms, price table, ingredient list).

## 0.37 beta
- **Prices per shop:** each shop keeps its own price per kg for each ingredient (e.g. chicken at Intermarché and at your butcher); the grocery list uses the price of the shop you buy it from. Receipts save prices for their shop and add the shop if it's new.
- **Prices list is shorter:** only the ingredients you use (recipes, stock, receipts, your own), with the other shops' prices shown underneath; **See all** opens every ingredient with a search bar.

## 0.36 beta
- **🧾 Add a receipt** (Groceries): pick a PDF receipt (e.g. Intermarché e-receipt) or a photo of any receipt (butcher, African shop…). The app lists every item with its weight and price, matched to your ingredients; you check the matches, and the ticked items go into your **home stock**, update the **price per kg** and the **shop**, and are ticked on this week's grocery list. Photos need Claude (claude.ai or your API key); PDF receipts also work offline with a simpler reader.

## 0.35 beta
- **Scan or search products in Kitchen:** "📷 Add from a supermarket product / barcode" in Kitchen › My recipes adds the product to your ingredients, and to the recipe you're editing (with its serving size). Works in the GitHub app (the claude.ai preview can't reach Open Food Facts).
- **New ingredients are created from your recipes:** typing an ingredient that doesn't exist yet no longer blocks saving: the app creates it (values estimated by Claude / your API key, or typed from the packet without AI) and marks it "estimated".
- **My ingredients** now lists every ingredient you added, imported or used in a recipe, with its values per 100 g, how many recipes use it, a search bar and **Edit** for your own ingredients.

## 0.34 beta
- **Meal prep schedule:** new default **Sunday → Sunday–Wednesday, Thursday → Thursday–Saturday** (fresher food: 3 days max in the fridge). The old Sunday + Wednesday split is still available as a choice. "Plan my week" follows the chosen schedule.

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
