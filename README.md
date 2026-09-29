# Body & Kitchen

A personal tracker for macros, recipes, weekly meal plans + grocery lists, and glute-focused training.
Everything is stored **on your own phone** (no account, no server). Each person who opens the link has their own separate data.

## Put it online (GitHub Pages, free)

1. Create a GitHub account at github.com if you don't have one.
2. Click **+ → New repository**. Name it e.g. `body-kitchen`. Leave it **Public** (required for free Pages), then **Create repository**.
3. Click **uploading an existing file**, drag in all the files from this folder
   (`index.html`, `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`, `README.md`), then **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After 1–2 minutes your app is live at `https://YOUR-USERNAME.github.io/body-kitchen/`.

## Install it on iPhone

1. Open the link in **Safari**.
2. Tap **Share → Add to Home Screen**.
3. Open it from the home-screen icon from now on (it works offline too).

On Android: open in Chrome → menu → **Add to Home screen / Install app**.

## Important: your data

- Data lives in the browser of the phone you use. It does **not** sync between devices.
- Use **Me → Download backup** every couple of weeks. If you change phone or the browser clears its storage, use **Restore from backup**.
- Moving from the claude.ai version: in the claude.ai tracker, tap **Me → Download backup**, then in this app tap **Me → Restore from backup** and pick that file. Your recipes, logs and measurements come across (photos from claude.ai don't; add them again here).

## Updating the app

Replace `index.html` in the repository with the new version. To make sure phones pick it up quickly, also change `body-kitchen-v1` to `body-kitchen-v2` (and so on) in `sw.js`.

*Not medical advice. Calorie targets and exercise tips are general estimates.*
