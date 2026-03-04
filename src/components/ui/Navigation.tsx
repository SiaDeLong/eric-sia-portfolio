'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import type { NavItem } from '@/lib/types';

interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({ items }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const { scrollY } = useScroll();

  // Handle scroll direction and visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    
    // Check if at top
    setIsAtTop(currentScrollY < 50);
    
    // Show/hide based on scroll direction
    if (currentScrollY < 100) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      // Scrolling down
      setIsVisible(false);
      setIsMobileMenuOpen(false);
    } else if (currentScrollY < lastScrollY.current) {
      // Scrolling up
      setIsVisible(true);
    }
    
    lastScrollY.current = currentScrollY;
  });

  // Set up Intersection Observer for scroll tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    items.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items]);

  const handleLinkClick = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isLinkActive = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="top-0 right-0 left-0 z-50 fixed flex justify-center px-4 pt-6"
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-surface/80 shadow-2xl shadow-black/40 backdrop-blur-xl border border-purple-500/30 rounded-full"
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 px-4 py-3">
            {items.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background */}
                {isLinkActive(item.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Hover background */}
                <div className={`absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isLinkActive(item.href) ? 'hidden' : ''
                }`} />
                
                {/* Text */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  isLinkActive(item.href)
                    ? 'text-white font-semibold'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center px-6 py-4">
            <span className="font-semibold text-white text-base">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="z-10 relative p-2 text-white hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="md:hidden top-20 right-4 left-4 absolute"
            >
              <div 
                className="bg-dark-surface/95 shadow-2xl shadow-purple-500/20 backdrop-blur-xl p-2 border border-purple-500/30 rounded-2xl"
              >
                {items.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleLinkClick(item.href)}
                    className={`w-full text-left px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isLinkActive(item.href)
                        ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50'
                        : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
