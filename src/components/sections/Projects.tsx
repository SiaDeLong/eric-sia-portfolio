'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { portfolioContent } from '@/lib/content';

export default function Projects() {
  const { projects } = portfolioContent.projects;

  return (
    <section id="projects" className="relative px-6 py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

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
            Featured Projects
          </h2>
          <p className="text-dark-text-secondary text-lg md:text-xl">
            A showcase of my recent work in frontend development and design
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
              href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition duration-500" />
              
              {/* Card */}
              <div className="relative flex flex-col bg-dark-surface shadow-2xl border border-purple-500/20 group-hover:border-purple-500/50 rounded-2xl h-full overflow-hidden transition-all duration-300">
                {/* Image container */}
                <div className="relative bg-linear-to-br from-purple-900/20 to-blue-900/20 w-full h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-dark-surface via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-4 p-6">
                  {/* Title */}
                  <h3 className="font-bold text-white group-hover:text-purple-300 text-2xl transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-dark-text-secondary text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-500/10 hover:bg-purple-500/20 backdrop-blur-sm px-3 py-1.5 border border-purple-500/30 hover:border-purple-400/50 rounded-full font-medium text-purple-300 text-xs transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.sourceUrl) && (
                    <div className="flex gap-4 pt-4 border-purple-500/20 border-t">
                      {project.liveUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </motion.button>
                      )}
                      {project.sourceUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 hover:bg-purple-500/10 px-4 py-2 border border-purple-500/50 hover:border-purple-400 rounded-lg font-semibold text-purple-300 text-sm transition-all duration-300"
                        >
                          <FaGithub className="w-4 h-4" />
                          Source Code
                        </motion.button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
