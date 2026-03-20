import messagesEn from '../locales/messages_en.json';
import messagesDe from '../locales/messages_de.json';
import messagesEo from '../locales/messages_eo.json';
import messagesEs from '../locales/messages_es.json';
import messagesFr from '../locales/messages_fr.json';
import messagesIt from '../locales/messages_it.json';
import messagesJa from '../locales/messages_ja.json';
import messagesKo from '../locales/messages_ko.json';
import messagesPl from '../locales/messages_pl.json';
import messagesPt from '../locales/messages_pt.json';
import messagesRu from '../locales/messages_ru.json';
import messagesSv from '../locales/messages_sv.json';
import messagesZh from '../locales/messages_zh.json';
import messagesZhTW from '../locales/messages_zh-TW.json';
import { defaultLocale } from '../i18n';

// Load messages for all supported locales
export const messages: Record<string, Record<string, string>> = {
  en: messagesEn,
  de: messagesDe,
  eo: messagesEo,
  es: messagesEs,
  fr: messagesFr,
  it: messagesIt,
  ja: messagesJa,
  ko: messagesKo,
  pl: messagesPl,
  pt: messagesPt,
  ru: messagesRu,
  sv: messagesSv,
  zh: messagesZh,
  'zh-TW': messagesZhTW,
};

// Get initial locale from localStorage or browser
export const getInitialLocale = (): string => {
  // Check if user has previously selected a language
  const savedLocale = localStorage.getItem('preferredLocale');
  if (savedLocale && messages[savedLocale]) {
    return savedLocale;
  }

  // Otherwise, use browser language
  const browserLocale = navigator.language;

  // Check for exact match first (e.g., zh-TW)
  if (messages[browserLocale]) {
    return browserLocale;
  }

  // Check for language code only (e.g., zh from zh-CN)
  const languageCode = browserLocale.split('-')[0];
  if (messages[languageCode]) {
    return languageCode;
  }

  return defaultLocale;
};
