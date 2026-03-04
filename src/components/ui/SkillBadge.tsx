'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon?: string;
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <div className="px-4 py-2 border border-dark-border hover:border-dark-text-primary rounded-none font-light text-dark-text-secondary hover:text-dark-text-primary transition-all duration-300 cursor-default">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="text-lg" aria-hidden="true">
              {icon}
            </span>
          )}
          <span className="text-sm">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
