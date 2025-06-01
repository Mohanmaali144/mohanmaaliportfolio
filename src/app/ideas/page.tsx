'use client';

import React, { useState } from 'react';
import IdeasClient from './IdeasClient';

interface Comment {
  user: string;
  text: string;
  date: Date;
}

interface Idea {
  id: number;
  title: string;
  description: string;
  postedBy: string;
  createdAt: Date;
  comments?: Comment[];
}

const sampleIdeas: Idea[] = [
  {
    id: 1,
    title: 'Sustainable City Planning App',
    description: 'An application that helps urban planners design more sustainable and eco-friendly city layouts using real-time environmental data.',
    postedBy: 'Maria Garcia',
    createdAt: new Date('2025-05-28'),
    comments: [
      { user: 'John Doe', text: 'Great idea! This could help a lot of cities.', date: new Date('2025-05-29') },
      { user: 'Jane Smith', text: 'How would you collect real-time data?', date: new Date('2025-05-30') }
    ]
  },
  {
    id: 2,
    title: 'Virtual Reality Fitness Platform',
    description: 'A VR platform that transforms workouts into immersive gaming experiences to make exercise more engaging and fun.',
    postedBy: 'James Wilson',
    createdAt: new Date('2025-05-29'),
    comments: [
      { user: 'Maria Garcia', text: 'I would love to try this!', date: new Date('2025-05-30') }
    ]
  },
  {
    id: 3,
    title: 'AI-Powered Personal Shopping Assistant',
    description: 'A virtual shopping assistant that uses AI to learn user preferences and suggest personalized product recommendations in real-time.',
    postedBy: 'Alex Johnson',
    createdAt: new Date('2025-05-30'),
    comments: []
  }
];

export default function IdeasPage() {
  const [activeTab, setActiveTab] = useState<'view' | 'submit'>('view');
  const [ideas, setIdeas] = useState<Idea[]>(sampleIdeas);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [commentModalIdea, setCommentModalIdea] = useState<Idea | null>(null);
  const [newComment, setNewComment] = useState<string>('');
  const [commentUser, setCommentUser] = useState<string>('');

  const handleNewIdea = (newIdea: Omit<Idea, 'id' | 'createdAt'>) => {
    const ideaWithId = {
      ...newIdea,
      id: Math.max(0, ...ideas.map(i => i.id)) + 1,
      createdAt: new Date()
    };
    setIdeas([...ideas, ideaWithId]);
    setActiveTab('view');
  };

  return (
    <div className="w-full min-h-screen bg-transparent mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300 mb-8 drop-shadow-lg animate-fade-in">
          Innovative Ideas & Inspirations
        </h1>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="-mb-px flex space-x-8 relative">
            {[{ key: 'view', label: 'View All Ideas' }, { key: 'submit', label: 'Submit New Idea' }].map((tab, idx) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'view' | 'submit')}
                className={`relative py-4 px-4 font-semibold text-sm rounded-t-lg transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
        ${activeTab === tab.key
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-pink-100 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:text-indigo-600'}
      `}
                style={{ zIndex: activeTab === tab.key ? 2 : 1 }}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span
                    className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 shadow-md animate-pulse"
                  />
                )}
              </button>
            ))}
          </nav>

        </div>

        {/* Tab Content */}
        <div className="min-h-[70vh]">
          {activeTab === 'view' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea) => (
                <div
                  key={idea.id}
                  className="relative group bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl h-full flex flex-col border border-transparent hover:border-indigo-300 dark:hover:border-indigo-600"
                  style={{ minHeight: '320px' }}
                >
                  {/* Accent Bar */}
                  <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 animate-gradient-x" />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Avatar and Title Row */}
                    <div className="flex items-center mb-4 gap-4">
                      {/* Avatar with initials or fallback icon */}
                      <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg border-4 border-white dark:border-gray-900 relative">
                        {idea.postedBy && idea.postedBy.trim() !== ''
                          ? idea.postedBy
                            .split(' ')
                            .map((n: string) => n[0])
                            .join('')
                          : (
                            <svg className="w-7 h-7 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20c0-2.21 3.582-4 6-4s6 1.79 6 4" /></svg>
                          )}
                      </div>
                      <div className="flex flex-col">
                        {/* Title with gradient text */}
                        <h3 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                          {idea.title}
                        </h3>
                        <span className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-300 font-medium">by {idea.postedBy}</span>
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                      {idea.description}
                    </p>
                    {/* Footer: Posted by and Date */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 text-sm">
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="mr-1" aria-hidden="true"><rect x={3} y={5} width={18} height={16} rx={2} /><path d="M16 3v4M8 3v4M3 9h18" /></svg>
                        <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                          {idea.createdAt.toLocaleDateString()}
                        </span>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        by {idea.postedBy}
                      </span>
                    </div>
                  </div>
                  {/* Rewards, Comments, Likes/Dislikes Row */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 px-4 sm:px-6 py-3 bg-white/60 dark:bg-gray-800/60 border-t border-gray-100 dark:border-gray-700 text-sm font-medium backdrop-blur-sm">
                    {/* Rewards */}
                    <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                      <svg width={18} height={18} fill="currentColor" viewBox="0 0 20 20" className="mr-1" aria-hidden="true"><path d="M10 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 7.62l5.34-.78L10 2z" /></svg>
                      120 pts
                    </span>
                    {/* Comments */}
                    <button
                      className="flex items-center gap-1 text-blue-500 dark:text-blue-400 hover:underline focus:outline-none rounded-full px-2 py-1 sm:px-1 sm:py-0 transition bg-blue-50 dark:bg-blue-950 sm:bg-transparent sm:dark:bg-transparent"
                      style={{ minWidth: 44, minHeight: 32 }}
                      onClick={() => setCommentModalIdea(idea)}
                      aria-label="Show Comments"
                    >
                      <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="mr-1" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      <span className="font-semibold text-base">{idea.comments ? idea.comments.length : 0}</span>
                    </button>
                    {/* Likes/Dislikes */}
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        {/* Thumb Up Icon */}
                        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M14 9V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10.28a2 2 0 0 0 1.98-1.7l1.34-8A2 2 0 0 0 17.62 9H14z" /></svg>
                        25
                      </span>
                      <span className="flex items-center gap-1 text-red-500 dark:text-red-400">
                        {/* Thumb Down Icon */}
                        <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15v4a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-4h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7.72a2 2 0 0 0-1.98 1.7l-1.34 8A2 2 0 0 0 6.38 15H10z" /></svg>
                        2
                      </span>
                    </span>
                    {/* Read More Button */}
                    <button
                      className="ml-4 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-semibold shadow hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                      onClick={() => setSelectedIdea(idea)}
                    >
                      Read More
                    </button>
                  </div>
                  {/* Subtle animated gradient overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full">
              <IdeasClient onSubmit={handleNewIdea} />
            </div>
          )}

          {/* Read More Modal */}
          {selectedIdea && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fade-in">
                <button
                  onClick={() => setSelectedIdea(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="flex items-center gap-6 mb-6">
                  {/* Beautiful Profile Avatar */}
                  <div className="w-16 h-16 min-w-[64px] min-h-[64px] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-extrabold text-3xl shadow-lg border-4 border-white dark:border-gray-900">
                    {selectedIdea.postedBy && selectedIdea.postedBy.trim() !== ''
                      ? selectedIdea.postedBy
                        .split(' ')
                        .map((n: string) => n[0])
                        .join('')
                      : (
                        <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20c0-2.21 3.582-4 6-4s6 1.79 6 4" /></svg>
                      )}
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm mb-1">
                      {selectedIdea.title}
                    </h2>
                    <span className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-300 font-medium">by {selectedIdea.postedBy}</span>
                  </div>
                </div>
                <div className="mb-4 text-gray-700 dark:text-gray-200 whitespace-pre-line leading-relaxed">
                  {selectedIdea.description}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                  Posted: {selectedIdea.createdAt.toLocaleDateString()}
                </div>
              </div>
            </div>
          )}
          {/* Comment Modal */}
          {commentModalIdea && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-fade-in">
                <button
                  onClick={() => { setCommentModalIdea(null); setNewComment(''); setCommentUser(''); }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
                  aria-label="Close Comments"
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">Comments</h2>
                <div className="max-h-48 overflow-y-auto mb-4 space-y-3">
                  {commentModalIdea.comments && commentModalIdea.comments.length > 0 ? (
                    commentModalIdea.comments.map((c, idx) => (
                      <div key={idx} className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-indigo-600 dark:text-indigo-300">{c.user}</span>
                          <span className="text-xs text-gray-500">{new Date(c.date).toLocaleDateString()}</span>
                        </div>
                        <div className="text-gray-800 dark:text-gray-100">{c.text}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">No comments yet.</div>
                  )}
                </div>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    if (!commentUser.trim() || !newComment.trim()) return;
                    const updatedIdeas = ideas.map(idea =>
                      idea.id === commentModalIdea.id
                        ? {
                          ...idea,
                          comments: [
                            ...(idea.comments || []),
                            { user: commentUser.trim(), text: newComment.trim(), date: new Date() }
                          ]
                        }
                        : idea
                    );
                    setIdeas(updatedIdeas);
                    setCommentModalIdea({
                      ...commentModalIdea,
                      comments: [
                        ...(commentModalIdea.comments || []),
                        { user: commentUser.trim(), text: newComment.trim(), date: new Date() }
                      ]
                    });
                    setNewComment('');
                    setCommentUser('');
                  }}
                  className="space-y-2"
                >
                  <textarea
                    className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    rows={3}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow hover:scale-105 transition-transform"
                  >
                    Submit Comment
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

