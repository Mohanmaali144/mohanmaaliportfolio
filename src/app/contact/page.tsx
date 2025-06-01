'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  fadeIn, fadeInDelay, slideUp, slideInLeft, slideInRight,
  popIn, bounce, pulse, float, staggerContainer, scaleUp
} from '@/lib/animations';
import { sendMail } from '@/lib/send-mail';

export default function Contact() {
  // Refs for scroll animations
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view for animations
  const isFormInView = useInView(formRef, { once: false, amount: 0.3 });
  const isInfoInView = useInView(infoRef, { once: false, amount: 0.3 });
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });

  // Animation controls
  const formControls = useAnimation();
  const infoControls = useAnimation();
  const heroControls = useAnimation();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [formFocus, setFormFocus] = useState<string | null>(null);

  // Trigger animations when elements come into view
  useEffect(() => {
    if (isFormInView) formControls.start('visible');
    if (isInfoInView) infoControls.start('visible');
    if (isHeroInView) heroControls.start('visible');
  }, [isFormInView, isInfoInView, isHeroInView, formControls, infoControls, heroControls]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFormFocus(field);
  };

  const handleBlur = () => {
    setFormFocus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission with a more realistic delay
    try {
      await sendMail({
        sendTo: formData.email,
        templateName: 'contact',
        subject: 'Contact Inquiry',
        variables: formData,
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animated background shapes
  const shapes = [
    { color: 'from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark', delay: 0 },
    { color: 'from-secondary-light to-primary-light dark:from-secondary-dark dark:to-primary-dark', delay: 1.5 },
    { color: 'from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark', delay: 0.8 },
    { color: 'from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark', delay: 2.2 },
  ];

  return (
    <div className="pt-24 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-20 dark:opacity-10 pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut",
              delay: shape.delay,
              times: [0, 0.5, 1]
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}vw`,
              height: `${Math.random() * 40 + 20}vh`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24" ref={heroRef}>
        <div className="container-custom relative z-10">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block"
              variants={popIn}
            >
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark relative">Connect</span>
              <motion.span
                className="absolute -right-8 -top-6 text-5xl"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, 0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ✨
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={fadeInDelay}
            >
              Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and ideas.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formControls}
              variants={slideInLeft}
              className="relative group"
            >
              {/* 3D Card Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/30 to-accent-light/30 dark:from-primary-dark/30 dark:to-accent-dark/30 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl p-8 transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 dark:bg-black/5 rounded-xl backdrop-blur-sm -z-10"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between mb-6"
                >
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                  <motion.div
                    className="text-3xl"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    ✉️
                  </motion.div>
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn} className={`relative ${formFocus === 'name' ? 'z-10' : ''}`}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition-all duration-300"
                        whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        whileFocus={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      {formFocus === 'name' && (
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark rounded-md -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className={`relative ${formFocus === 'email' ? 'z-10' : ''}`}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition-all duration-300"
                        whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        whileFocus={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      {formFocus === 'email' && (
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark rounded-md -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className={`relative ${formFocus === 'subject' ? 'z-10' : ''}`}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <div className="relative">
                      <motion.select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition-colors"
                        whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        whileFocus={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      >
                        <option value="">Select a subject</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Other">Other</option>
                      </motion.select>
                      {formFocus === 'subject' && (
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark rounded-md -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className={`relative ${formFocus === 'message' ? 'z-10' : ''}`}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent outline-none transition-all duration-300 resize-none"
                        whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        whileFocus={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      {formFocus === 'message' && (
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark rounded-md -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-md text-green-800 dark:text-green-200"
                    >
                      Your message has been sent successfully. I'll get back to you soon!
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-md text-red-800 dark:text-red-200"
                    >
                      There was an error sending your message. Please try again later.
                    </motion.div>
                  )}
                </motion.form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark inline-block">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Feel free to reach out to me through any of the following methods. I'll get back to you as soon as possible.
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                  whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  variants={slideInLeft}
                >
                  <div className="bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark p-3 rounded-full text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                  whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  variants={slideInLeft}
                >
                  <div className="bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark p-3 rounded-full text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      San Francisco, California
                    </p>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={fadeIn}>
                  <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                      { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                      { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                      { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
