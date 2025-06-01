'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideUp, popIn, staggerContainer, fadeInDelay, fadeIn, slideInRight } from '@/lib/animations';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 blur-xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 12,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/20 blur-xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent-light/20 to-secondary-light/20 dark:from-accent-dark/20 dark:to-secondary-dark/20"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <motion.div
                variants={popIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-[#6EE7B7]/80 via-[#3B82F6]/80 to-[#9333EA]/80 dark:from-[#6366F1]/80 dark:to-[#F472B6]/80 text-white font-semibold text-base shadow-lg backdrop-blur border border-white/20"
              >
                <motion.span
                  animate={{ y: [0, -6, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block mr-2"
                >
                  ✨
                </motion.span>
                Full Stack Developer
              </motion.div>
              
              <motion.h1
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#9333EA] to-[#F472B6] dark:from-[#818CF8] dark:via-[#F472B6] dark:to-[#FBBF24] drop-shadow-lg"
              >
                Elevate Your <span className="block mt-2">Digital Presence</span>
              </motion.h1>
              
              <motion.p
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl leading-relaxed opacity-100"
              >
                I design and build high-impact, visually engaging websites and apps with seamless animations and a focus on user experience. Let's turn your ideas into digital reality.
              </motion.p>
              
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-6 py-4"
              >
                <Link href="/projects" className="group">
                  <motion.button
                    className="px-9 py-4 bg-gradient-to-r from-[#3B82F6] via-[#9333EA] to-[#F472B6] text-white font-bold rounded-2xl shadow-xl flex items-center gap-2 hover:from-[#6366F1] hover:to-[#FBBF24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333EA] transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Projects
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 7, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 1.2, duration: 1 }}
                    >
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.button>
                </Link>
                <Link href="/contact" className="group">
                  <motion.button
                    className="px-9 py-4 border-2 border-[#9333EA] text-[#9333EA] dark:border-[#F472B6] dark:text-[#F472B6] font-bold rounded-2xl hover:bg-[#F472B6]/10 dark:hover:bg-[#9333EA]/10 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333EA] transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Me
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      animate={{ 
                        scale: [1, 1.18, 1],
                        transition: { 
                          duration: 1.2, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        } 
                      }}
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </motion.svg>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Tech Stack Icons */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="pt-8"
              >
                <motion.p 
                  variants={fadeInDelay}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 uppercase tracking-wider"
                >
                  Technologies I Work With
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={staggerContainer}
                >
                  {[
                    { name: 'React', color: 'bg-[#61DAFB] text-[#282C34] hover:bg-[#4fa3c7]' },
                    { name: 'Next.js', color: 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200' },
                    { name: 'TypeScript', color: 'bg-[#3178C6] text-white hover:bg-[#2a6ab8]' },
                    { name: 'Tailwind CSS', color: 'bg-[#38BDF8] text-[#0F172A] hover:bg-[#0ea5e9]' },
                    { name: 'NestJS', color: 'bg-[#E0234E] text-white hover:bg-[#c11f45]' },
                    { name: 'Node.js', color: 'bg-[#339933] text-white hover:bg-[#2d862d]' },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={popIn}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className={`px-4 py-2 ${tech.color} text-white rounded-lg shadow-md text-sm font-medium`}
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Image/Illustration */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Pulsing circle animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B)',
                    backgroundSize: '400% 400%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-800" />
                </motion.div>
                
                {/* Image container */}
                <motion.div 
                  className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.5,
                    rotate: {
                      repeat: Infinity,
                      duration: 10,
                      ease: 'easeInOut'
                    }
                  }}
                >
                  <Image
                    src="/images/mohan.jpg"
                    alt="Profile picture"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

     

      {/* About Me Section - Enhanced with 3D effects and particles */}
      <motion.section
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Particle Background Effect */}
        <div className="absolute inset-0 -z-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-light/10 dark:bg-primary-dark/10"
              style={{
                width: Math.random() * 40 + 10,
                height: Math.random() * 40 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                x: [0, Math.random() * 50 - 25],
                opacity: [0.7, 0],
                scale: [1, Math.random() * 2 + 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About <span className="relative">
              Me
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent-light dark:bg-accent-dark"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* 3D Interactive Card with Profile Image */}
            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-72 h-80 md:w-80 md:h-96 perspective-1000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-full h-full relative preserve-3d transition-all duration-500 cursor-pointer"
                  whileHover={{ rotateY: 15, rotateX: -15 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card Front */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl" style={{ transform: 'translateZ(0px)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-light/80 to-accent-light/80 dark:from-primary-dark/80 dark:to-accent-dark/80 opacity-80 z-10" />
                    <Image
                      src="/images/mohan2.jpg"
                      alt="Profile Image"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end z-20 p-6 text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)' }}>
                      <div>
                        <h3 className="text-2xl font-bold">Mohan</h3>
                        <p className="text-sm opacity-90">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Floating Elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white"
                    style={{ transform: 'translateZ(40px)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.div>
                </motion.div>
                
                {/* Card Reflection/Shadow */}
                <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-black/20 to-transparent blur-xl rounded-full mx-10 z-0" />
              </motion.div>
            </motion.div>
            
            {/* About Content with Animated Skills */}
            <div className="lg:col-span-7">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block">
                  <motion.span
                    className="absolute -left-6 top-1/2 -translate-y-1/2 text-4xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    👋
                  </motion.span>
                </div>
                
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed pl-2 border-l-4 border-primary-light dark:border-primary-dark">
                  Hello! I'm <span className="font-bold text-primary-light dark:text-primary-dark">Mohan</span>, a passionate web developer who transforms ideas into exceptional digital experiences.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in creating modern, responsive websites with cutting-edge technologies and captivating animations.
                  My approach combines technical expertise with creative design to deliver solutions that not only meet but exceed expectations.
                </p>
                
                {/* Animated Skills Bar */}
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Expertise</h3>
                  
                  {[
                    { skill: 'Frontend Development', level: 90, color: 'from-blue-500 to-purple-500' },
                    { skill: 'UI/UX Design', level: 85, color: 'from-pink-500 to-orange-500' },
                    { skill: 'Backend Development', level: 80, color: 'from-green-500 to-teal-500' },
                    { skill: 'Mobile Responsive', level: 95, color: 'from-yellow-500 to-red-500' },
                  ].map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.level}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link href="/about">
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      My Journey
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      className="px-6 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark font-medium rounded-lg hover:bg-primary-light/5 dark:hover:bg-primary-dark/5 flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get in Touch
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section - Enhanced with 3D effects and interactive elements */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:from-transparent dark:via-gray-900/30 dark:to-transparent"></div>
        
        {/* Floating Shapes */}
        {["#FFD700", "#FF6B6B", "#4ECDC4", "#7F7FD5"].map((color, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 dark:opacity-10"
            style={{
              background: color,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Animated Text */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark mb-4 inline-block">
                PORTFOLIO SHOWCASE
              </span>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-accent-light to-secondary-light dark:from-primary-dark dark:via-accent-dark dark:to-secondary-dark"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore my creative work showcasing innovative solutions and cutting-edge technologies.
            </motion.p>
          </div>

          {/* Projects Grid with Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                id: 1,
                title: "E-Commerce Platform",
                description: "A modern e-commerce solution with real-time inventory and payment processing.",
                tags: ["React", "Node.js", "MongoDB"],
                color: "from-blue-500 to-indigo-600",
                icon: "🛒"
              },
              {
                id: 2,
                title: "Portfolio Dashboard",
                description: "Interactive dashboard for tracking investments and financial portfolio performance.",
                tags: ["Next.js", "Chart.js", "Tailwind CSS"],
                color: "from-emerald-500 to-teal-600",
                icon: "📊"
              },
              {
                id: 3,
                title: "Social Media App",
                description: "Feature-rich social platform with real-time messaging and content sharing.",
                tags: ["React Native", "Firebase", "Redux"],
                color: "from-rose-500 to-pink-600",
                icon: "💬"
              }
            ].map((project) => (
              <motion.div
                key={project.id}
                className="group relative h-[400px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: project.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Card Top Gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                
                {/* Card Content */}
                <div className="p-8 h-full flex flex-col">
                  {/* Project Icon with Animation */}
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 shadow-md"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span>{project.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Animated Link */}
                  <Link href={`/projects/${project.id}`} className="mt-auto">
                    <motion.div 
                      className="flex items-center font-medium text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="mr-2">View Details</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </Link>
                  
                  {/* Interactive Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 pt-4 pr-4 transform translate-x-1/2 -translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                      <motion.div 
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Hover Reveal Gradient Overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <motion.button 
                className="relative px-8 py-4 overflow-hidden group bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
              >
                {/* Button Background Animation */}
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-light dark:bg-primary-dark rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center justify-center gap-3 text-primary-light dark:text-primary-dark group-hover:text-primary-dark dark:group-hover:text-primary-light font-medium transition-colors">
                  <span>Explore All Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Interactive Hexagon Grid */}
      <section className="py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-50/50 to-white dark:from-gray-900/50 dark:to-black/30"></div>
        
        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full -z-5 opacity-10 dark:opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
            className="text-primary-light dark:text-primary-dark"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,30 Q35,65 70,30 T100,30"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
            className="text-accent-light dark:text-accent-dark"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,70 Q45,40 80,70 T100,70"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
            className="text-secondary-light dark:text-secondary-dark"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </svg>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary-light dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Technical</span>
              <motion.span
                className="text-primary-light dark:text-primary-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Expertise
              </motion.span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My toolkit of technologies and skills that I've mastered to create exceptional digital experiences.
            </motion.p>
          </div>

          {/* Interactive Skill Hexagons */}
          <div className="relative max-w-5xl mx-auto">
            {/* Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Frontend",
                  icon: "💻",
                  description: "Creating beautiful, responsive user interfaces with modern frameworks",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Backend",
                  icon: "⚙️",
                  description: "Building robust server-side applications and APIs that power web experiences",
                  color: "from-emerald-500 to-green-600"
                },
                {
                  title: "Design",
                  icon: "🎨",
                  description: "Crafting intuitive user experiences with attention to detail and aesthetics",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${category.color}`} />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Hexagon Grid of Skills */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: "JavaScript", level: 90, icon: "</>" },
                { name: "React", level: 85, icon: "⚛️" },
                { name: "Next.js", level: 80, icon: "▲" },
                { name: "TypeScript", level: 75, icon: "TS" },
                { name: "Node.js", level: 80, icon: "🟢" },
                { name: "Tailwind", level: 90, icon: "🌊" },
                { name: "GraphQL", level: 70, icon: "◢" },
                { name: "MongoDB", level: 75, icon: "🍃" },
                { name: "UI/UX", level: 85, icon: "🎨" },
                { name: "Framer", level: 80, icon: "🔄" },
                { name: "CSS", level: 90, icon: "#" },
                { name: "Git", level: 85, icon: "🔄" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                >
                  {/* Hexagon Shape */}
                  <div className="w-24 h-28 flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg relative overflow-hidden"
                       style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                    {/* Skill Level Indicator - fills from bottom based on level */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-light/20 to-primary-light/5 dark:from-primary-dark/20 dark:to-primary-dark/5 transition-all duration-300 group-hover:from-primary-light/30 group-hover:to-primary-light/10 dark:group-hover:from-primary-dark/30 dark:group-hover:to-primary-dark/10"
                      style={{ height: `${skill.level}%` }}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="text-xl mb-1 font-mono">{skill.icon}</span>
                      <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </div>
                    
                    {/* Hover Reveal - Skill Level */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-primary-light/80 to-secondary-light/80 dark:from-primary-dark/80 dark:to-secondary-dark/80">
                      <span className="text-white font-bold text-2xl">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Testimonials Section - Responsive Scroller */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">What Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear directly from people I've worked with.
            </p>
          </motion.div>
        
        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start a project?</h2>
            <p className="text-lg opacity-90 mb-8">
              I'm available for freelance projects. Let's work together to create something amazing.
            </p>
            <Link href="/contact">
              <motion.button 
                className="btn bg-white text-primary-light hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
