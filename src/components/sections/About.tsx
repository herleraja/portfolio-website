import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { useGitHub } from '../../hooks/useGitHub';
import { useStackOverflow } from '../../hooks/useStackOverflow';
import { PROFILE_DATA } from '../../utils/constants';
import Card3D from '../common/Card3D';
import { aboutMessages, commonMessages } from '../../i18n';

export default function About() {
  const { formatMessage } = useIntl();
  const { user, repos } = useGitHub(PROFILE_DATA.github.username);
  const { user: soUser } = useStackOverflow(PROFILE_DATA.stackoverflow.userId.toString());

  const stats = [
    {
      icon: <FaCode />,
      messageKey: aboutMessages.statsPublicRepos,
      value: user?.public_repos || repos.length || '13+',
      color: 'text-[#34d399]',
    },
    {
      icon: <FaUsers />,
      messageKey: aboutMessages.statsGithubFollowers,
      value: user?.followers || '30+',
      color: 'text-[#ec4899]',
    },
    {
      icon: <FaLaptopCode />,
      messageKey: aboutMessages.statsStackOverflowRep,
      value: soUser?.reputation || '28',
      color: 'text-[#a855f7]',
    },
    {
      icon: <FaRocket />,
      messageKey: aboutMessages.statsSoBadges,
      value: soUser
        ? soUser.badge_counts.gold + soUser.badge_counts.silver + soUser.badge_counts.bronze
        : '71',
      color: 'text-[#fbbf24]',
    },
  ];

  const highlights = [
    {
      titleKey: aboutMessages.highlightIotTitle,
      descriptionKey: aboutMessages.highlightIotDescription,
      icon: '🌐',
    },
    {
      titleKey: aboutMessages.highlightFullstackTitle,
      descriptionKey: aboutMessages.highlightFullstackDescription,
      icon: '💻',
    },
    {
      titleKey: aboutMessages.highlightCloudTitle,
      descriptionKey: aboutMessages.highlightCloudDescription,
      icon: '☁️',
    },
    {
      titleKey: aboutMessages.highlightOpensourceTitle,
      descriptionKey: aboutMessages.highlightOpensourceDescription,
      icon: '🚀',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
      style={{ perspective: '1500px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white/95">
            {formatMessage(aboutMessages.title)}{' '}
            <span className="bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
              {formatMessage(aboutMessages.titleHighlight)}
            </span>
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {formatMessage(aboutMessages.subtitle)}
          </p>

          {/* Main Description Card */}
          <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12 transition-all duration-300 ease-in-out hover:bg-white/15">
            <p className="text-lg leading-relaxed text-white/90 mb-4">
              {formatMessage(aboutMessages.descriptionPart1)}{' '}
              <span className="bg-gradient-to-r from-[#34d399] to-[#ec4899] bg-clip-text text-transparent font-semibold">
                {PROFILE_DATA.company}
              </span>
              {formatMessage(aboutMessages.descriptionPart2)}
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-4">
              {formatMessage(aboutMessages.descriptionPart3)}{' '}
              <span className="bg-gradient-to-r from-[#34d399] to-[#ec4899] bg-clip-text text-transparent font-semibold">
                React
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-[#ec4899] to-[#a855f7] bg-clip-text text-transparent font-semibold">
                Java
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#34d399] bg-clip-text text-transparent font-semibold">
                Python
              </span>
              , {formatMessage(commonMessages.and)}{' '}
              <span className="bg-gradient-to-r from-[#34d399] to-[#a855f7] bg-clip-text text-transparent font-semibold">
                TypeScript
              </span>
              {formatMessage(aboutMessages.descriptionPart4)}
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              {formatMessage(aboutMessages.descriptionPart5)}{' '}
              <span className="bg-gradient-to-r from-[#ec4899] to-[#a855f7] bg-clip-text text-transparent font-semibold">
                {PROFILE_DATA.location}
              </span>
              {formatMessage(aboutMessages.descriptionPart6)}
            </p>
          </Card3D>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card3D
                key={stat.messageKey.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center transition-all duration-300 ease-in-out hover:bg-white/15">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <motion.div
                    className={`text-5xl mb-2 ${stat.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}>
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-white/95 mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{formatMessage(stat.messageKey)}</div>
                </motion.div>
              </Card3D>
            ))}
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card3D
                key={highlight.titleKey.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-300 ease-in-out hover:bg-white/15">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <div className="text-5xl mb-3">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold text-white/95 mb-2">
                    {formatMessage(highlight.titleKey)}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {formatMessage(highlight.descriptionKey)}
                  </p>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
