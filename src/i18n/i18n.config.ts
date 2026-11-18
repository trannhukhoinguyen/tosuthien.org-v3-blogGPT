import vi from './vi.ts';
import en from './en.ts';
import zh from './zh.ts';
import ja from './ja.ts';
import ko from './ko.ts';
import type { LanguagePack } from '../lib/translations.ts';

/** UI translations only. blog.config.ts independently selects the site's content languages. */
const languages: Record<string, LanguagePack> = {
  vi: { label: 'Tiếng Việt', messages: vi },
  en: { label: 'English', messages: en },
  zh: { label: '简体中文', messages: zh },
  ja: { label: '日本語', messages: ja },
  ko: { label: '한국어', messages: ko },
};

export const DEFAULT_LOCALE = 'vi';
export default languages;
