import React from 'react';
import { PageId } from '../types';
import { Mail, Globe, Heart, Shield, Award } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavigate = (id: PageId) => {
    setCurrentPage(id);
    window.location.hash = id === 'home' ? '' : id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-circus-bg border-t border-[#C8963E2F] relative overflow-hidden">
      {/* Subtle background ethiopian repeating texture overlay */}
      <div className="absolute inset-0 ethiopian-pattern pointer-events-none"></div>

      {/* Dynamic top gold gradient border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-circus-gold/20 via-circus-gold to-circus-gold/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand Summary */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-xl text-circus-gold font-bold tracking-wider">
              🎪 CIRCUS ETHIOPIA
            </h3>
            <p className="font-serif text-sm text-circus-text/70 leading-relaxed">
              Empowering and supporting the young people of Ethiopia through contemporary arts of dance, circus, theatre and education.
            </p>
            {/* Social Icons from Legacy Site, using accurate LH3 URLs with referrer policy */}
            <div className="flex space-x-3.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/10 hover:border-circus-gold hover:scale-105 transition-all duration-300"
              >
                <img
                  src={OFFICIAL_IMAGES.facebookIcon}
                  alt="Facebook"
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/10 hover:border-circus-gold hover:scale-105 transition-all duration-300"
              >
                <img
                  src={OFFICIAL_IMAGES.socialIcon1}
                  alt="Social Icon 1"
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/10 hover:border-circus-gold hover:scale-105 transition-all duration-300"
              >
                <img
                  src={OFFICIAL_IMAGES.socialIcon2}
                  alt="Social Icon 2"
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/10 hover:border-circus-gold hover:scale-105 transition-all duration-300"
              >
                <img
                  src={OFFICIAL_IMAGES.socialIcon3}
                  alt="Social Icon 3"
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cormorant text-lg text-circus-gold font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'about-us', label: 'About Us' },
                  { id: 'vision-values', label: 'Vision' },
                  { id: 'the-center', label: 'The Center' },
                  { id: 'directors-message', label: 'Director Hub' },
                  { id: 'donor-page', label: 'Donate' },
                  { id: 'success-stories', label: 'Stories' },
                  { id: 'circus-research', label: 'Research' },
                  { id: 'contact-us', label: 'Contact' },
                ] as { id: PageId; label: string }[]
              ).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className="text-left font-serif text-sm text-circus-text/75 hover:text-circus-gold transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-cormorant text-lg text-circus-gold font-bold uppercase tracking-wider">
              Legal Info
            </h4>
            <p className="font-serif text-sm text-circus-text/70 leading-relaxed">
              Circus Center Addis Ababa is a registered non-profit organization in Addis Ababa, Ethiopia. Dedicated to building educational pathways out of poverty for youth.
            </p>
            <div className="space-y-2 pt-1">
              <span className="flex items-center text-circus-text/80 text-sm gap-2">
                <Mail className="w-4 h-4 text-circus-gold flex-shrink-0" />
                <a href="mailto:info@circusethiopia.org" className="hover:text-circus-gold transition-colors">
                  info@circusethiopia.org
                </a>
              </span>
              <span className="flex items-center text-circus-text/80 text-sm gap-2">
                <Globe className="w-4 h-4 text-circus-gold flex-[#C8963D] flex-shrink-0" />
                <span>www.circusethiopia.org</span>
              </span>
            </div>
          </div>

          {/* Column 4 - Direct Giving Call-to-action */}
          <div className="space-y-4 rounded-sm border border-[#C8963E20] bg-[#ffffff02] p-6">
            <h4 className="font-cinzel text-[#F2E8D5] text-xs font-bold tracking-widest uppercase">
              Join the Campaign
            </h4>
            <p className="font-serif text-xs text-circus-text/70 leading-relaxed">
              Our initial milestone of <strong>$800,000</strong> secures the construction of the permanent Spiegeltent structure in Entoto Park. Every contribution matters.
            </p>
            <a
              href="https://gf.me/u/y2jgxn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs font-cinzel bg-circus-gold hover:bg-circus-gold/90 text-circus-bg font-bold rounded-sm tracking-widest block transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 focus:outline-none"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-circus-bg animate-pulse" />
              <span>SUPPORT CAMPAIGN</span>
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-[#C8963E17] flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-circus-text/50">
          <p>© {new Date().getFullYear()} Circus Ethiopia. All Rights Reserved. Images Copyright Gamo Circus 2020.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-circus-gold" /> Dedicated surprise tribute design
            </span>
            <span>|</span>
            <span className="flex items-center gap-1 text-circus-gold">
              <Award className="w-3.5 h-3.5 text-circus-gold" /> Sosina Wogayehu OAM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
