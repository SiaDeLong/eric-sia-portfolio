'use client';

import { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Experience } from '@/lib/types';

interface ExperienceProps {
  experiences: Experience[];
}

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -50 : 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative gap-8 md:gap-16 grid grid-cols-1 md:grid-cols-2 mb-16 md:mb-24"
    >
      {/* Timeline dot and line */}
      <div className="hidden md:block top-0 left-1/2 absolute -translate-x-1/2 transform">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Glowing dot */}
          <div className="z-10 relative bg-purple-500 shadow-lg shadow-purple-500/50 border-4 border-dark-bg rounded-full w-6 h-6" />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ x: isLeft ? x : 0 }}
        className={`${isLeft ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}
      >
        <div className="group relative">
          {/* Card background with gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg transition duration-500 blur" />
          
          <div className="relative bg-dark-surface backdrop-blur-sm p-6 md:p-8 border border-dark-border hover:border-purple-500/50 rounded-lg transition-all duration-300">
            {/* Date badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-purple-500/10 mb-4 px-4 py-1.5 border border-purple-500/30 rounded-full font-medium text-purple-300 text-sm"
            >
              {experience.duration}
            </motion.div>

            {/* Company and role */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-2 font-bold text-white text-2xl md:text-3xl"
            >
              {experience.role}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-6 font-medium text-purple-400 text-lg"
            >
              {experience.company}
            </motion.p>

            {/* Achievements */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="flex items-start gap-3 text-dark-text-secondary"
                >
                  <span className="flex-shrink-0 mt-1 text-purple-500">▹</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>

      {/* Empty space for alternating layout */}
      {isLeft && <div className="hidden md:block" />}
    </motion.div>
  );
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Sort experiences by date in reverse chronological order
  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateB.getTime() - dateA.getTime();
    });
  }, [experiences]);

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="experience" className="relative px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
            Experience
          </h2>
          <p className="text-dark-text-secondary text-lg md:text-xl">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line (desktop only) */}
          <div className="hidden md:block top-0 bottom-0 left-1/2 absolute bg-dark-border w-0.5 -translate-x-1/2 transform">
            <motion.div
              style={{ height: lineHeight }}
              className="bg-gradient-to-b from-purple-500 to-blue-500 w-full origin-top"
            />
          </div>

          {/* Timeline items */}
          <div className="relative">
            {sortedExperiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.startDate}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
