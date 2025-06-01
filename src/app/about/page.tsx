'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  fadeIn, fadeInDelay, slideUp, slideInLeft, slideInRight, 
  staggerContainer, popIn, bounce, pulse, float, scaleUp, flipIn 
} from '@/lib/animations';

export default function About() {
  // Skills data
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Webpack', 'Jest'] },
    { category: 'Other', items: ['UI/UX Design', 'Responsive Design', 'Performance Optimization', 'SEO', 'Accessibility'] },
  ];

  // Experience data
  const experiences = [
    {
      period: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      description: 'Lead the development of modern web applications using React, Next.js, and TypeScript. Implemented responsive designs and animations using Tailwind CSS and Framer Motion.',
    },
    {
      period: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained client websites and web applications. Collaborated with designers to implement pixel-perfect UI components.',
    },
    {
      period: '2019 - 2021',
      title: 'Web Developer',
      company: 'Creative Agency',
      description: 'Created responsive websites for clients across various industries. Worked with WordPress, HTML, CSS, and JavaScript.',
    },
  ];

  // Education data
  const education = [
    {
      period: '2015 - 2019',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Focused on web development, UI/UX design, and software engineering principles.',
    },
    {
      period: '2020',
      degree: 'Advanced Frontend Development Certification',
      institution: 'Tech Academy',
      description: 'Specialized training in modern JavaScript frameworks and responsive design techniques.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/10 blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-secondary-light/10 to-primary-light/10 dark:from-secondary-dark/10 dark:to-primary-dark/10 blur-3xl"
          />
        </div>
        
        <div className="container-custom relative z-10">
          {/* Mobile Image - Only visible on small screens */}
          <motion.div 
            variants={slideInLeft}
            className="block lg:hidden mb-10 mx-auto max-w-xs"
          >
            <div className="relative w-full aspect-square">
              {/* Decorative Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border-2 border-dashed border-primary-light/20 dark:border-primary-dark/20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-5px] rounded-full border-2 border-dashed border-secondary-light/20 dark:border-secondary-dark/20"
              />
              
              {/* Glowing background */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.03, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 blur-xl"
              />
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                <Image
                  src="/images/mohan2.jpg"
                  alt="Mohan Maali"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
          >
            {/* Desktop Image - Only visible on large screens */}
            <motion.div 
              variants={slideInLeft}
              className="hidden lg:block lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square">
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary-light/20 dark:border-primary-dark/20"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-10px] rounded-full border-2 border-dashed border-secondary-light/20 dark:border-secondary-dark/20"
                />
                
                {/* Glowing background */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.03, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-light/20 to-secondary-light/20 dark:from-primary-dark/20 dark:to-secondary-dark/20 blur-xl"
                />
                
                {/* Image Container */}
                <div className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                  <Image
                    src="/images/mohan2.jpg"
                    alt="Mohan Maali"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <motion.span 
                  variants={fadeInDelay}
                  className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
                >
                  Discover My Story
                </motion.span>
                <motion.h1 
                  variants={slideUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  About <span className="text-primary-light dark:text-primary-dark relative inline-block">
                    Me
                    <motion.span 
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1 }}
                      className="absolute bottom-2 left-0 h-1 bg-secondary-light dark:bg-secondary-dark rounded-full"
                    />
                  </span>
                </motion.h1>
              </div>
              
              <motion.div variants={slideUp} className="space-y-5">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm a <span className="font-semibold text-primary-light dark:text-primary-dark">passionate web developer</span> with expertise in creating modern, responsive, and animated websites using cutting-edge technologies.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  With over 5 years of experience in web development, I specialize in building beautiful user interfaces with React, Next.js, and Tailwind CSS, enhanced with smooth animations using Framer Motion.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm dedicated to creating accessible, performant, and visually appealing web experiences that help businesses and individuals achieve their goals online.
                </p>
              </motion.div>
              
              {/* Quick Stats */}
              <motion.div 
                variants={fadeInDelay}
                className="grid grid-cols-3 gap-3 md:gap-4 pt-4"
              >
                <div className="text-center p-3 md:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark mb-1"
                  >
                    5+
                  </motion.div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                </div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark mb-1"
                  >
                    50+
                  </motion.div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 md:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark mb-1"
                  >
                    30+
                  </motion.div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Clients</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-light/5 dark:bg-secondary-dark/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeInDelay}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
            >
              My Expertise
            </motion.span>
            <motion.h2 
              variants={slideUp}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
            >
              Professional Skills
            </motion.h2>
            <motion.p 
              variants={slideUp}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Technologies I've worked with and mastered throughout my career
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:border-primary-light/30 dark:hover:border-primary-dark/30"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center group"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary-light dark:bg-secondary-dark mr-3 transition-all duration-300 group-hover:w-4 group-hover:bg-gradient-to-r group-hover:from-primary-light group-hover:to-secondary-light dark:group-hover:from-primary-dark dark:group-hover:to-secondary-dark"></span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-r from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Continuous Learning & Growth
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Next.js 13', 'Tailwind CSS', 'Framer Motion', 'GraphQL', 'Node.js', 'MongoDB', 'Docker'].map((tech, index) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-gray-900/50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-primary-light/5 to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeInDelay}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
            >
              My Journey
            </motion.span>
            <motion.h2 
              variants={slideUp}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
            >
              Work Experience
            </motion.h2>
            <motion.p 
              variants={slideUp}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              My professional journey and key milestones throughout my career
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-primary-light/20 via-secondary-light/20 to-primary-light/20 dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-primary-dark/20"></div>
            
            <div className="space-y-8 md:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div 
                      whileHover={{ x: index % 2 === 0 ? 'md:-10' : 'md:10' }}
                      className={`p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md md:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg md:hover:shadow-xl ${
                        index % 2 === 0 ? 'hover:border-primary-light/30' : 'hover:border-secondary-light/30'
                      }`}
                    >
                      <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-2 ${
                        index % 2 === 0 ? 'bg-primary-light/10 text-primary-light' : 'bg-secondary-light/10 text-secondary-light'
                      }`}>
                        {exp.period}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-sm md:text-base text-primary-light dark:text-primary-dark font-medium mb-2">
                        {exp.company}
                      </div>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot - Mobile dot is different */}
                  <div className="hidden md:block relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-primary-light dark:border-primary-dark shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-primary-light dark:bg-primary-dark animate-ping opacity-20"></div>
                  </div>
                  
                  {/* Mobile Timeline dot */}
                  <div className="md:hidden absolute left-0 top-6 -ml-2.5 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800 bg-primary-light dark:bg-primary-dark shadow-md z-10"></div>
                  
                  {/* Empty space for alignment on desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
              
              {/* Animated end line */}
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: '100px', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mx-auto w-0.5 bg-gradient-to-b from-secondary-light/20 to-transparent dark:from-secondary-dark/20"
              ></motion.div>
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic background and continuous learning journey.
            </p>
          </motion.div>

          <div className="space-y-12 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideInRight}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-secondary-light dark:border-secondary-light"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-secondary-light dark:bg-secondary-light" />
                <div className="mb-1 text-sm font-medium text-primary-light dark:text-primary-dark">
                  {edu.period}
                </div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  {edu.institution}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Personal Interests */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary-light/5 dark:bg-secondary-dark/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeInDelay}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
            >
              My Passions
            </motion.span>
            <motion.h2 
              variants={slideUp}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark"
            >
              Personal Interests
            </motion.h2>
            <motion.p 
              variants={slideUp}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Beyond coding, these are the things that fuel my creativity and bring balance to my life
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Photography', 
                icon: '📷',
                description: 'Capturing moments and telling stories through my lens, with a focus on landscape and street photography.',
                color: 'from-blue-400 to-cyan-400',
                darkColor: 'from-blue-500 to-cyan-500',
                iconBg: 'bg-blue-100 dark:bg-blue-900/30'
              },
              { 
                title: 'Hiking & Nature', 
                icon: '🥾',
                description: 'Exploring scenic trails and connecting with nature to find inspiration and peace.',
                color: 'from-emerald-400 to-teal-400',
                darkColor: 'from-emerald-500 to-teal-500',
                iconBg: 'bg-emerald-100 dark:bg-emerald-900/30'
              },
              { 
                title: 'Reading', 
                icon: '📚',
                description: 'Diving into books about technology, psychology, and science fiction to expand my knowledge.',
                color: 'from-amber-400 to-orange-400',
                darkColor: 'from-amber-500 to-orange-500',
                iconBg: 'bg-amber-100 dark:bg-amber-900/30'
              },
              { 
                title: 'Culinary Arts', 
                icon: '🍳',
                description: 'Experimenting with global cuisines and perfecting recipes in my kitchen lab.',
                color: 'from-rose-400 to-pink-400',
                darkColor: 'from-rose-500 to-pink-500',
                iconBg: 'bg-rose-100 dark:bg-rose-900/30'
              },
              { 
                title: 'Travel', 
                icon: '✈️',
                description: 'Discovering new cultures, cuisines, and landscapes around the world.',
                color: 'from-purple-400 to-indigo-400',
                darkColor: 'from-purple-500 to-indigo-500',
                iconBg: 'bg-purple-100 dark:bg-purple-900/30'
              },
              { 
                title: 'Music', 
                icon: '🎵',
                description: 'Playing guitar and exploring different genres to express creativity beyond code.',
                color: 'from-violet-400 to-fuchsia-400',
                darkColor: 'from-violet-500 to-fuchsia-500',
                iconBg: 'bg-violet-100 dark:bg-violet-900/30'
              },
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:border-primary-light/30 dark:hover:border-primary-dark/30"
              >
                {/* Hover overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color}/5 dark:${interest.darkColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  {/* Icon with animated background */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl ${interest.color}/10 dark:${interest.darkColor}/10`}
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <div className={`absolute inset-2 rounded-xl ${interest.iconBg} flex items-center justify-center shadow-inner`}>
                      <span className="text-3xl">{interest.icon}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                    {interest.title}
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-transparent border-t-primary-light/10 dark:border-t-primary-dark/10 border-r-primary-light/10 dark:border-r-primary-dark/10 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[30px] border-l-[30px] border-transparent border-b-secondary-light/10 dark:border-b-secondary-dark/10 border-l-secondary-light/10 dark:border-l-secondary-dark/10 rounded-bl-2xl"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Connect Over Shared Interests!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              If you share any of these interests or just want to chat about them, I'd love to connect with you!
            </p>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
