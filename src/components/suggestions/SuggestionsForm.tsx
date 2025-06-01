'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiAlertCircle } from 'react-icons/fi';

type FormData = {
  type: string;
  message: string;
  name: string;
  email: string;
};

type FormErrors = {
  type?: string;
  message?: string;
  email?: string;
};

export default function SuggestionsForm() {
  const [formData, setFormData] = useState<FormData>({
    type: 'suggestion',
    message: '',
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.type) newErrors.type = 'Please select a type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your feedback! We\'ll get back to you soon.'
      });
      
      // Reset form on success
      setFormData({
        type: 'suggestion',
        message: '',
        name: '',
        email: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark">
          Share Your Thoughts
        </h2>
        
        {submitStatus && (
          <div className={`mb-8 p-4 rounded-lg text-base sm:text-lg ${
            submitStatus.success 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="form-group">
            <label htmlFor="type" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
              Type of Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full px-5 py-3.5 text-base sm:text-lg rounded-xl border-2 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200 ${
                  errors.type ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                }`}
              >
                <option value="suggestion">Suggestion</option>
                <option value="feedback">Feedback</option>
                <option value="guidance">Guidance Request</option>
              </select>
              {errors.type && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FiAlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                </div>
              )}
            </div>
            {errors.type && <p className="mt-2 text-sm sm:text-base text-red-600 dark:text-red-400">{errors.type}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
              Your Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-5 py-4 text-base sm:text-lg rounded-xl border-2 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200 resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                }`}
                placeholder="Share your thoughts, suggestions, or questions in detail..."
              />
              {errors.message && (
                <div className="absolute top-4 right-4">
                  <FiAlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                </div>
              )}
            </div>
            {errors.message && <p className="mt-2 text-sm sm:text-base text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            <div className="form-group">
              <label htmlFor="name" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 text-base sm:text-lg rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                  placeholder="Your name (optional)"
                />
              </div>
            </div>
            
            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3.5 text-base sm:text-lg rounded-xl border-2 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200 ${
                    errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                  }`}
                  placeholder="your@email.com (optional)"
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FiAlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && <p className="mt-2 text-sm sm:text-base text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>
          </div>
          
          <div className="pt-4 sm:pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center px-8 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark text-white font-semibold text-lg sm:text-xl shadow-xl hover:shadow-2xl transform transition-all duration-200 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
      
      <div className="px-6 sm:px-8 py-4 sm:py-5 bg-gray-50 dark:bg-gray-700/50 text-center border-t border-gray-100 dark:border-gray-600/50">
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Your feedback helps me improve. Thank you for taking the time to share your thoughts! 💡
        </p>
      </div>
    </motion.div>
  );
}
