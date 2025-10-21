import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pawan Sai Srinivas Panigrahi
            </span>
          </h1>

          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Cloud Enthusiast',
                2000,
                'AI Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Final-year Computer Science student with 9.21 CGPA, specializing in MERN Stack, 
            Django, Spring Boot, and AWS cloud solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold shadow-lg animate-glow"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 glassmorphism rounded-full text-white font-semibold"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/PAWAN SAI_SDI.pdf"
              download="Pawan_Sai_Srinivas_Resume.pdf"
              className="px-8 py-3 border-2 border-primary rounded-full text-white font-semibold flex items-center gap-2"
            >
              <FaDownload /> Resume
            </motion.a>
          </div>

          <div className="flex gap-6 justify-center">
            {[
              { Icon: FaGithub, href: 'https://github.com/pawansaisrinivas' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/pawan-sai-srinivas-panigrahi-536669258/' },
              { Icon: FaEnvelope, href: 'mailto:2200030829cseh@gmail.com' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-primary transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
