# openjob website: coding standards

- Code, comments, identifiers and commit messages are in English. The three languages of the page live only in `src/i18n/messages.ts`.
- TypeScript strict. No `any`, no non-null assertions.
- No cookies, no local storage, no analytics, no third-party scripts, fonts or trackers. A change that adds any of them needs a cookie banner decision first.
- The page reads the system only in the browser to highlight a download; it stores and sends nothing.
- Keep the text accurate about the app: data stays on the user's computer, and the CV is sent to the AI provider only when the user asks for an analysis.
