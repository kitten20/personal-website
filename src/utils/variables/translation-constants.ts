import { resources } from '../../translations/i18n';

export type TLanguages = keyof typeof resources;
export const possibleLanguages = Object.keys(resources) as TLanguages[];
export const languageQueryParam = 'language';