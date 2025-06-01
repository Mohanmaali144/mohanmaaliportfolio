'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, MotionValue } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiInfo, FiGithub } from 'react-icons/fi';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

// Project data with enhanced details for a more engaging presentation
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  featured: boolean;
  technologies: string[];
  link: string;
  github: string;
  color: string;
  completed: string;
  challenge: string;
  solution: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    subtitle: 'Full-stack shopping experience',
    description: 'A fully responsive e-commerce platform built with Next.js, featuring product filtering, cart functionality, and secure payment integration with Stripe. The platform includes user authentication, order tracking, and an admin dashboard.',
    longDescription: 'This comprehensive e-commerce solution delivers a seamless shopping experience across all devices. Built with performance and scalability in mind, it features server-side rendering for optimal SEO, dynamic product filtering, real-time inventory management, and secure checkout flows. The admin dashboard provides detailed analytics, order management, and content control.',
    image: '/images/projects/project1.jpg',
    gallery: ['/images/projects/project1-detail1.jpg', '/images/projects/project1-detail2.jpg', '/images/projects/project1-detail3.jpg'],
    category: 'Web Development',
    featured: true,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB', 'Redux'],
    link: 'https://ecommerce-demo.example.com',
    github: 'https://github.com/yourusername/ecommerce-platform',
    color: '#4F46E5',
    completed: 'June 2024',
    challenge: 'Implementing a secure and scalable payment system while ensuring a smooth user experience across multiple device types.',
    solution: "Utilized Stripe's secure payment API with custom hooks for state management and responsive design patterns for consistent UI across devices."
  },
  {
    id: 2,
    title: 'Portfolio Website',
    subtitle: 'Creative showcase with animations',
    description: 'A creative portfolio website with smooth animations and transitions, showcasing projects in an interactive gallery with 3D effects and parallax scrolling.',
    longDescription: 'This portfolio website pushes the boundaries of web animation while maintaining excellent performance. It features custom-built interactive elements, 3D card effects, scroll-triggered animations, and theme switching. The project gallery uses advanced Framer Motion animations for page transitions and hover effects.',
    image: '/images/projects/project2.jpg',
    gallery: ['/images/projects/project2-detail1.jpg', '/images/projects/project2-detail2.jpg'],
    category: 'Web Design',
    featured: true,
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'GSAP', 'Three.js'],
    link: 'https://portfolio-demo.example.com',
    github: 'https://github.com/yourusername/portfolio-website',
    color: '#EC4899',
    completed: 'May 2024',
    challenge: 'Creating engaging animations that enhance the user experience without compromising performance or accessibility.',
    solution: 'Implemented code-splitting and lazy loading techniques while using hardware-accelerated animations for smooth performance.'
  },
  {
    id: 3,
    title: 'Task Management App',
    subtitle: 'Productivity tool with real-time updates',
    description: 'A productivity application for managing tasks and projects with drag-and-drop functionality, real-time updates, and collaborative features.',
    longDescription: 'This task management application helps teams stay organized with intuitive project boards, task assignments, and deadline tracking. It features real-time updates using Firebase, drag-and-drop task organization, customizable workflows, and detailed progress analytics. The app includes dark mode support and offline functionality.',
    image: '/images/projects/project3.jpg',
    gallery: ['/images/projects/project3-detail1.jpg', '/images/projects/project3-detail2.jpg'],
    category: 'Web Application',
    featured: false,
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'React DnD', 'Redux'],
    link: 'https://taskapp-demo.example.com',
    github: 'https://github.com/yourusername/task-management-app',
    color: '#0EA5E9',
    completed: 'April 2024',
    challenge: 'Implementing a responsive drag-and-drop interface that works seamlessly across devices while maintaining real-time synchronization.',
    solution: 'Combined React DnD for desktop interactions with touch-friendly controls for mobile, all synchronized through Firebase Realtime Database.'
  },
  {
    id: 4,
    title: 'Travel Blog',
    subtitle: 'Content-rich travel experiences',
    description: 'A travel blog with a custom CMS, image optimization, interactive maps showing travel destinations, and immersive storytelling features.',
    longDescription: 'This travel blog combines rich content with interactive elements to create immersive travel stories. It features a custom Sanity.io CMS for easy content management, automatic image optimization for fast loading, interactive maps with visited locations, and a newsletter subscription system. The blog includes social sharing integration and related content suggestions.',
    image: '/images/projects/project4.jpg',
    gallery: ['/images/projects/project4-detail1.jpg', '/images/projects/project4-detail2.jpg'],
    category: 'Web Development',
    featured: false,
    technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'Mapbox', 'Vercel'],
    link: 'https://travelblog-demo.example.com',
    github: 'https://github.com/yourusername/travel-blog',
    color: '#10B981',
    completed: 'March 2024',
    challenge: 'Creating a content-rich experience that loads quickly and engages users with interactive elements.',
    solution: 'Implemented Next.js image optimization and incremental static regeneration for fast page loads while integrating interactive maps.'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    subtitle: 'Health data visualization',
    description: 'A mobile-first web application for tracking workouts, nutrition, and fitness progress with comprehensive data visualization and goal setting.',
    longDescription: 'This fitness application helps users track their health journey with intuitive data entry and powerful visualization tools. It features customizable workout plans, nutrition tracking with calorie calculations, progress charts using Chart.js, goal setting and achievement tracking, and optional social sharing. The app includes offline support for tracking workouts without an internet connection.',
    image: '/images/projects/project5.jpg',
    gallery: ['/images/projects/project5-detail1.jpg', '/images/projects/project5-detail2.jpg'],
    category: 'Web Application',
    featured: false,
    technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB', 'Express', 'PWA'],
    link: 'https://fitness-demo.example.com',
    github: 'https://github.com/yourusername/fitness-tracker',
    color: '#F59E0B',
    completed: 'February 2024',
    challenge: 'Creating intuitive data visualizations that motivate users while ensuring data accuracy and privacy.',
    solution: 'Developed custom Chart.js components with animations that reveal insights while implementing secure data storage practices.'
  },
  {
    id: 6,
    title: 'Restaurant Website',
    subtitle: 'Interactive dining experience',
    description: 'A modern website for a restaurant with online reservation system, menu display, food ordering, and integration with delivery services.',
    longDescription: 'This restaurant website enhances the dining experience with beautiful food photography and seamless ordering. It features an interactive menu with filtering options, real-time table reservation system, online ordering with customization options, integration with delivery services, and a customer loyalty program. The site includes location-based features to find nearby restaurants.',
    image: '/images/projects/project6.jpg',
    gallery: ['/images/projects/project6-detail1.jpg', '/images/projects/project6-detail2.jpg'],
    category: 'Web Design',
    featured: false,
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Stripe'],
    link: 'https://restaurant-demo.example.com',
    github: 'https://github.com/yourusername/restaurant-website',
    color: '#8B5CF6',
    completed: 'January 2024',
    challenge: 'Creating a visually appealing experience that also functions efficiently for reservations and online ordering.',
    solution: 'Balanced stunning visuals with performance optimization while implementing a streamlined reservation and ordering system.'
  },
];

// Define the Category type
type Category = {
  id: string;
  name: string;
  description: string;
  count: number;
};

// Enhanced categories with icons and descriptions for a more engaging filter experience
const categories: Category[] = [
  { id: 'all', name: 'All Projects', description: 'View my complete portfolio of work', count: projects.length },
  { id: 'web-development', name: 'Web Development', description: 'Full-stack web applications and sites', count: projects.filter(p => p.category === 'Web Development').length },
  { id: 'web-design', name: 'Web Design', description: 'Creative and visually stunning interfaces', count: projects.filter(p => p.category === 'Web Design').length },
  { id: 'web-application', name: 'Web Applications', description: 'Interactive and feature-rich web apps', count: projects.filter(p => p.category === 'Web Application').length },
];

// Custom hook for parallax scrolling effect
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Project Card component with enhanced animations and interactions
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
    hover: {
      y: -15,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.3 } }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden ${isHovered ? 'z-10' : 'z-0'}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered ? `0 20px 40px -20px ${project.color}40, 0 0 15px ${project.color}30` : '0 10px 30px -15px rgba(0,0,0,0.2)'
      }}
    >
      {/* Project Image with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: isHovered ? 0.7 : 0.4 }}
        />
        <motion.div
          className="w-full h-full"
          variants={imageVariants}
        >
          <Image
            src={project.image || '/images/placeholder.jpg'}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
          >
            {project.category}
          </span>
        </div>
        
        {/* Title and Subtitle */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 z-20"
          initial={{ y: 10, opacity: 0.9 }}
          animate={{ y: isHovered ? 0 : 10, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-1"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-300"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {project.subtitle}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Project Content */}
      <motion.div 
        className="p-6"
        initial={{ minHeight: '180px' }}
        animate={{ height: showDetails ? 'auto' : 'auto' }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-visible">
          {project.technologies.map((tech: string, i: number) => (
            <motion.span 
              key={i}
              className="text-xs px-2 py-1 rounded-full mb-1"
              style={{ backgroundColor: `${project.color}15`, color: project.color }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Expanded Content */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Challenge</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.challenge}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Solution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Completed</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.completed}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex justify-between mt-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="flex items-center gap-1 text-sm font-medium"
            style={{ color: project.color }}
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
          >
            <FiInfo size={16} />
            {showDetails ? 'Less Info' : 'More Info'}
          </motion.button>
          
          <div className="flex gap-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub size={18} />
              </motion.a>
            )}
            
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, { stiffness: 300, damping: 40 });
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false });

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => {
      // Convert category to lowercase and replace spaces with hyphens to match activeCategory format
      const normalizedCategory = project.category.toLowerCase().split(' ').join('-');
      return normalizedCategory === activeCategory;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30 dark:opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600 blur-3xl"></div>
          <div className="absolute bottom-10 right-[15%] w-72 h-72 rounded-full bg-gradient-to-r from-pink-300 to-orange-300 dark:from-pink-600 dark:to-orange-600 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-green-300 to-teal-300 dark:from-green-600 dark:to-teal-600 blur-3xl"></div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            ref={headerRef}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30 backdrop-blur-sm border border-indigo-500/30 dark:border-purple-500/30"
            >
              <span className="text-indigo-700 dark:text-indigo-300 font-medium">Creative Portfolio</span>
            </motion.div>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
            >
              My Creative <span className="block mt-2">Projects</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Explore my portfolio of innovative digital experiences that blend creativity with technical excellence.
            </motion.p>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              })}
            >
              <HiOutlineChevronDoubleDown className="text-3xl text-indigo-600 dark:text-indigo-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Filter by Category</h2>
            <p className="text-gray-600 dark:text-gray-400">Discover projects by type</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative overflow-hidden rounded-xl p-4 h-24 flex flex-col justify-between transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white shadow-lg shadow-indigo-500/20 dark:shadow-indigo-700/30 scale-105'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-750'
                }`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700"></div>
                </div>
                <div className="text-left">
                  <span className="text-sm font-medium opacity-80">{category.description}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">{category.name}</span>
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-black/10 dark:bg-white/10">{category.count}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid with Enhanced Cards */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {activeCategory === 'all' ? 'All Projects' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} to explore
            </p>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24 px-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                There are no projects in the selected category. Try selecting a different category or check back later.
              </p>
              <motion.button
                onClick={() => setActiveCategory('all')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action with Enhanced Design */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-900 opacity-90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-md">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              I'm passionate about creating exceptional digital experiences. Let's collaborate and turn your vision into reality.
            </p>
            <Link href="/contact">
              <motion.button 
                className="px-8 py-4 bg-white text-indigo-600 hover:text-indigo-700 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
