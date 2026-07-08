# Simple Calculator

A basic web calculator (add, subtract, multiply, divide, percent) served by a tiny Node.js/Express server. Built as a first project for learning the GitHub → Railway deployment pipeline.

## Project structure

```
simple-calculator/
├── public/
│   └── index.html    ← the calculator (HTML + CSS + JavaScript, all in one file)
├── server.js         ← tiny web server that serves the public folder
├── package.json      ← project info + tells Railway how to start the app
└── .gitignore        ← files Git should NOT track (node_modules, secrets)
```

## Run it locally (optional but recommended)

Requires Node.js installed (nodejs.org).

```bash
npm install     # installs Express into node_modules/
npm start       # starts the server
```

Then open http://localhost:3000 in your browser.

## Deploy: GitHub → Railway

### Step 1 — Put the code on GitHub

1. Create a free account at github.com if you don't have one.
2. Click the "+" in the top right → "New repository".
3. Name it `simple-calculator`, keep it Public, do NOT add a README (we have one). Click "Create repository".
4. On your computer, open a terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: simple calculator"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/simple-calculator.git
git push -u origin main
```

(Replace YOUR_USERNAME with your GitHub username. GitHub's "quick setup" page shows these exact commands too.)

Alternative if you don't want to touch the terminal: on your new empty repo page, click "uploading an existing file" and drag all the project files in (everything except node_modules).

### Step 2 — Deploy on Railway

1. Go to railway.app and sign up — choose "Login with GitHub" (this links the two accounts).
2. Click "New Project" → "Deploy from GitHub repo".
3. Pick `simple-calculator` from the list (you may need to grant Railway access to the repo).
4. Railway detects it's a Node.js app, runs `npm install`, then runs `npm start`. Wait for the build to finish.
5. Go to the service's Settings → Networking → "Generate Domain". You'll get a URL like `simple-calculator-production.up.railway.app`.
6. Open the URL. That's your calculator, live on the internet.

### Step 3 — The magic loop

From now on, any change you push to GitHub redeploys automatically:

```bash
# edit a file, then:
git add .
git commit -m "Changed button colors"
git push
```

Railway sees the push, rebuilds, and your live site updates in ~a minute.

## Notes

- `node_modules/` is never uploaded — it's listed in `.gitignore`. Railway rebuilds it from `package.json`.
- Railway's free tier gives limited monthly usage — plenty for a toy project.
- The server reads the port from `process.env.PORT`, which Railway sets automatically. Don't hardcode a port.
