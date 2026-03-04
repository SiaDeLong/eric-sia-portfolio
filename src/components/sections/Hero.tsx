'use client';

import { motion } from 'framer-motion';
import StaggerContainer from '../animations/StaggerContainer';
import type { HeroContent } from '@/lib/types';

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const { name, title, tagline, ctaText, ctaLink } = content;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(ctaLink);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative flex justify-center items-center px-4 pt-32 pb-20 min-h-screen overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div className="z-10 relative mx-auto max-w-5xl">
        <StaggerContainer staggerDelay={0.15}>
          <motion.h1 
            variants={itemVariants}
            className="bg-clip-text bg-linear-to-r from-white via-purple-400 to-white mb-8 font-bold text-transparent text-6xl md:text-8xl lg:text-9xl text-center leading-tight tracking-tight"
          >
            {name}
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="mb-10 font-semibold text-purple-200/90 text-3xl md:text-4xl lg:text-5xl text-center"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="mx-auto mb-14 max-w-3xl font-light text-dark-text-secondary text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
          >
            {tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-5">
            <motion.a
              href={ctaLink}
              onClick={handleCtaClick}
              className="group inline-flex relative items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 px-12 py-5 rounded-full overflow-hidden font-semibold text-white text-base md:text-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="z-10 relative">{ctaText}</span>
              <svg className="z-10 relative w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 hover:bg-purple-500/10 backdrop-blur-sm px-12 py-5 border-2 border-purple-500/50 hover:border-purple-400 rounded-full font-semibold text-white text-base md:text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </StaggerContainer>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="bottom-8 left-1/2 absolute -translate-x-1/2 transform"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex justify-center border-2 border-dark-border rounded-full w-6 h-10">
          <motion.div
            className="bg-purple-400 mt-2 rounded-full w-1.5 h-1.5"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
