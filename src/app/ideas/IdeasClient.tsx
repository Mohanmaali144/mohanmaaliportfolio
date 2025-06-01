'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaLightbulb, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface IdeaFormData {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface IdeasClientProps {
  onSubmit: (idea: { title: string; description: string; postedBy: string; imageUrl?: string }) => Promise<void> | void;
}

export default function IdeasClient({ onSubmit }: IdeasClientProps) {
  const [formData, setFormData] = useState<IdeaFormData>({
    name: '',
    title: '',
    description: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  // Remove selected image
  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: '' }));
  };

  // Drag-and-drop highlight state
  const [dragActive, setDragActive] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLInputElement | HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      await onSubmit({
        title: formData.title.trim(),
        description: formData.description.trim(),
        postedBy: formData.name.trim() || 'Anonymous',
        imageUrl: formData.imageUrl || undefined
      });
      
      // Show success state
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        title: '',
        description: '',
        imageUrl: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting idea:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[98vw] mx-auto px-2 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_2.2fr] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/80 dark:border-gray-700/80 w-full mx-auto">
          {/* Left side - Header */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-12 xl:p-16 text-white">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 bg-white/20 rounded-lg">
                <FaLightbulb className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Share Your Project Idea</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-indigo-100"
            >
              Have an idea for a project? Share it with us and let's make it happen! We're always looking for new and exciting ideas to work on.
            </motion.p>
          </div>

          {/* Right side - Form */}
          <div className="p-6 sm:p-10 xl:p-12 w-full max-w-none">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-start"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <FaCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      Idea submitted successfully!
                    </p>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      Thank you for sharing your idea with us.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                  <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">(optional)</span>
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-4 text-base border border-gray-300/80 dark:border-gray-600/80 dark:bg-gray-700/30 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Idea Title
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full px-5 py-4 text-base border border-gray-300/80 dark:border-gray-600/80 dark:bg-gray-700/30 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
                  placeholder="A short, descriptive title"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Keep it concise but descriptive
                </p>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative space-y-2">
                  <textarea
                    name="description"
                    id="description"
                    rows={5}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full px-5 py-4 text-base border border-gray-300/80 dark:border-gray-600/80 dark:bg-gray-700/30 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none shadow-sm"
                    placeholder="Describe your idea in detail..."
                  />
                  <div className="absolute bottom-2 right-2">
                    <span className={`text-xs ${formData.description.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                      {formData.description.length}/500
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Be as detailed as possible about your project idea
                </p>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Image (optional)
                </label>
                <label
                  htmlFor="image"
                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 p-6 text-center bg-white/60 dark:bg-gray-800/60 hover:bg-indigo-50 dark:hover:bg-gray-700/60 focus:outline-none ${dragActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' : 'border-gray-300 dark:border-gray-600'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  tabIndex={0}
                >
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-2xl mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16.5 12.75l-4.5 4.5-4.5-4.5M12 4.5v12" />
                      </svg>
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Click to upload or drag & drop</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG, GIF up to 2MB</span>
                  </div>
                </label>
                {formData.imageUrl && (
                  <div className="mt-4 relative group w-fit mx-auto">
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="max-h-40 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-colors"
                      title="Remove image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-10">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2 h-4 w-4" />
                      Submit Idea
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}