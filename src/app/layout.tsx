import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/ui/BackToTop';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import IdeasTopButton from '@/components/IdeasTopButton';
import { Toaster } from 'react-hot-toast';

// Add viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'A creative developer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <IdeasTopButton />
            <BackToTop />
            <Toaster position="bottom-right" />
          </div>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
