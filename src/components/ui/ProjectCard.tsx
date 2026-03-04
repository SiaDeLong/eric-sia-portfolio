'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Minimal card container */}
      <div className="relative flex flex-col border border-dark-border hover:border-dark-text-primary rounded-none h-full overflow-hidden transition-all duration-300">
        {/* Project image */}
        <div className="relative bg-dark-surface w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 space-y-3 p-6">
          {/* Title */}
          <h3 className="font-light text-white text-lg">
            {project.title}
          </h3>

          {/* Description */}
          <p className="flex-1 text-dark-text-secondary text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-transparent px-2 py-1 border border-dark-border rounded-none font-light text-dark-text-secondary text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.liveUrl || project.sourceUrl) && (
            <div className="flex gap-3 pt-4 border-dark-border border-t">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-light text-dark-text-secondary hover:text-dark-text-primary text-sm transition-colors duration-200"
                >
                  Live
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-light text-dark-text-secondary hover:text-dark-text-primary text-sm transition-colors duration-200"
                >
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
