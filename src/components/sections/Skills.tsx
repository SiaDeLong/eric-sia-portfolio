'use client';

import { JSX, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaDatabase, FaCloud, FaCode, FaMobile } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import type { Skill } from '@/lib/types';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
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

  const categoryConfig: Record<string, { icon: JSX.Element; color: string }> = {
    'Frontend': { 
      icon: <FaReact className="text-2xl" />, 
      color: 'from-cyan-500 to-blue-500'
    },
    'Backend': { 
      icon: <SiSpringboot className="text-2xl" />, 
      color: 'from-green-500 to-emerald-500'
    },
    'Database': { 
      icon: <FaDatabase className="text-2xl" />, 
      color: 'from-orange-500 to-red-500'
    },
    'Cloud & DevOps': { 
      icon: <FaCloud className="text-2xl" />, 
      color: 'from-purple-500 to-pink-500'
    },
    'Programming': { 
      icon: <FaCode className="text-2xl" />, 
      color: 'from-yellow-500 to-orange-500'
    },
    'Mobile': { 
      icon: <FaMobile className="text-2xl" />, 
      color: 'from-indigo-500 to-purple-500'
    },
  };

  const categories = Object.keys(groupedSkills);

  return (
    <section id="skills" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
            Skills & Technologies
          </h2>
          <p className="text-dark-text-secondary text-base md:text-lg">
            Full-stack expertise across modern development
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="gap-6 space-y-6 columns-1 md:columns-2 lg:columns-3">
          {categories.map((category, catIndex) => {
            const config = categoryConfig[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="mb-6 break-inside-avoid"
              >
                <div className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-linear-to-r ${config.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                  
                  <div className="relative bg-dark-surface/80 backdrop-blur-sm p-6 border border-purple-500/20 hover:border-purple-500/50 rounded-2xl transition-all duration-300">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-purple-500/20 border-b">
                      <div className={`bg-linear-to-br ${config.color} p-2 rounded-lg`}>
                        {config.icon}
                      </div>
                      <h3 className="flex-1 font-bold text-white text-xl">
                        {category}
                      </h3>
                      <span className="font-medium text-dark-text-secondary text-sm">
                        {groupedSkills[category].length}
                      </span>
                    </div>

                    {/* Skills list */}
                    <div className="flex flex-wrap gap-2">
                      {groupedSkills[category].map((skill, index) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.02 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1.5 border border-purple-500/30 hover:border-purple-400/50 rounded-lg text-purple-300 text-sm transition-all duration-200 cursor-default"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
