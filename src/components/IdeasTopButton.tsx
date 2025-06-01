"use client";
import { useState } from "react";
import Link from "next/link";

export default function IdeasTopButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end mb-20">
      <div
        className={`mb-2 px-3 py-1 rounded bg-gray-900 text-white text-xs shadow transition-opacity duration-200 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        Go to Ideas
      </div>
      <Link
        href="/ideas"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-2xl shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-400"
        aria-label="Go to Ideas Page"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span role="img" aria-label="Lightbulb">💡</span>
      </Link>
    </div>
  );
}

