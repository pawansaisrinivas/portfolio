import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiDjango,
  SiSpringboot, SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiLinux, SiTailwindcss, SiC
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbChartHistogram } from 'react-icons/tb';  // Alternative for Power BI

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', Icon: SiPython, color: '#3776AB' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Java', Icon: FaJava, color: '#007396' },
        { name: 'C', Icon: SiC, color: '#A8B9CC' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
        { name: 'Django', Icon: SiDjango, color: '#092E20' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS', Icon: FaAws, color: '#FF9900' },
        { name: 'Git', Icon: SiGit, color: '#F05032' },
        { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
        { name: 'Power BI', Icon: TbChartHistogram, color: '#F2C811' },  // Using chart icon
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-3 bg-dark rounded-lg cursor-pointer"
                  >
                    <skill.Icon size={32} style={{ color: skill.color }} />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 glassmorphism p-6 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Problem Solving', 'Team Leadership', 'Agile Methodologies', 'Communication', 'Time Management'].map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
