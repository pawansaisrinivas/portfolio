import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDatabase } from 'react-icons/fa';
import { SiSalesforce, SiRedhat } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      Icon: FaAws,
      color: '#FF9900',
    },
    {
      name: 'MongoDB Associate Developer',
      issuer: 'MongoDB University',
      Icon: FaDatabase,
      color: '#47A248',
    },
    {
      name: 'Salesforce AI Specialist',
      issuer: 'Salesforce',
      Icon: SiSalesforce,
      color: '#00A1E0',
    },
    {
      name: 'Red Hat Enterprise Developer',
      issuer: 'Red Hat',
      Icon: SiRedhat,
      color: '#EE0000',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glassmorphism p-6 rounded-2xl text-center group"
            >
              <cert.Icon
                size={64}
                style={{ color: cert.color }}
                className="mx-auto mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
