# openjob website: coding standards

- Code, comments, identifiers and commit messages are in English. The three languages of the page live only in `src/i18n/messages.ts`.
- TypeScript strict. No `any`, no non-null assertions.
- No cookies, no local storage, no analytics, no third-party scripts, fonts or trackers. A change that adds any of them needs a cookie banner decision first.
- The page reads the system only in the browser to highlight a download; it stores and sends nothing.
- Keep the text accurate about the app: the CV text stays on the user's computer except when the user asks for an analysis; during a search, a summary of the profile and each posting go to the AI provider to be scored. Say so in every language.
