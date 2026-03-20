import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { useMemo } from 'react';
import Button from '../common/Button';
import { PROFILE_DATA } from '../../utils/constants';
import Card3D from '../common/Card3D';
import { heroMessages } from '../../i18n';

// Generate particle properties once to avoid calling Math.random during render
const generateParticles = () => {
  return [...Array(30)].map(() => ({
    width: Math.random() * 4 + 2,
    height: Math.random() * 4 + 2,
    initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    animateY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    duration: Math.random() * 10 + 10,
  }));
};

export default function Hero() {
  const { formatMessage } = useIntl();
  const particles = useMemo(() => generateParticles(), []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] px-4 py-16"
      style={{ perspective: '1500px' }}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{
              width: particle.width + 'px',
              height: particle.height + 'px',
            }}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              y: [null, particle.animateY],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block">
            <div className="relative p-1 rounded-full bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7]">
              <img
                src={`https://github.com/${PROFILE_DATA.github.username}.png`}
                alt={PROFILE_DATA.name}
                className="w-32 h-32 rounded-full object-cover bg-dark-950/80 backdrop-blur-lg"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 mb-4">
              {formatMessage(heroMessages.greeting)}{' '}
              <span className="bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
                {PROFILE_DATA.name}
              </span>
            </h1>
          </motion.div>

          {/* Tagline Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8">
            <Card3D className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20">
              <p className="text-xl md:text-2xl text-white/90">{PROFILE_DATA.tagline}</p>
            </Card3D>
          </motion.div>

          {/* Location & Company */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8">
            <Card3D className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-3 border border-white/20">
              <p className="text-white/80">📍 {PROFILE_DATA.location}</p>
            </Card3D>
            <Card3D className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-3 border border-white/20">
              <p className="text-white/80">🏢 {PROFILE_DATA.company}</p>
            </Card3D>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="primary" onClick={() => scrollToSection('projects')}>
              {formatMessage(heroMessages.viewWork)}
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('contact')}>
              {formatMessage(heroMessages.getInTouch)}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center gap-6">
            <motion.a
              href={PROFILE_DATA.github.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-all duration-300 ease-in-out">
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href={PROFILE_DATA.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-all duration-300 ease-in-out">
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href={PROFILE_DATA.stackoverflow.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-white transition-all duration-300 ease-in-out">
              <FaStackOverflow size={32} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60 text-4xl cursor-pointer"
          onClick={() => scrollToSection('about')}>
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
