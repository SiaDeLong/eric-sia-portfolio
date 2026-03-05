'use client';

import { motion } from 'framer-motion';
import { ContactContent } from '@/lib/types';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi';

interface ContactProps {
  content: ContactContent;
}

// Icon mapping for social platforms
const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Email: MdEmail,
  Twitter: FaTwitter,
};

export default function Contact({ content }: ContactProps) {
  const { heading, subheading, socialLinks } = content;

  return (
    <section id="contact" className="relative flex justify-center items-center px-6 py-32 min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/10 to-transparent pointer-events-none" />
      
      {/* Floating orbs */}
      <motion.div
        className="top-1/4 left-1/4 absolute bg-purple-500/20 blur-3xl rounded-full w-64 h-64"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="right-1/4 bottom-1/4 absolute bg-blue-500/20 blur-3xl rounded-full w-64 h-64"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="z-10 relative w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-clip-text bg-linear-to-r from-white via-purple-400 to-white mb-6 font-bold text-transparent text-5xl md:text-6xl lg:text-8xl leading-tight"
          >
            {heading}
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-16 max-w-3xl font-light text-dark-text-secondary text-xl md:text-2xl"
          >
            {subheading}
          </motion.p>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative mx-auto mb-16 max-w-3xl"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 opacity-30 group-hover:opacity-50 blur-xl rounded-3xl transition duration-500" />
            
            <div className="relative bg-dark-surface/80 backdrop-blur-sm p-8 md:p-12 border border-purple-500/30 rounded-3xl">
              <p className="mb-8 font-light text-white text-2xl md:text-3xl">
                Ready to bring your ideas to life? Let&apos;s create something amazing together.
              </p>
              
              {/* Email CTA Button */}
              <motion.a
                href="mailto:ericsiadelong@outlook.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-blue-600 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 px-10 py-5 rounded-full font-semibold text-white text-lg transition-all duration-300"
              >
                <MdEmail className="w-6 h-6" />
                Get In Touch
                <HiArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="mb-6 text-dark-text-secondary text-sm uppercase tracking-wider">
              Connect With Me
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.platform];
                
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                    aria-label={`Visit ${link.platform} profile`}
                  >
                    {/* Glow on hover */}
                    <div className="absolute -inset-2 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-2xl transition duration-300 blur" />
                    
                    <div className="relative flex items-center gap-3 bg-dark-surface/80 backdrop-blur-sm px-6 py-4 border border-purple-500/30 group-hover:border-purple-500/60 rounded-2xl transition-all duration-300">
                      <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      <span className="font-medium text-white">
                        {link.platform}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-dark-text-muted text-sm"
          >
            © 2024 All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
