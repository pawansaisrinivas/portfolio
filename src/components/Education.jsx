import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'KL University',
      period: '2022 - 2026',
      score: 'CGPA: 9.21/10.0',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Swarna Bharati Jr. College',
      period: '2020 - 2022',
      score: 'Percentage: 84.2%',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Secondary Education (CBSE)',
      institution: 'Gnana Bharati English Medium School',
      period: '2020',
      score: 'Percentage: 77.3%',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1" />
                <div className="hidden md:block w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="glassmorphism p-6 rounded-2xl">
                    <div className={`w-full h-2 bg-gradient-to-r ${edu.gradient} rounded-full mb-4`} />
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-secondary font-bold">{edu.score}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
