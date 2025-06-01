'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FloatingActionButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const FloatingActionButton = ({
  href,
  icon,
  label,
  className = '',
}: FloatingActionButtonProps) => {
  return (
    <motion.div
      className={`fixed right-8 bottom-8 z-40 ${className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-light/30 dark:focus:ring-primary-dark/30"
        aria-label={label}
      >
        <span className="text-2xl">{icon}</span>
        <span className="sr-only">{label}</span>
      </Link>
    </motion.div>
  );
};

export default FloatingActionButton;
