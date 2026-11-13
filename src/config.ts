// Where the app is published. Replace OWNER with the GitHub account or organisation before publishing.
export const APP = {
  name: 'openjob',
  repoUrl: 'https://github.com/OWNER/openjob',
  releasesUrl: 'https://github.com/OWNER/openjob/releases/latest',
} as const;

export const LOCALES = ['en', 'it', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
