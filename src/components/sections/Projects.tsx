import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaBuilding } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { useGitHub } from '../../hooks/useGitHub';
import { PROFILE_DATA } from '../../utils/constants';
import Button from '../common/Button';
import Card3D from '../common/Card3D';
import { projectsMessages } from '../../i18n';

export default function Projects() {
  const { formatMessage } = useIntl();
  const { repos, loading } = useGitHub(
    PROFILE_DATA.github.username,
    PROFILE_DATA.github.contributionOrgs
  );

  // Filter featured projects
  const featuredRepos = repos.filter(repo => 
    PROFILE_DATA.featuredProjects.includes(repo.name)
  );

  // Show top 6 repos by stars if no featured projects
  const displayRepos = featuredRepos.length > 0 
    ? featuredRepos 
    : repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

  return (
    <section 
      id="projects" 
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
            {formatMessage(projectsMessages.title)}{' '}
            <span className="bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
              {formatMessage(projectsMessages.titleHighlight)}
            </span>
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {formatMessage(projectsMessages.subtitle)}
          </p>

          {loading ? (
            <div className="text-center text-white/80 py-12">
              {formatMessage(projectsMessages.loading)}
            </div>
          ) : (
            /* Projects Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayRepos.map((repo, index) => (
                <Card3D
                  key={repo.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex flex-col gap-4 transition-all duration-300 ease-in-out hover:bg-white/15"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col gap-4 h-full"
                  >
                    {/* Project Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white/95 break-words">
                          {repo.name}
                        </h3>
                        {repo.isContribution && repo.contributionOrg && (
                          <div className="flex items-center gap-1 mt-2">
                            <FaBuilding className="text-blue-400 text-xs" />
                            <span className="text-xs text-blue-300 font-medium">
                              {repo.contributionOrg === 'ibm-watson-iot'
                                ? formatMessage(projectsMessages.contributionIbm)
                                : repo.contributionOrg}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.25, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-white/80 hover:text-white text-xl transition-all duration-300 ease-in-out"
                        >
                          <FaGithub />
                        </motion.a>
                        {repo.homepage && (
                          <motion.a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.25, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white/80 hover:text-white text-xl transition-all duration-300 ease-in-out"
                          >
                            <FaExternalLinkAlt />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-white/80 leading-relaxed flex-1 min-h-[3rem]">
                      {repo.description || formatMessage(projectsMessages.noDescription)}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-1 text-white/80">
                        <FaStar className="text-[#fbbf24]" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/80">
                        <FaCodeBranch />
                        <span className="text-sm">{repo.forks_count}</span>
                      </div>
                      {repo.language && (
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/90 border border-white/20">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    {/* Topics/Technologies */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 5).map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/90 border border-white/20"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="secondary"
                        onClick={() => window.open(repo.html_url, '_blank')}
                      >
                        <FaGithub className="mr-2" />
                        {formatMessage(projectsMessages.buttonCode)}
                      </Button>
                      {repo.homepage && (
                        <Button
                          variant="primary"
                          onClick={() => window.open(repo.homepage, '_blank')}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          {formatMessage(projectsMessages.buttonDemo)}
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </Card3D>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}


