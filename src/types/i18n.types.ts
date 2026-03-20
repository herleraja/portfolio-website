/**
 * Props for components that need locale management
 */
export interface LocaleProps {
  /** Current locale code (e.g., 'en', 'de', 'zh-TW') */
  readonly locale: string;
  /** Callback to change the current locale */
  readonly onLocaleChange: (locale: string) => void;
}

/**
 * Supported language configuration
 */
export interface Language {
  /** ISO language code */
  readonly code: string;
  /** English name of the language */
  readonly name: string;
  /** Native name of the language */
  readonly nativeName: string;
}

/**
 * Available locales in the application
 */
export type SupportedLocale =
  | 'en'
  | 'de'
  | 'eo'
  | 'es'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'zh'
  | 'zh-TW';
