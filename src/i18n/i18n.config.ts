import vi from './vi.ts';
import en from './en.ts';
import zh from './zh.ts';
import ja from './ja.ts';
import ko from './ko.ts';
import type { LanguagePack } from '../lib/translations.ts';

/** UI translations only. blog.config.ts independently selects the site's content languages. */
const languages: Record<string, LanguagePack> = {
  vi: { label: 'Tiếng Việt', messages: vi, title: 'Vietnamese' },
  en: { label: 'English', messages: en, title: 'English' },
  zh: { label: '中文', messages: zh, title: 'Chinese' },
  ja: { label: '日本語', messages: ja, title: 'Japanese' },
  ko: { label: '한국어', messages: ko, title: 'Korean' },
};

export const DEFAULT_LOCALE = 'vi';
export default languages;
