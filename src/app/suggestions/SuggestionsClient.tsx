'use client';

import { motion, LazyMotion, domAnimation } from 'framer-motion';
import Image from 'next/image';
import SuggestionsForm from '@/components/suggestions/SuggestionsForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function SuggestionsClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
        <div className="w-full px-4 sm:px-6 mx-auto">
          <motion.div 
            className="max-w-6xl mx-auto mb-8 md:mb-12 px-2 sm:px-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="text-left mb-8 md:mb-12"
              variants={fadeInUp}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark">
                Share Your Thoughts
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Your feedback is invaluable in helping me improve. Whether you have a suggestion, 
                feedback, or need guidance, I'd love to hear from you!
              </p>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <motion.div 
                className="w-full lg:w-1/2 relative"
                variants={fadeInUp}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6, delay: 0.4 }
                }}
              >
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <SuggestionsForm />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-2xl"></div>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/projects/project1.jpg"
                    alt="Feedback Illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Your Voice Matters</h3>
                    <p className="text-gray-200">
                      Every suggestion helps me create a better experience. I appreciate you taking the time to share your thoughts!
                    </p>
                  </div>
                </div>
                
                {/* Animated floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-primary-light/80 dark:bg-primary-dark/80 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-light/80 dark:bg-accent-dark/80 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </LazyMotion>
  );
}
