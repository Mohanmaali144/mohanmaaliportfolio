'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaThumbsUp, FaRegComment, FaHeart, FaRocket, FaStar, FaLightbulb } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import type { Idea, Comment } from '.';

// Animation variants
const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 22px 30px -8px rgba(0, 0, 0, 0.15), 0 12px 15px -8px rgba(0, 0, 0, 0.08)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
};

const buttonVariants = {
  hover: { scale: 1.15, transition: { duration: 0.2, ease: 'easeOut' } },
  tap: { scale: 0.9, transition: { duration: 0.1 } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut',
      delay: 0.1
    } 
  }
};

const badgeVariants = {
  initial: { scale: 0, rotate: -15 },
  animate: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 10,
      delay: 0.2 
    } 
  }
};

// Reward badges based on XP
const getRewardBadge = (xp: number) => {
  if (xp >= 20) return { 
    text: 'Legendary', 
    icon: <FaRocket className="text-purple-500" />, 
    color: 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-700 dark:from-purple-600/30 dark:to-indigo-600/30 dark:text-purple-300',
    glow: 'shadow-lg shadow-purple-500/20 dark:shadow-purple-700/30',
    border: 'border border-purple-300 dark:border-purple-700/50'
  };
  if (xp >= 15) return { 
    text: 'Epic', 
    icon: <FaStar className="text-amber-500" />, 
    color: 'bg-gradient-to-r from-amber-400/20 to-yellow-500/20 text-amber-700 dark:from-amber-500/30 dark:to-yellow-600/30 dark:text-amber-300',
    glow: 'shadow-md shadow-amber-500/20 dark:shadow-amber-700/30',
    border: 'border border-amber-300 dark:border-amber-700/50'
  };
  if (xp >= 10) return { 
    text: 'Rare', 
    icon: <FaHeart className="text-rose-500" />, 
    color: 'bg-gradient-to-r from-rose-400/20 to-pink-500/20 text-rose-700 dark:from-rose-500/30 dark:to-pink-600/30 dark:text-rose-300',
    glow: 'shadow-md shadow-rose-500/10 dark:shadow-rose-700/20',
    border: 'border border-rose-300 dark:border-rose-700/50'
  };
  if (xp >= 5) return { 
    text: 'Common', 
    icon: <FaLightbulb className="text-sky-500" />, 
    color: 'bg-gradient-to-r from-sky-400/20 to-blue-500/20 text-sky-700 dark:from-sky-500/30 dark:to-blue-600/30 dark:text-sky-300',
    glow: 'shadow shadow-sky-500/10 dark:shadow-sky-700/20',
    border: 'border border-sky-300 dark:border-sky-700/50'
  };
  return { 
    text: 'New', 
    icon: null, 
    color: 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 dark:from-gray-700/50 dark:to-gray-600/50 dark:text-gray-300',
    glow: '',
    border: 'border border-gray-300 dark:border-gray-600/50'
  };
};

interface IdeaCardProps {
  idea: Idea;
  replyingTo: string | null;
  newComment: string;
  onReaction: (id: string, type: 'like' | 'dislike') => void;
  onReply: (id: string) => void;
  onCommentChange: (value: string) => void;
  onAddComment: (ideaId: string) => void;
}

export default function IdeaCard({
  idea,
  replyingTo,
  newComment,
  onReaction,
  onReply,
  onCommentChange,
  onAddComment,
}: IdeaCardProps) {
  const [localLikes, setLocalLikes] = useState<number>(idea.likes);
  const [localDislikes, setLocalDislikes] = useState<number>(idea.dislikes);
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);
  const [showComments, setShowComments] = useState(false);
  
  const rewardBadge = getRewardBadge(idea.xp);
  const isTopIdea = idea.xp >= 15;

  const handleReaction = (type: 'like' | 'dislike') => {
    if (userReaction === type) {
      // Remove reaction
      setUserReaction(null);
      if (type === 'like') {
        setLocalLikes((likes: number) => likes - 1);
      } else {
        setLocalDislikes((dislikes: number) => dislikes - 1);
      }
    } else {
      // Change reaction
      if (type === 'like') {
        setLocalLikes((likes: number) => likes + (userReaction === 'dislike' ? 2 : 1));
        setLocalDislikes((dislikes: number) => userReaction === 'dislike' ? dislikes - 1 : dislikes);
      } else {
        setLocalDislikes((dislikes: number) => dislikes + (userReaction === 'like' ? 2 : 1));
        setLocalLikes((likes: number) => userReaction === 'like' ? likes - 1 : likes);
      }
      setUserReaction(type);
    }
    onReaction(idea.id, type);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
    if (!showComments && replyingTo !== idea.id) {
      onReply(idea.id);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative rounded-3xl overflow-hidden mb-8 border-0 shadow-2xl group transition-all duration-500"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 60%, rgba(99,102,241,0.14) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(99,102,241,0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 rgba(99,102,241,0.12)'
      }}
    >
      <div className="p-6 relative">
        {/* XP Badge */}
        <motion.div 
          className="absolute -top-4 -right-4 z-20"
          variants={badgeVariants}
          initial="initial"
          animate="animate"
        >
          <div className={`px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-1 shadow-xl bg-gradient-to-tr from-indigo-500/90 to-purple-600/90 border-2 border-white/40 text-white/90 backdrop-blur-2xl animate-badge-glow`}>
            {rewardBadge.icon && (
              <motion.span 
                className="mr-1"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {rewardBadge.icon}
              </motion.span>
            )}
            <span>{rewardBadge.text}</span>
            <span className="ml-1">• {idea.xp} XP</span>
          </div>
        </motion.div>

        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <motion.div 
              className="flex-shrink-0 h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-xl ring-4 ring-indigo-400/40 border-4 border-white/40 animate-avatar-glow"
              whileHover={{ scale: 1.09, rotate: 7 }}
              transition={{ duration: 0.25 }}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{boxShadow: '0 0 0 6px rgba(139,92,246,0.13), 0 6px 24px 0 rgba(99,102,241,0.14)'}}
            >
              {idea.name.charAt(0).toUpperCase()}
            </motion.div>
            <div className="ml-4">
              <div className="flex items-center space-x-2">
                <motion.h3 
                  className="text-2xl font-extrabold bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {idea.name}
                </motion.h3>
                {isTopIdea && (
                  <motion.span 
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(251, 191, 36, 0.5)' }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="mr-1"
                    >
                      <FaStar />
                    </motion.span>
                    Top Idea
                  </motion.span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(idea.timestamp).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-4"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {idea.title && (
            <motion.h4 
              className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              {idea.title}
            </motion.h4>
          )}
          <motion.p 
            className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {idea.content}
          </motion.p>
        </motion.div>

        {idea.imageUrl && (
          <motion.div 
            className="mt-4 overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={idea.imageUrl}
              alt="Idea visualization"
              className="rounded-lg max-h-80 w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              whileHover={{ scale: 1.05 }}
              initial={{ filter: 'blur(5px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-6">
            <motion.button
              onClick={() => handleReaction('like')}
              className={`inline-flex flex-col items-center justify-center group relative ${userReaction === 'like' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'} dark:text-gray-400 dark:hover:text-blue-400 transition-colors`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.2 }}
            >
              <div className="relative">
                <FaThumbsUp className="w-6 h-6" />
                {userReaction === 'like' && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full -z-10"
                    layoutId="reactionIndicator"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-blue-400/20 dark:bg-blue-500/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{localLikes}</span>
              <div className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            <motion.button
              onClick={() => handleReaction('dislike')}
              className={`inline-flex flex-col items-center justify-center group relative ${userReaction === 'dislike' ? 'text-red-500' : 'text-gray-500 hover:text-red-500'} dark:text-gray-400 dark:hover:text-red-400 transition-colors`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="relative">
                <FaThumbsUp className="w-6 h-6 transform rotate-180" />
                {userReaction === 'dislike' && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 rounded-full -z-10"
                    layoutId="reactionIndicator"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-red-400/20 dark:bg-red-500/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{localDislikes}</span>
              <div className="absolute -bottom-1 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            <motion.button
              onClick={toggleComments}
              className={`inline-flex flex-col items-center justify-center group relative ${showComments ? 'text-green-500' : 'text-gray-500 hover:text-green-500'} dark:text-gray-400 dark:hover:text-green-400 transition-colors`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              <FaRegComment className="w-6 h-6" />
              <span className="text-xs mt-1 font-medium">
                {idea.comments.length}
              </span>
              <div className="absolute -bottom-1 w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            {/* Additional engagement metrics */}
            <div className="flex items-center space-x-1 text-gray-400 dark:text-gray-500">
              <span className="text-xs">•</span>
              <span className="text-xs">{Math.floor(Math.random() * 1000)} views</span>
              <span className="text-xs">•</span>
              <span className="text-xs">{Math.floor(Math.random() * 100)} shares</span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <AnimatePresence>
        {(showComments || replyingTo === idea.id) && (
          <motion.div 
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Add Comment */}
            <motion.div 
              className="flex items-start space-x-3 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                {idea.name.charAt(0).toUpperCase()}
              </motion.div>
              <div className="flex-1">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => onCommentChange(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-white transition-all duration-200 focus:shadow-md backdrop-blur-sm"
                    onKeyPress={(e) => e.key === 'Enter' && onAddComment(idea.id)}
                  />
                  <motion.button
                    onClick={() => onAddComment(idea.id)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center relative overflow-hidden group"
                    whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/30 to-purple-500/30"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                    />
                    <span className="relative z-10">Post</span>
                  </motion.button>
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Press Enter to post, Shift+Enter for new line
                </p>
              </div>
            </motion.div>

            {/* Comments List */}
            {idea.comments.length > 0 && (
              <motion.div 
                className="space-y-4 mt-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {idea.comments.map((comment: Comment, index) => (
                  <motion.div 
                    key={comment.id} 
                    className="flex items-start space-x-3 group"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.3 }
                      }
                    }}
                  >
                    <motion.div 
                      className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-white/20 dark:ring-gray-700/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {comment.author.charAt(0).toUpperCase()}
                    </motion.div>
                    <div className="flex-1 bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-700/90 dark:to-gray-800/90 rounded-xl p-4 shadow-sm group-hover:shadow-md transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:backdrop-blur-md">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {comment.author}
                          </span>
                          {index % 3 === 0 && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800">
                              <FaStar className="mr-1" /> Top Contributor
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(comment.timestamp).toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        {comment.content}
                      </p>
                      <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                          <FaThumbsUp className="w-3 h-3" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                          <FaRegComment className="w-3 h-3" />
                          <span>Reply</span>
                        </button>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {Math.floor(Math.random() * 10)} likes • {Math.floor(Math.random() * 5)} replies
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
  );
}
