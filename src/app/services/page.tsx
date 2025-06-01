'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: '🌐',
      color: 'from-blue-500 to-indigo-600',
      shortDescription: 'Custom websites built with modern technologies',
      longDescription: 'I create responsive, high-performance websites using the latest frameworks and technologies. From personal blogs to complex e-commerce platforms, I deliver solutions that are both beautiful and functional.',
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Fast loading speeds',
        'Modern UI/UX principles',
        'Cross-browser compatibility',
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: '🎨',
      color: 'from-purple-500 to-pink-600',
      shortDescription: 'Intuitive interfaces with stunning visuals',
      longDescription: 'I design user interfaces that are not only visually appealing but also intuitive and accessible. My design process focuses on creating seamless user experiences that delight and engage your audience.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Accessibility compliance',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    },
    {
      id: 3,
      title: 'E-commerce Solutions',
      icon: '🛒',
      color: 'from-emerald-500 to-teal-600',
      shortDescription: 'Online stores that drive sales and growth',
      longDescription: 'I build e-commerce platforms that help businesses sell products online effectively. From product catalogs to secure payment processing, I create solutions that make online selling simple and profitable.',
      features: [
        'Product catalog management',
        'Secure payment processing',
        'Inventory management',
        'Customer account systems',
        'Order tracking and fulfillment',
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
    },
    {
      id: 4,
      title: 'Mobile App Development',
      icon: '📱',
      color: 'from-orange-500 to-red-600',
      shortDescription: 'Native and cross-platform mobile applications',
      longDescription: 'I develop mobile applications that work seamlessly across different platforms. Using modern frameworks, I create apps that provide native-like experiences while maintaining a single codebase.',
      features: [
        'Cross-platform compatibility',
        'Offline functionality',
        'Push notifications',
        'App store optimization',
        'Performance optimization',
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux'],
    },
    {
      id: 5,
      title: 'Custom API Development',
      icon: '⚙️',
      color: 'from-gray-700 to-gray-900',
      shortDescription: 'Robust backend services and APIs',
      longDescription: 'I build custom APIs and backend services that power web and mobile applications. From database design to server architecture, I create scalable solutions that handle your business logic efficiently.',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'Database optimization',
        'Authentication and authorization',
        'Performance monitoring',
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      icon: '🛠️',
      color: 'from-yellow-500 to-amber-600',
      shortDescription: 'Ongoing support for your digital products',
      longDescription: 'I provide maintenance and support services to keep your websites and applications running smoothly. From security updates to feature enhancements, I ensure your digital products remain up-to-date and secure.',
      features: [
        'Regular security updates',
        'Performance optimization',
        'Bug fixes and troubleshooting',
        'Feature enhancements',
        'Technical support',
      ],
      technologies: ['Git', 'CI/CD', 'Docker', 'AWS'],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 opacity-80" />
        
        {/* Animated shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-light/5 dark:bg-primary-dark/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 20 + 20,
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary-light/10 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark">
                PROFESSIONAL SERVICES
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">Transforming Ideas into</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-accent-light to-secondary-light dark:from-primary-dark dark:via-accent-dark dark:to-secondary-dark">
                Digital Reality
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              I offer end-to-end solutions that help businesses establish a powerful online presence and achieve their digital goals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#services">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white font-medium rounded-xl shadow-lg flex items-center gap-2 mx-auto"
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  whileTap={{ y: 0 }}
                >
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent" />
      </section>
      
      {/* Services Grid Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific needs and goals.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 ${activeService === service.id ? 'ring-4 ring-primary-light dark:ring-primary-dark' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                {/* Card Top Gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                
                {/* Card Content - Collapsed View */}
                <div className={`p-8 ${activeService === service.id ? 'hidden' : 'block'}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.shortDescription}
                  </p>
                  
                  <motion.button
                    className="flex items-center text-primary-light dark:text-primary-dark font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-2">Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
                
                {/* Card Content - Expanded View */}
                <motion.div 
                  className={`p-8 ${activeService === service.id ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-primary-light dark:text-primary-dark mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <motion.button
                      className="flex items-center text-primary-light dark:text-primary-dark font-medium"
                      whileHover={{ x: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Show Less</span>
                    </motion.button>
                    
                    <Link href="/contact">
                      <motion.button
                        className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Request Service
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gray-50 dark:bg-gray-900 skew-y-3 transform origin-top-right" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results for every project.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: 'Discovery',
                description: 'I begin by understanding your business, goals, and requirements through in-depth consultation.',
                icon: '🔍',
                color: 'from-blue-500 to-indigo-600',
              },
              {
                step: 2,
                title: 'Strategy & Planning',
                description: 'Based on the discovery phase, I develop a comprehensive strategy and project roadmap.',
                icon: '📝',
                color: 'from-purple-500 to-pink-600',
              },
              {
                step: 3,
                title: 'Design & Development',
                description: 'I create wireframes, designs, and develop your solution with regular feedback cycles.',
                icon: '💻',
                color: 'from-emerald-500 to-teal-600',
              },
              {
                step: 4,
                title: 'Testing & Refinement',
                description: 'Rigorous testing ensures everything works perfectly before launch, with refinements as needed.',
                icon: '🧪',
                color: 'from-orange-500 to-red-600',
              },
              {
                step: 5,
                title: 'Launch & Support',
                description: 'After a successful launch, I provide ongoing support and maintenance to ensure continued success.',
                icon: '🚀',
                color: 'from-yellow-500 to-amber-600',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Connector Line */}
                {index < 4 && (
                  <div className="absolute left-12 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800" />
                )}
                
                <div className="flex items-start">
                  {/* Step Number with Icon */}
                  <motion.div 
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-br ${process.color} shadow-lg z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-1">{process.icon}</span>
                      <span className="text-sm font-normal">Step {process.step}</span>
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="ml-8 pt-3">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative p-12 md:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white" />
                <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-white" />
              </div>
              
              <div className="relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                  Let's discuss how I can help bring your ideas to life and create something amazing together.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <motion.button
                      className="px-8 py-4 bg-white text-primary-light dark:text-primary-dark font-bold rounded-xl shadow-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get in Touch
                    </motion.button>
                  </Link>
                  
                  <Link href="/projects">
                    <motion.button
                      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View My Work
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
