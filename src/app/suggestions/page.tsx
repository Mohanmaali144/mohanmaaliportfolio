'use client';

import dynamic from 'next/dynamic';

// This is a client component that will be dynamically imported
const SuggestionsClient = dynamic(() => import('./SuggestionsClient'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="animate-pulse text-lg text-gray-600 dark:text-gray-300">
        Loading suggestions form...
      </div>
    </div>
  ),
  ssr: false
});

export default function SuggestionsPage() {
  return (
    <main>
      <SuggestionsClient />
    </main>
  );
}
