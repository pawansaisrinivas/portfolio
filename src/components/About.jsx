import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto glassmorphism rounded-3xl overflow-hidden animate-float shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Pawan Sai Srinivas Panigrahi" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-9xl font-bold text-white">PS</div>';
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
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
              in academics and technical development. I&apos;m AWS Certified Cloud Practitioner and 
              MongoDB Associate Developer, continuously expanding my skill set.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
