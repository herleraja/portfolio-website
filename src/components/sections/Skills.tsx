import { motion } from 'framer-motion';
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiKubernetes,
  SiTailwindcss,
} from 'react-icons/si';
import { useIntl } from 'react-intl';
import { PROFILE_DATA } from '../../utils/constants';
import { ReactElement } from 'react';
import Card3D from '../common/Card3D';
import { skillsMessages } from '../../i18n';

const techIcons: { [key: string]: ReactElement } = {
  React: <FaReact size={40} className="text-[#61DAFB]" />,
  JavaScript: <SiJavascript size={40} className="text-[#F7DF1E]" />,
  Java: <FaJava size={40} className="text-[#007396]" />,
  Python: <FaPython size={40} className="text-[#3776AB]" />,
  TypeScript: <SiTypescript size={40} className="text-[#3178C6]" />,
  'Spring Boot': <SiSpringboot size={40} className="text-[#6DB33F]" />,
  'Node.js': <FaNodeJs size={40} className="text-[#339933]" />,
  PostgreSQL: <SiPostgresql size={40} className="text-[#336791]" />,
  Docker: <FaDocker size={40} className="text-[#2496ED]" />,
  Kubernetes: <SiKubernetes size={40} className="text-[#326CE5]" />,
  Git: <FaGitAlt size={40} className="text-[#F05032]" />,
  AWS: <FaAws size={40} className="text-[#FF9900]" />,
};

export default function Skills() {
  const { formatMessage } = useIntl();

  const skillCategories = [
    {
      titleKey: skillsMessages.categoryPrimarySkills,
      skills: PROFILE_DATA.skills.primary,
      icon: <FaReact className="text-[#34d399]" />,
    },
    {
      titleKey: skillsMessages.categoryLanguages,
      skills: PROFILE_DATA.skills.languages,
      icon: <SiJavascript className="text-[#ec4899]" />,
    },
    {
      titleKey: skillsMessages.categoryFrontend,
      skills: PROFILE_DATA.skills.frontend,
      icon: <SiTailwindcss className="text-[#a855f7]" />,
    },
    {
      titleKey: skillsMessages.categoryBackend,
      skills: PROFILE_DATA.skills.backend,
      icon: <FaNodeJs className="text-[#34d399]" />,
    },
    {
      titleKey: skillsMessages.categoryDatabases,
      skills: PROFILE_DATA.skills.databases,
      icon: <FaDatabase className="text-[#ec4899]" />,
    },
    {
      titleKey: skillsMessages.categoryDevops,
      skills: PROFILE_DATA.skills.devops,
      icon: <FaDocker className="text-[#a855f7]" />,
    },
    {
      titleKey: skillsMessages.categoryCloud,
      skills: PROFILE_DATA.skills.cloud,
      icon: <FaAws className="text-[#34d399]" />,
    },
    {
      titleKey: skillsMessages.categoryOther,
      skills: PROFILE_DATA.skills.other,
      icon: <FaCloud className="text-[#ec4899]" />,
    },
  ];
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-[#667eea] to-[#764ba2]"
      style={{ perspective: '1500px' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white/95">
            {formatMessage(skillsMessages.title)}{' '}
            <span className="bg-gradient-to-r from-[#34d399] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
              {formatMessage(skillsMessages.titleHighlight)}
            </span>
          </h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {formatMessage(skillsMessages.subtitle)}
          </p>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mb-16 justify-items-center">
            {Object.entries(techIcons).map(([name, icon], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex flex-col items-center gap-2">
                <Card3D className="p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 transition-all duration-300 ease-in-out hover:bg-white/15">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 5 }}
                    transition={{ duration: 0.3 }}>
                    {icon}
                  </motion.div>
                </Card3D>
                <span className="text-sm text-white/80">{name}</span>
              </motion.div>
            ))}
          </div>

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card3D
                key={category.titleKey.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-300 ease-in-out hover:bg-white/15">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white/95">
                      {formatMessage(category.titleKey)}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map(skill => (
                      <li key={skill} className="text-white/80 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#34d399] to-[#ec4899] flex-shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
