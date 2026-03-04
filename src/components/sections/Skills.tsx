'use client';

import { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaPaintBrush, FaStar, FaTools } from 'react-icons/fa';
import type { Skill } from '@/lib/types';

interface SkillsProps {
  skills: Skill[];
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-xl transition duration-500 blur" />
      
      <div className="relative bg-dark-surface/80 shadow-lg backdrop-blur-sm px-6 py-4 border border-purple-500/20 hover:border-purple-500/50 rounded-xl transition-all duration-300">
        <span className="font-medium text-white group-hover:text-purple-300 text-base md:text-lg transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Group skills by category
  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {};
    
    skills.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    
    return groups;
  }, [skills]);

  const categoryOrder = ['Frontend', 'Styling', 'Animation', 'Tools'];
  const sortedCategories = categoryOrder.filter(cat => groupedSkills[cat]);

  const categoryIcons: Record<string, JSX.Element> = {
    'Frontend': <FaReact className="text-purple-400 text-4xl" />,
    'Styling': <FaPaintBrush className="text-blue-400 text-4xl" />,
    'Animation': <FaStar className="text-yellow-400 text-4xl" />,
    'Tools': <FaTools className="text-green-400 text-4xl" />
  };

  return (
    <section ref={sectionRef} id="skills" className="relative px-6 py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-blue-500/5 to-transparent pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-dark-text-secondary text-lg md:text-xl">
            Expertise across modern web development
          </p>
        </motion.div>

        {/* Skills grid by category */}
        <div className="space-y-16">
          {sortedCategories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                {categoryIcons[category]}
                <h3 className="font-bold text-white text-3xl md:text-4xl">
                  {category}
                </h3>
                <div className="flex-1 bg-linear-to-r from-purple-500/50 to-transparent h-px" />
              </div>

              {/* Skills grid */}
              <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {groupedSkills[category].map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
