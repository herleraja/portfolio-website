import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaBuilding, FaStackOverflow } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { PROFILE_DATA } from '../../utils/constants';
import Card3D from '../common/Card3D';
import { contactMessages } from '../../i18n';

export default function Contact() {
  const { formatMessage } = useIntl();

  const contactMethods = [
    {
      icon: <FaLinkedin />,
      titleKey: contactMessages.methodLinkedinTitle,
      valueKey: contactMessages.methodLinkedinValue,
      link: PROFILE_DATA.social.linkedin,
      color: 'text-[#0077b5]',
    },
    {
      icon: <FaGithub />,
      titleKey: contactMessages.methodGithubTitle,
      value: '@' + PROFILE_DATA.github.username,
      link: PROFILE_DATA.github.url,
      color: 'text-white',
    },
    {
      icon: <FaStackOverflow />,
      titleKey: contactMessages.methodStackoverflowTitle,
      value: '@' + PROFILE_DATA.stackoverflow.userId,
      link: PROFILE_DATA.stackoverflow.url,
      color: 'text-white',
    },
  ];

  const info = [
    {
      icon: <FaMapMarkerAlt />,
      labelKey: contactMessages.infoLocation,
      value: PROFILE_DATA.location,
    },
    {
      icon: <FaBuilding />,
      labelKey: contactMessages.infoCompany,
      value: PROFILE_DATA.company,
    },
  ];
  return (
    <section 
      id="contact" 
      className="py-20 px-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
      style={{ perspective: '1500px' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white/95">
            {formatMessage(contactMessages.title)}{' '}
            <span className="bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
              {formatMessage(contactMessages.titleHighlight)}
            </span>
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {formatMessage(contactMessages.subtitle)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.titleKey.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card3D className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/15">
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 no-underline transition-all duration-300 ease-in-out"
                  >
                    <motion.div
                      className={`text-5xl ${method.color}`}
                      whileHover={{ scale: 1.25, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {method.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white/95">
                      {formatMessage(method.titleKey)}
                    </h3>
                    <p className="text-white/80 text-center">
                      {method.valueKey ? formatMessage(method.valueKey) : method.value}
                    </p>
                  </a>
                </Card3D>
              </motion.div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {info.map((item, index) => (
              <Card3D
                key={item.labelKey.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex items-center gap-4 transition-all duration-300 ease-in-out hover:bg-white/15"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 w-full"
                >
                  <div className="text-4xl text-[#34d399]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {formatMessage(item.labelKey)}
                    </p>
                    <p className="text-lg font-semibold text-white/95">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 text-center text-white/60 text-sm"
          >
            <p>
              © {new Date().getFullYear()} {PROFILE_DATA.name}. {formatMessage(contactMessages.footer)}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


