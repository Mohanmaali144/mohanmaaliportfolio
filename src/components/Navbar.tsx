'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

type NavLink = {
  href: string;
  label: string;
  icon: string;
  highlight?: boolean;
};

const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Navigation links with icons
  const navLinks: NavLink[] = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: '👤' },
    { href: '/projects', label: 'Projects', icon: '💼' },
    { href: '/resources', label: 'Resources', icon: '📚' },
    { href: '/services', label: 'Services', icon: '🛠️' },
    { href: '/ideas', label: 'Ideas', icon: '💡' },
    { href: '/contact', label: 'Contact', icon: '✉️', highlight: true },
  ];

  // Handle scroll effect with smoother transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  // Handle body scroll lock when mobile menu is open - fixed implementation for mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling on the body when menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      // Cleanup function to ensure scrolling is re-enabled
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };
  
  const linkVariants = {
    hover: { scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400 } },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <motion.header
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo with enhanced animation */}
        <Link href="/" className="relative z-50">
          <motion.div 
            className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-light via-accent-light to-secondary-light dark:from-primary-dark dark:via-accent-dark dark:to-secondary-dark bg-clip-text text-transparent flex items-center"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="mr-1">Mohan Maali</span>
            <motion.span 
              className="text-secondary-light dark:text-secondary-light"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              .
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation - Enhanced with better animations and visual feedback */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="flex items-center space-x-1 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-1 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-opacity-50 rounded-full"
              >
                <motion.div
                  className={`px-4 py-2 rounded-full font-medium relative flex items-center ${
                    link.highlight
                      ? 'bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white shadow-md hover:opacity-90'
                      : pathname === link.href
                      ? 'bg-white dark:bg-gray-800 text-primary-light dark:text-primary-dark shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50'
                  }`}
                  variants={linkVariants}
                  whileHover={link.highlight ? { scale: 1.05 } : 'hover'}
                  whileTap={link.highlight ? { scale: 0.95 } : 'tap'}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="mr-1.5 text-sm">{link.icon}</span>
                  <span>{link.label}</span>
                  {pathname === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-full rounded-full bg-primary-light/10 dark:bg-primary-dark/10"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Theme Toggle Button with enhanced animation */}
          <motion.button
            onClick={toggleTheme}
            className="ml-3 p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.svg
                  key="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ scale: 0, rotate: 90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu Button - Simple and reliable */}
        <motion.button
          className="md:hidden relative z-50 p-2.5 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>

        {/* Mobile Menu - Simple dropdown for better reliability */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-40 border-t border-gray-200 dark:border-gray-800"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
            >
              <div className="p-6">
                <div className="text-center mb-8">
                  <motion.h3 
                    className="text-xl font-medium text-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Menu
                  </motion.h3>
                </div>
                
                <nav className="flex flex-col items-center space-y-3 w-full">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      className="w-full overflow-hidden"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
                    >
                      <Link href={link.href}>
                        <motion.div
                          className={`w-full py-4 px-5 rounded-2xl flex items-center justify-between text-lg font-medium transition-all ${
                            link.highlight
                              ? 'bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white shadow-md hover:opacity-90'
                              : pathname === link.href
                              ? 'bg-gradient-to-r from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 text-primary-light dark:text-primary-dark shadow-sm'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80'
                          }`}
                          whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center">
                            <span className="text-xl mr-3">{link.icon}</span>
                            <span>{link.label}</span>
                          </div>
                          
                          {pathname === link.href && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2.5 h-2.5 rounded-full bg-primary-light dark:bg-primary-dark"
                            />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Social links */}
                <motion.div 
                  className="mt-12 flex justify-center gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 + 0.3 }}
                >
                  {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map((social, index) => (
                    <motion.a 
                      key={social}
                      href="#" 
                      className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-lg">{
                        social === 'Twitter' ? '🐦' : 
                        social === 'GitHub' ? '💻' : 
                        social === 'LinkedIn' ? '🔗' : '📸'
                      }</span>
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Theme toggle in mobile menu */}
                <motion.div
                  className="mt-6 pb-6 flex justify-center items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 + 0.5 }}
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                  </span>
                  <motion.button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9, rotate: -15 }}
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
