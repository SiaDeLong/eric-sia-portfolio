'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/lib/types';

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

export default function ExperienceItem({ experience, isLast = false }: ExperienceItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative py-8 md:py-12 border-dark-border border-b last:border-b-0"
    >
      {/* Experience content */}
      <div className="flex-1">
        {/* Company and role */}
        <div className="mb-2">
          <h3 className="font-light text-white text-lg md:text-xl">
            {experience.role}
          </h3>
          <p className="font-light text-dark-text-secondary text-sm md:text-base">
            {experience.company}
          </p>
        </div>

        {/* Duration */}
        <p className="mb-4 font-light text-dark-text-muted text-xs md:text-sm">
          {experience.duration} • {experience.startDate} to {experience.endDate}
        </p>

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-3 font-light text-dark-text-secondary text-sm md:text-base leading-relaxed">
              <span className="mt-1 text-dark-text-muted shrink-0">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
