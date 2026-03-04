'use client';

import { motion } from 'framer-motion';
import { AboutContent } from '@/lib/types';

interface AboutProps {
  content: AboutContent;
}

export default function About({ content }: AboutProps) {
  const { summary } = content;

  const highlights = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="relative px-6 py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
            About Me
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-3 mb-16">
          {/* Key highlights */}
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg transition duration-500 blur" />
              <div className="relative bg-dark-surface p-8 border border-dark-border hover:border-purple-500/50 rounded-lg text-center transition-all duration-300">
                <div className="bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3 font-bold text-transparent text-5xl md:text-6xl">
                  {item.number}
                </div>
                <div className="font-medium text-dark-text-secondary text-sm md:text-base uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary - concise and powerful */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative mx-auto max-w-4xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-20 group-hover:opacity-30 blur-xl rounded-2xl transition duration-500" />
          <div className="relative bg-dark-surface/50 backdrop-blur-sm p-8 md:p-12 border border-purple-500/30 rounded-2xl">
            <p className="font-light text-white text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
              {summary}
            </p>
          </div>
        </motion.div>

        {/* Core strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail-Oriented'].map((strength, index) => (
            <motion.span
              key={strength}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-500/10 hover:bg-purple-500/20 backdrop-blur-sm px-6 py-3 border border-purple-500/30 hover:border-purple-400/50 rounded-full font-medium text-purple-300 text-sm md:text-base transition-all duration-300 cursor-default"
            >
              {strength}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
