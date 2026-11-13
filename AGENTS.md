# Jobshell website: coding standards

- Code, comments, identifiers and commit messages are in English. The three languages of the page live only in `src/i18n/messages.ts`.
- TypeScript strict. No `any`, no non-null assertions.
- One cookie only: `jobshell_lang`, set when the visitor picks a language, one year, first-party. No local storage, no analytics, no third-party scripts, fonts or trackers. Any new cookie or tracker needs a decision and a privacy update first.
- The page reads the system only in the browser to highlight a download; it stores and sends nothing.
- Keep the text accurate about the app: the CV text stays on the user's computer except when the user asks for an analysis; during a search, a summary of the profile and each posting go to the AI provider to be scored. Say so in every language.
- Contrast: body text and button text meet WCAG AA (4.5:1). Call-to-action buttons carry white text on the deeper green (`--cta`), never dark text on a light green.
- Accessibility and SEO: every page passes html-validate and axe-core with no violations in light and dark, at phone and desktop widths. Keep it that way: run both before a change is committed.
