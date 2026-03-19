import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/common/Navigation';
import RainEffect from './components/common/RainEffect';
import RainMusic from './components/common/RainMusic';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import type { LocaleProps } from './types/i18n.types';

function App({ locale, onLocaleChange }: LocaleProps) {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] relative">
        <RainEffect />
        <RainMusic />
        <Navigation locale={locale} onLocaleChange={onLocaleChange} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </HelmetProvider>
  );
}

export default App;


