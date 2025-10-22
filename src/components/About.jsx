'use client';
import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/IMG_6954_1.JPG'; // 🔧 Rename your file to this (no parentheses)

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <img
                src={profileImg}
                alt="Profile photo of Pawan Sai Srinivas Panigrahi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={fadeInRight}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I&apos;m a passionate final-year Computer Science student at KL University with a
              stellar 9.21 CGPA, dedicated to crafting innovative full-stack solutions using
              cutting-edge technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              With expertise in MERN Stack, Django, Spring Boot, and AWS cloud platforms,
              I specialize in building scalable, production-ready applications. My experience
              spans RESTful API development, JWT authentication, database optimization, and
              cloud architecture.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As Station Head of KL Radio, I&apos;ve led a 100-member team while maintaining excellence
              in academics and technical development. I&apos;m an AWS Certified Cloud Practitioner and
              MongoDB Associate Developer, continuously expanding my skill set.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
