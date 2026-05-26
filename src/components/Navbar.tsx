import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Heart } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'vision-values', label: 'Vision & Values' },
    { id: 'the-center', label: 'The Center' },
    { id: 'directors-message', label: "Director's Message" },
    { id: 'donor-page', label: 'Donor Page' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'circus-research', label: 'Circus Research' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const handleNavigate = (id: PageId) => {
    setCurrentPage(id);
    window.location.hash = id === 'home' ? '' : id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 border-b border-[#C8963E1C] ${
        isScrolled
          ? 'bg-circus-bg/95 backdrop-blur-md shadow-[0_10px_30px_rgba(13,10,5,0.8)]py-3'
          : 'bg-gradient-to-b from-circus-bg via-circus-bg/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 cursor-pointer group focus:outline-none"
            id="logo-button"
          >
            <span className="text-xl sm:text-2xl font-bold font-cinzel tracking-wider text-circus-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex items-center gap-2">
              <span className="inline-block transition-transform duration-500 group-hover:rotate-12">🎪</span>
              <span>CIRCUS ETHIOPIA</span>
            </span>
          </button>

          {/* Large Screen Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 text-xs font-serif rounded-sm tracking-wide transition-all duration-300 cursor-pointer ${
                  currentPage === item.id
                    ? 'text-circus-gold border-b-2 border-circus-gold font-medium'
                    : 'text-circus-text/80 hover:text-circus-gold border-b-2 border-transparent hover:border-circus-gold/40'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavigate('donor-page')}
              className="ml-4 px-4 py-2 text-xs font-cinzel bg-circus-red hover:bg-circus-gold text-white font-bold rounded-sm tracking-widest transition-all duration-300 shadow-[0_4px_10px_rgba(181,41,42,0.3)] hover:shadow-[0_4px_15px_rgba(200,150,62,0.4)] flex items-center gap-1.5 focus:outline-none cursor-pointer"
              id="desktop-donate-nav"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
              <span>DONATE</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => handleNavigate('donor-page')}
              className="mr-3 px-3 py-1.5 text-[10px] sm:text-xs font-cinzel bg-circus-red text-white font-bold rounded-sm tracking-widest flex items-center gap-1 focus:outline-none"
              id="mobile-quick-donate"
            >
              <span>DONATE</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-circus-gold hover:text-circus-cream p-1.5 focus:outline-none cursor-pointer"
              id="hamburger-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu slide in overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[73px] z-40 bg-circus-bg/98 xl:hidden flex flex-col px-6 py-8 space-y-4 border-t border-[#C8963E1C] overflow-y-auto"
          id="mobile-menu-overlay"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full text-left py-3 px-4 text-base font-serif rounded-sm tracking-wide border-l-2 ${
                currentPage === item.id
                  ? 'text-circus-gold border-circus-gold bg-circus-gold/5 font-semibold'
                  : 'text-circus-text/90 hover:text-circus-gold border-transparent hover:border-circus-gold/30'
              }`}
              id={`mobile-nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-6">
            <button
              onClick={() => handleNavigate('donor-page')}
              className="w-full py-4 text-center text-sm font-cinzel bg-circus-red hover:bg-circus-gold text-white font-bold rounded-sm tracking-widest shadow-[0_4px_10px_rgba(181,41,42,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              id="mobile-donate-nav"
            >
              <Heart className="w-4 h-4 fill-current text-white animate-pulse" />
              <span>DONATE ON GOFUNDME</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
