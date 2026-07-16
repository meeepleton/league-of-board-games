# Meeple Masters — National Board Game League Website

Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
No backend required — all editable content lives in `/data/*.json`.

## Run locally
npm install
npm run dev
# open http://localhost:3000

## Editing content (no code changes needed)
- data/standings.json      -> League points table (auto re-ranks by "points")
- data/championships.json  -> Per-championship standings (auto re-ranks)
- data/schedule.json       -> Day-by-day schedule
- data/winners.json        -> Champion / runner-up / awards
- data/sponsors.json       -> Sponsor & partner names
- data/games.json          -> Games grid cards
- data/team.json           -> Organisers / volunteers / partners
- data/rules.json          -> Rules accordion content

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Next.js (auto-detected). Click Deploy.
4. Every future push to main redeploys automatically.

To update the points table after launch: edit the JSON file, commit, push — Vercel rebuilds and the site updates in ~1 minute.
