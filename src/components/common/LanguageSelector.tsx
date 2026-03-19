import { useState, useRef, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import type { Language, LocaleProps } from '../../types/i18n.types';

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'eo', name: 'Esperanto', nativeName: 'Esperanto' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
];

interface LanguageSelectorProps {
  readonly currentLocale: LocaleProps['locale'];
  readonly onLocaleChange: LocaleProps['onLocaleChange'];
}

export default function LanguageSelector({ currentLocale, onLocaleChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    onLocaleChange(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 w-full sm:w-auto justify-start"
        aria-label="Select language"
      >
        <FaGlobe className="text-lg" />
        <span className="text-sm font-medium">
          {currentLanguage.nativeName}
        </span>
      </button>

      {isOpen && (
        <div className="fixed sm:absolute left-4 right-4 sm:left-auto sm:right-0 mt-2 sm:w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden z-[9999]">
          <div className="max-h-[70vh] overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-4 py-3 text-left hover:bg-purple-100 transition-colors duration-200 ${currentLocale === language.code
                  ? 'bg-purple-200 font-semibold text-purple-900'
                  : 'text-gray-800'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{language.nativeName}</span>
                  <span className="text-sm text-gray-600">{language.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


