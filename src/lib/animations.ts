import { Variants } from 'framer-motion';

// Fade in animation with multiple options
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// Fade in animation with delay
export const fadeInDelay: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' }
  }
};

// Slide up animation with bounce
export const slideUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 15,
      mass: 1,
      duration: 0.8
    }
  }
};

// Slide down animation with bounce
export const slideDown: Variants = {
  hidden: { y: -60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 15,
      mass: 1,
      duration: 0.8
    }
  }
};

// Slide in from left with bounce
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 20,
      mass: 1,
      duration: 0.8
    }
  }
};

// Slide in from right with bounce
export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 20,
      mass: 1,
      duration: 0.8
    }
  }
};

// Staggered children animation with better timing
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

// Fast stagger for lists and grids
export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

// Scale animation with bounce
export const scaleUp: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 15,
      mass: 1,
      duration: 0.8
    }
  }
};

// Pop in animation for attention-grabbing elements
export const popIn: Variants = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 500, 
      damping: 10,
      mass: 1,
      duration: 0.7
    }
  }
};

// Rotate animation with improved physics
export const rotate: Variants = {
  hidden: { rotate: -15, opacity: 0, scale: 0.9 },
  visible: { 
    rotate: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 15,
      mass: 1,
      duration: 0.8
    }
  }
};

// Flip animation for cards
export const flipIn: Variants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: { 
    rotateY: 0, 
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 20,
      duration: 0.8
    }
  }
};

// Hover animation for cards with shadow
export const hoverScale = {
  scale: 1.05,
  y: -5,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: { duration: 0.3, ease: 'easeOut' }
};

// Tap animation for buttons with better feedback
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Hover animation for navigation links
export const navHover = {
  y: -2,
  color: 'var(--color-primary)',
  transition: { duration: 0.2 }
};

// Bounce animation for attention-grabbing elements
export const bounce: Variants = {
  hidden: { y: 0, opacity: 0 },
  visible: { 
    y: [0, -15, 0], 
    opacity: 1,
    transition: { 
      y: {
        repeat: 0,
        duration: 0.8,
        ease: 'easeOut'
      },
      opacity: { duration: 0.3 }
    }
  }
};

// Pulse animation for highlighting elements
export const pulse = {
  scale: [1, 1.05, 1],
  transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' }
};

// Wave animation for loading states or attention
export const wave = {
  x: [0, 10, -10, 10, 0],
  transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' }
};

// Floating animation for background elements
export const float = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
};
