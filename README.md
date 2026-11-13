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

## Release and deploy

- **Version:** `package.json` and `CHANGELOG.md` move together. A release is a tag `vX.Y.Z` on `main`.
- **Checks before a release:** `pnpm check` (build and HTML validation). Run it in light and dark, at phone and desktop widths, too.
- **Container:** `docker build -t jobshell-site .` then `docker run -p 8080:8080 jobshell-site`, and open `http://localhost:8080/en/`.
- **Railway:** the service builds the `Dockerfile` on every push to `main`. Set no variables: `PORT` is provided by Railway.
