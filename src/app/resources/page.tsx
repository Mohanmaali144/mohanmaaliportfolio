"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Temporary resource data (replace with real data source later)
type Resource = {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  tags: string[];
  url: string;
  icon: string;
  content?: string; // Optional content for snippets
};

const resources: Resource[] = [
  {
    id: 1,
    title: "Awesome Snippet",
    description: "Reusable code for API requests.",
    type: "snippet",
    category: "Frontend",
    tags: ["React", "API"],
    url: "#",
    icon: "📄",
    content: "fetch('/api/data').then(res => res.json())", // Example snippet content
  },
  {
    id: 2,
    title: "Dev Tool",
    description: "Boost productivity with this CLI tool.",
    type: "tool",
    category: "Tools",
    tags: ["CLI", "Productivity"],
    url: "#",
    icon: "🛠️",
  },
  {
    id: 3,
    title: "Downloadable PDF",
    description: "Cheat sheet for CSS Flexbox.",
    type: "file",
    category: "Frontend",
    tags: ["CSS", "Flexbox"],
    url: "/resources/snippets/flexbox-cheatsheet.pdf",
    icon: "📥",
  },
  {
    id: 4,
    title: "GitHub Repo",
    description: "Star my open source portfolio template!",
    type: "repo",
    category: "Frontend",
    tags: ["Next.js", "Open Source"],
    url: "https://github.com/yourname/portfolio",
    icon: "🌟",
  },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

// For syntax highlighting, you can use a library like react-syntax-highlighter in a real project

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showSnippet, setShowSnippet] = useState<{open: boolean, content: string}>({open: false, content: ""});

  const filtered = resources.filter((r) => {
    const matchesCategory = selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Animated background shapes
  const bgShapes = (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-light to-accent-light opacity-30 rounded-full blur-3xl z-0"
        animate={{ y: [0, 20, 0], x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-primary-dark to-accent-dark opacity-20 rounded-full blur-3xl z-0"
        animate={{ y: [0, -20, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </>
  );

  // Featured resource (first one)
  const featured = resources[0];

  return (
    <div className="relative min-h-screen py-12 px-4 md:px-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-x-hidden">
      {bgShapes}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Animated Hero Section */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark drop-shadow-lg mt-16">
            Developer Resources
          </h1>
          <motion.p
            className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Curated tools, code, and assets for developers. Search, filter, and explore the best resources to boost your workflow!
          </motion.p>
        </motion.div>

        {/* Featured Resource */}
        <motion.div
          className="mb-10 bg-gradient-to-r from-primary-light/90 to-accent-light/80 dark:from-primary-dark/80 dark:to-accent-dark/70 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-6 border-2 border-primary-light dark:border-primary-dark"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-5xl md:text-6xl animate-bounce" title={featured.type}>{featured.icon}</span>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{featured.title}</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-3">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {featured.tags.map((tag) => (
                <span key={tag} className="bg-white/80 dark:bg-gray-700 text-xs px-2 py-1 rounded-full border border-primary-light dark:border-primary-dark text-primary-dark dark:text-primary-light font-semibold shadow-sm">{tag}</span>
              ))}
            </div>
            <div className="flex gap-2">
              {featured.type === "file" ? (
                <a href={featured.url} download className="px-4 py-1.5 rounded-lg bg-primary-light text-white dark:bg-primary-dark text-base font-semibold shadow hover:bg-accent-light dark:hover:bg-accent-dark transition-colors" title="Download">
                  Download
                </a>
              ) : featured.type === "snippet" ? (
                <button
                  className="px-4 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-base font-semibold shadow hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors"
                  onClick={() => setShowSnippet({open: true, content: featured.content || ""})}
                  title="Show code"
                >
                  Show Code
                </button>
              ) : (
                <a href={featured.url} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-base font-semibold shadow hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors" title="Visit">
                  Visit
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search resources..."
            className="flex-1 px-5 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark outline-none text-lg shadow-sm transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${selectedCategory === cat ? "bg-primary-light text-white dark:bg-primary-dark border-primary-light dark:border-primary-dark shadow-lg" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-primary-light/10 dark:hover:bg-primary-dark/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {filtered.map((r) => (
            <motion.div
              key={r.id}
              className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-7 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-primary-light dark:hover:border-primary-dark cursor-pointer"
              whileHover={{ scale: 1.045 }}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="absolute top-4 right-4 text-3xl group-hover:animate-bounce" title={r.type}>{r.icon}</span>
              <h2 className="text-xl font-bold mb-1 text-primary-dark dark:text-primary-light">{r.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{r.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {r.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full border border-primary-light dark:border-primary-dark text-primary-dark dark:text-primary-light font-semibold shadow-sm">{tag}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {r.type === "file" ? (
                  <a href={r.url} download className="px-3 py-1 rounded-md bg-primary-light text-white dark:bg-primary-dark text-sm font-medium hover:bg-accent-light dark:hover:bg-accent-dark transition-colors shadow-sm" title="Download">
                    Download
                  </a>
                ) : r.type === "snippet" ? (
                  <button
                    className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm font-medium hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors shadow-sm"
                    onClick={() => setShowSnippet({open: true, content: r.content || ""})}
                    title="Show code"
                  >
                    Show Code
                  </button>
                ) : (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm font-medium hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors shadow-sm" title="Visit">
                    Visit
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
              No resources found.
            </div>
          )}
        </motion.div>
      </div>

      {/* Modal for code snippet */}
      <AnimatePresence>
        {showSnippet.open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSnippet({open: false, content: ""})}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl max-w-lg w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-primary-light dark:hover:text-primary-dark text-2xl font-bold focus:outline-none"
                onClick={() => setShowSnippet({open: false, content: ""})}
                title="Close"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4 text-primary-dark dark:text-primary-light">Code Snippet</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm text-gray-800 dark:text-gray-100 border border-primary-light dark:border-primary-dark"><code>{showSnippet.content}</code></pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
