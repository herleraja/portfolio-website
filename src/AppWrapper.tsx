import { StrictMode, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import App from './App.tsx';
import { defaultLocale } from './i18n';
import { getInitialLocale, messages } from './utils/i18n.utils';

export default function AppWrapper() {
  const [locale, setLocale] = useState(getInitialLocale());

  useEffect(() => {
    // Save locale preference to localStorage
    localStorage.setItem('preferredLocale', locale);
  }, [locale]);

  return (
    <StrictMode>
      <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages[locale]}>
        <App locale={locale} onLocaleChange={setLocale} />
      </IntlProvider>
    </StrictMode>
  );
}
