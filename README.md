# Animated Portfolio Website

A fully animated, mobile-first, responsive portfolio website built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, creative UI with elegant contrast
- **Fully Responsive**: Mobile-first approach for all screen sizes
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Animated UI**: Beautiful animations using Framer Motion
- **Next.js App Router**: Modern routing with the `/app` directory structure
- **TypeScript**: Type-safe code for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling

## Pages

- **Home**: Hero section with animated elements
- **About**: Information about skills, experience, and education
- **Projects**: Showcase of projects with filtering capability
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository or download the source code

2. Navigate to the project directory
```bash
cd portfolio-website
```

3. Install dependencies
```bash
npm install
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Customization

### Content

- Edit the text content in each page file under `src/app/` directory
- Update project data in `src/app/projects/page.tsx`
- Modify contact information in `src/app/contact/page.tsx`

### Styling

- Customize colors in `tailwind.config.js`
- Edit global styles in `src/styles/globals.css`
- Modify animations in `src/lib/animations.ts`

### Images

- Add your images to the `public/images/` directory
- Update image references in the components

## Deployment

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

This project is open source and available under the [MIT License](LICENSE).
