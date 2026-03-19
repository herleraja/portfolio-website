import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { PROFILE_DATA } from '../../utils/constants';
import { navigationMessages } from '../../i18n';
import LanguageSelector from './LanguageSelector';
import type { LocaleProps } from '../../types/i18n.types';

const navItems = [
  { messageKey: navigationMessages.home, href: '#hero' },
  { messageKey: navigationMessages.about, href: '#about' },
  { messageKey: navigationMessages.skills, href: '#skills' },
  { messageKey: navigationMessages.projects, href: '#projects' },
  { messageKey: navigationMessages.contact, href: '#contact' },
];

export default function Navigation({ locale, onLocaleChange }: LocaleProps) {
  const { formatMessage } = useIntl();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#667eea]/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent border-none bg-none cursor-pointer p-0"
          >
            {PROFILE_DATA.name.split(' ').map(word => word[0]).join('')}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.messageKey.id}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 font-medium transition-all duration-300 ease-in-out hover:text-white border-none bg-transparent cursor-pointer text-base px-2 py-1"
              >
                {formatMessage(item.messageKey)}
              </motion.button>
            ))}
            <LanguageSelector currentLocale={locale} onLocaleChange={onLocaleChange} />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/90 text-2xl border-none bg-transparent cursor-pointer p-2 transition-all duration-300 ease-in-out hover:text-white"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4 pb-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.messageKey.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection(item.href);
                    }}
                    className="text-white/90 font-medium px-3 py-3 text-left bg-white/10 rounded-lg border border-white/20 cursor-pointer text-base transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white/30 hover:scale-105"
                  >
                    {formatMessage(item.messageKey)}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <LanguageSelector currentLocale={locale} onLocaleChange={onLocaleChange} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}


