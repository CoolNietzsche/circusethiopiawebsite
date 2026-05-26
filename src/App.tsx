import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import VisionValues from './components/VisionValues';
import TheCenter from './components/TheCenter';
import DirectorsMessage from './components/DirectorsMessage';
import DonorPage from './components/DonorPage';
import SuccessStories from './components/SuccessStories';
import CircusResearch from './components/CircusResearch';
import ContactUs from './components/ContactUs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Synchronize routing state with document location hashes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about-us',
        'vision-values',
        'the-center',
        'directors-message',
        'donor-page',
        'success-stories',
        'circus-research',
        'contact-us',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Trigger immediately on mount to parse any initial hashes
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about-us':
        return <AboutUs setCurrentPage={setCurrentPage} />;
      case 'vision-values':
        return <VisionValues setCurrentPage={setCurrentPage} />;
      case 'the-center':
        return <TheCenter setCurrentPage={setCurrentPage} />;
      case 'directors-message':
        return <DirectorsMessage setCurrentPage={setCurrentPage} />;
      case 'donor-page':
        return <DonorPage />;
      case 'success-stories':
        return <SuccessStories />;
      case 'circus-research':
        return <CircusResearch />;
      case 'contact-us':
        return <ContactUs />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-circus-bg selection:bg-circus-gold selection:text-circus-bg text-circus-text selection:bg-[#C8963E]/45">
      {/* Dynamic top gold-glow lighting grid */}
      <div className="absolute top-0 left-0 right-0 h-1 background-glow z-40 bg-gradient-to-r from-transparent via-[#C8963D5a] to-transparent"></div>

      {/* Persistent global sticky top header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Router with motion fadeIn animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent global responsive footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
