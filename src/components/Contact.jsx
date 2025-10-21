import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "56369ae0-5945-47d3-8cbb-7a9f8d9c608b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: formData.name,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert("✅ Message sent successfully! I will get back to you soon.");
      } else {
        setStatus('error');
        alert("❌ Failed to send message. Please try again.");
        console.error('Error:', result);
      }
    } catch (error) {
      setStatus('error');
      alert("❌ An error occurred. Please try again.");
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Let&apos;s create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { Icon: FaEnvelope, text: '2200030829cseh@gmail.com', href: 'mailto:2200030829cseh@gmail.com' },
                { Icon: FaPhone, text: '+91 7995481098', href: 'tel:+917995481098' },
                { Icon: FaMapMarkerAlt, text: 'Guntur, Andhra Pradesh, India', href: '#' },
              ].map(({ Icon, text, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glassmorphism p-4 rounded-xl group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon className="text-white text-xl" />
                  </div>
                  <span className="text-gray-300 group-hover:text-primary transition-colors">
                    {text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glassmorphism p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark rounded-lg text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark rounded-lg text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark rounded-lg text-white border border-gray-700 focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 rounded-lg"
                >
                  <p className="text-green-400 text-center font-semibold">
                    ✓ Message sent successfully!
                  </p>
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg"
                >
                  <p className="text-red-400 text-center font-semibold">
                    ✗ Failed to send. Please try again.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16 text-gray-500"
      >
        <p>© 2025 Pawan Sai Srinivas Panigrahi. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
