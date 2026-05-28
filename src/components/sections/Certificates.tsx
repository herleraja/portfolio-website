import { motion } from 'framer-motion';
import { FaCertificate, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { PROFILE_DATA } from '../../utils/constants';
import Card3D from '../common/Card3D';
import { certificatesMessages } from '../../i18n';
import { useCertificates } from '../../hooks/useCertificates';

export default function Certificates() {
  const { formatMessage } = useIntl();
  const { certificates, loading, error } = useCertificates();

  if (loading) {
    return (
      <section
        id="certificates"
        className="py-20 px-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
        style={{ perspective: '1500px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white/90 text-xl">
            {formatMessage(certificatesMessages.subtitle)}...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="certificates"
        className="py-20 px-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
        style={{ perspective: '1500px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white/90 text-xl">
            Error loading certificates. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="certificates"
      className="py-20 px-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
      style={{ perspective: '1500px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white/95">
            {formatMessage(certificatesMessages.title)}{' '}
            <span className="bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
              {formatMessage(certificatesMessages.titleHighlight)}
            </span>
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {formatMessage(certificatesMessages.subtitle)}
          </p>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((certificate, index) => (
              <Card3D
                key={certificate.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 transition-all duration-300 ease-in-out hover:bg-white/15">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full flex flex-col">
                  {/* Certificate Logo/Icon */}
                  <div className="flex items-center justify-center mb-3">
                    {certificate.logo ? (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-1.5">
                        <img
                          src={certificate.logo}
                          alt={`${certificate.issuer} logo`}
                          className="w-full h-full object-contain"
                          onError={e => {
                            // Fallback to certificate icon if image fails to load
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="text-2xl text-[#34d399]">🎓</div>';
                            }
                          }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className="text-4xl text-[#34d399]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}>
                        <FaCertificate />
                      </motion.div>
                    )}
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-sm font-semibold text-white/95 mb-1.5 text-center line-clamp-2">
                    {certificate.name}
                  </h3>

                  {/* Issue Date */}
                  <p className="text-white/60 text-xs text-center mb-3">{certificate.issueDate}</p>

                  {/* Skills */}
                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {certificate.skills.slice(0, 3).map(skill => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded-full text-white/80 border border-white/20">
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded-full text-white/60 border border-white/20">
                          +{certificate.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* View Certificate Link */}
                  {certificate.url && (
                    <motion.a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#34d399] to-[#ec4899] text-white rounded-lg text-xs font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      {formatMessage(certificatesMessages.viewCertificate)}
                      <FaExternalLinkAlt className="text-[10px]" />
                    </motion.a>
                  )}
                </motion.div>
              </Card3D>
            ))}
          </div>

          {/* LinkedIn Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-center">
            <a
              href={PROFILE_DATA.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white/90 hover:bg-white/15 transition-all duration-300">
              <FaLinkedin className="text-2xl text-[#0077b5]" />
              {formatMessage(certificatesMessages.viewAllOnLinkedIn)}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
