/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // Vibrant blue
          dark: '#60a5fa',  // Lighter blue for dark mode
        },
        secondary: {
          light: '#ec4899', // Vibrant pink
          dark: '#f472b6',  // Lighter pink for dark mode
        },
        accent: {
          light: '#8b5cf6', // Vibrant purple
          dark: '#a78bfa',  // Lighter purple for dark mode
        },
        success: {
          light: '#10b981', // Emerald green
          dark: '#34d399',  // Lighter emerald for dark mode
        },
        background: {
          light: '#f8fafc', // Light background
          dark: '#0f172a',  // Dark background
        },
        card: {
          light: '#ffffff', // Card background light
          dark: '#1e293b',  // Card background dark
        },
        text: {
          light: '#1e293b', // Light mode text
          dark: '#f1f5f9',  // Dark mode text - brighter for better contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
