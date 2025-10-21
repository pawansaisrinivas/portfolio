import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Forecast API',
      description: 'Real-time weather application with live geolocation, RESTful API integration, and responsive design using MERN stack.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Geolocation API'],
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Peer Review & Collaboration System',
      description: 'Enterprise-grade collaboration platform with JWT authentication, role-based access control, and real-time feedback mechanisms.',
      tech: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'REST API'],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Comprice - Price Comparison Engine',
      description: 'Intelligent web scraping tool with API integration for real-time price tracking across multiple e-commerce platforms.',
      tech: ['Python', 'Django', 'Web Scraping', 'PostgreSQL', 'REST API'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl overflow-hidden group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl font-bold`}>
                {project.title.charAt(0)}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
