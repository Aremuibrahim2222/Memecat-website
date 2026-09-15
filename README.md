# Memecat ($AMC)

Landing page for Memecat, a Robinhood memecoin. Built with Next.js 14 (App Router) and Tailwind CSS.

## Design

Cinema-marquee theme: a movie-poster red (`#E1261C`), warm ink black, popcorn gold, and a touch of Robinhood green for chain branding. Headlines use **Anton** (marquee/poster lettering), body text uses **Space Grotesk**. Recurring motifs: marquee bulb strips, a scrolling LED ticker, ticket-stub cards, and a film-strip divider.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/page.tsx` — assembles the page from the sections below
- `components/Hero.tsx` — marquee headline, pfp, CTAs, contract address
- `components/Ticker.tsx` — scrolling LED-style ticker
- `components/About.tsx` — the coin's backstory
- `components/Features.tsx` — three "reels" explaining the concept
- `components/HowToBuy.tsx` — 4-step buy flow
- `components/Community.tsx` — X / Telegram / Dexscreener links
- `components/Footer.tsx` — disclaimer + credits
- `lib/constants.ts` — contract address and social links in one place

## Before you deploy

- Swap `public/memecat-pfp.jpg` for a higher-resolution version of the mascot art if you have one.
- Double-check the contract address and links in `lib/constants.ts` against the official sources before publishing — anyone can claim a CA, so verify it yourself.
- The footer disclaimer is a starting point, not legal advice; have someone review it before launch.
