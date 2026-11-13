# Jobshell website

Minimal download page for the Jobshell desktop app, in English, Italian and Spanish.

## Run

    pnpm install
    pnpm dev
    pnpm build

## Before publishing

- `src/config.ts`: replace `OWNER` in the repository and releases addresses.
- `astro.config.mjs`: confirm the public address (`site`).
- Privacy page: confirm the contact channel.

## Privacy

The site sets no cookies, loads no third-party scripts or fonts, and runs no analytics, so it needs no cookie banner.
The system is read in the browser only to highlight a download, and nothing is stored or sent.
