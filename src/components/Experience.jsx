import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
              KL
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Station Head</h3>
              <p className="text-primary font-semibold mb-2">KL Radio</p>
              <p className="text-gray-400 mb-4">June 2024 - Present</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▹</span>
                  <span>Leading a dynamic team of 100+ content creators and technical staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▹</span>
                  <span>Developing digital broadcasting solutions and content management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">▹</span>
                  <span>Implementing innovative technical workflows for radio production</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
