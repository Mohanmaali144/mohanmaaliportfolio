'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
      
      const winScroll = document.body.scrollTop || scrolled;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      y: -5,
      rotate: 360,
      transition: { 
        y: { type: 'spring', stiffness: 1000, damping: 10 },
        rotate: { duration: 1, ease: 'easeInOut' }
      }
    },
    tap: { 
      scale: 0.9,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Simple arrow up icon
  const ArrowUpIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  );
  
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                type: 'spring',
                stiffness: 300,
                damping: 20
              }
            }
          }}
          className="fixed right-6 bottom-6 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            aria-label="Back to top"
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light/50 dark:focus:ring-primary-dark/50 overflow-hidden"
          >
            {/* Progress circle */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  className="stroke-white/10"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  className="stroke-white/30"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scrollProgress / 100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ rotate: '-90deg', transformOrigin: '50% 50%' }}
                />
              </svg>
            </div>

            {/* Arrow up icon */}
            <div className="relative z-10">
              <ArrowUpIcon />
            </div>
            
            {/* Ripple effect on hover */}
            <motion.span 
              className="absolute inset-0 rounded-full bg-white/10"
              initial={{ scale: 0, opacity: 0 }}
              animate={isHovered ? { scale: 2, opacity: 0 } : {}}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
