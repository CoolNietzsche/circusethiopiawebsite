import React from 'react';
import { motion } from 'motion/react';
import { Award, Shield, User, Landmark, Briefcase, ChevronRight, Heart } from 'lucide-react';
import { ADVISORS, CONSULTANTS, SOSINA_BIO_PARAGRAPHS, SOSINA_QUOTE, POSITIONS_HELD, AWARDS, OFFICIAL_IMAGES } from '../data';
import { PageId } from '../types';

interface AboutUsProps {
  setCurrentPage: (page: PageId) => void;
}

export default function AboutUs({ setCurrentPage }: AboutUsProps) {
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
    return (
      <div className={`relative overflow-hidden bg-zinc-950/80 group ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            const parent = e.currentTarget.parentElement;
            if (parent) {
              e.currentTarget.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = "absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0d0a05] to-[#120e06] text-center border border-[#C8963E15]";
              placeholder.innerHTML = `
                <span class="text-2xl mb-1 opacity-40">🎪</span>
                <span class="font-cinzel text-[10px] text-[#C8963E] tracking-widest">${alt.toUpperCase()}</span>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-about">
      {/* SECTION 1: SOSINA WOGAYEHU — FOUNDING DIRECTOR */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE PIONEER</span>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-circus-cream font-bold mt-2">
            Sosina Wogayehu — Founding Director
          </h1>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Portrait & Pull Quote Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative p-2 border border-[#C8963E3f] rounded-sm bg-zinc-950 shadow-2xl">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-circus-gold"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-circus-gold"></div>
              
              <ImageWithFallback
                src={OFFICIAL_IMAGES.sosinaPortrait}
                alt="Sosina Wogayehu OAM"
                className="aspect-[3/4] w-full"
              />
              <div className="absolute bottom-4 left-4 bg-[#B5292A] text-white font-cinzel text-[10px] tracking-widest uppercase px-3.5 py-1 text-center font-bold">
                Order of Australia (OAM)
              </div>
            </div>

            {/* Pull Quote */}
            <div className="relative border-l-2 border-circus-gold/50 pl-6 py-2">
              <span className="absolute top-0 left-0 text-5xl font-display text-circus-gold/10 -mt-4 pointer-events-none">“</span>
              <p className="font-display text-base md:text-lg text-circus-gold italic leading-relaxed">
                "{SOSINA_QUOTE}"
              </p>
            </div>
          </div>

          {/* Biography details & timelines */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">BIOGRAPHY</h3>
              {SOSINA_BIO_PARAGRAPHS.map((para, i) => (
                <p key={i} className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Positions Held */}
            <div className="space-y-4 bg-zinc-950/60 p-6 rounded-sm border border-[#C8963E1a]">
              <h3 className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-circus-gold" /> Positions Held
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {POSITIONS_HELD.map((pos, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm font-serif text-circus-text/90">
                    <ChevronRight className="w-4 h-4 text-circus-gold mt-1 mr-1.5 flex-shrink-0" />
                    <span>{pos}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards Timeline */}
            <div className="space-y-4">
              <h3 className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center gap-2">
                <Award className="w-4 h-4 text-circus-gold" /> Honours & Awards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AWARDS.map((award, i) => (
                  <div key={i} className="flex gap-3 bg-[#ffffff02] border border-white/5 p-4 rounded-xs hover:border-circus-gold/20 transition-all">
                    <span className="font-mono text-xs text-circus-gold font-bold bg-circus-gold/5 border border-circus-gold/20 px-2.5 py-1 rounded-sm flex items-center h-fit">
                      {award.year}
                    </span>
                    <span className="font-serif text-xs text-circus-text/80 leading-snug">
                      {award.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ADVISORY COMMITTEE */}
      <section className="bg-zinc-950/70 border-y border-[#C8963E1A] py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE ADVISORY BOARD</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
              Advisory Committee
            </h2>
            <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVISORS.map((advisor, index) => (
              <div
                key={index}
                className="bg-zinc-950 p-6 sm:p-8 rounded-sm border border-[#C8963E17] hover:border-circus-gold/40 hover:scale-[1.01] transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Styled avatar profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-circus-gold/5 border border-circus-gold/30 flex items-center justify-center">
                      <User className="w-6 h-6 text-circus-gold" />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xs font-bold text-circus-gold tracking-wide uppercase">
                        {advisor.name}
                      </h4>
                      <p className="font-serif text-[11px] text-circus-text/50">
                        {advisor.title}
                      </p>
                    </div>
                  </div>
                  <p className="font-serif text-xs text-circus-text/75 leading-relaxed text-justify">
                    {advisor.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* To be announced soon placeholder cards (×2) */}
            <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-950/20 p-8 rounded-sm border border-dashed border-circus-gold/15 flex flex-col items-center justify-center text-center space-y-3 min-h-[220px]">
              <span className="text-2xl animate-pulse">🎪</span>
              <h4 className="font-cinzel text-xs font-bold text-circus-gold/50 tracking-widest uppercase">Stay Tuned!</h4>
              <p className="font-serif text-[11px] text-circus-text/40">Advisory Announcement Coming Soon</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-950/80 to-zinc-950/20 p-8 rounded-sm border border-dashed border-circus-gold/15 flex flex-col items-center justify-center text-center space-y-3 min-h-[220px]">
              <span className="text-2xl animate-pulse">✨</span>
              <h4 className="font-cinzel text-xs font-bold text-circus-gold/50 tracking-widest uppercase">Stay Tuned!</h4>
              <p className="font-serif text-[11px] text-circus-text/40">Advisory Announcement Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONSULTANTS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE IMPLEMENTERS</span>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
            Technical Consultants & Stewardship
          </h2>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CONSULTANTS.map((con, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 p-6 sm:p-8 rounded-sm border border-zinc-900 border-l-2 border-l-circus-gold/75 space-y-4 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-cinzel text-[10px] text-circus-gold/60 tracking-widest block uppercase">
                  {con.role}
                </span>
                <h4 className="font-cinzel text-sm text-circus-cream font-bold uppercase tracking-wider">
                  {con.name}
                </h4>
                <p className="font-serif text-xs text-circus-text/85 leading-relaxed">
                  {con.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Details (Preserve fully) */}
        <div className="mt-16 bg-zinc-950/40 border border-white/5 p-8 rounded-sm space-y-4">
          <span className="font-cinzel text-[10px] text-circus-gold tracking-widest uppercase flex items-center gap-1.5 font-bold">
            <Landmark className="w-4 h-4 text-circus-gold" /> Legal Registration & Structure
          </span>
          <p className="font-serif text-xs sm:text-sm text-circus-text/70 leading-relaxed">
            The Circus Center, Addis Ababa, Ethiopia is structured as an independent non-governmental, non-profit organization registered under the agency of civil society organizations of the Federal Democratic Republic of Ethiopia. Empowering local street children and teenagers via active gymnastic and theatrical coaching formats to grant sustainable certification pathways.
          </p>
        </div>
      </section>

      {/* Section 4: GoFundMe & Donor CTAs */}
      <section className="bg-[#B5292A]/5 border-t border-[#B5292A]/20 py-20 text-center relative">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-12 h-12 bg-[#B5292A]/10 border border-[#B5292A]/25 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="w-6 h-6 text-[#B5292A]" />
          </div>
          <h3 className="font-cormorant text-2xl sm:text-3xl text-circus-cream font-bold italic">
            Help us secure Sosina's lifelong dream!
          </h3>
          <p className="font-serif text-sm text-circus-text/70">
            Every dollar processed goes directly to construction materials and certified gymnastics equipment for the training center in Entoto Park. Learn more about joining as an official partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://gf.me/u/y2jgxn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 font-cinzel text-xs text-white bg-circus-red hover:bg-[#C8963D] font-extrabold tracking-widest rounded-sm transition-all duration-300"
            >
              DONATE TO GOFUNDME
            </a>
            <button
              onClick={() => handleNavigate('donor-page')}
              className="w-full sm:w-auto px-8 py-3.5 font-cinzel text-xs text-circus-gold border border-circus-gold/40 hover:text-white hover:bg-circus-gold/10 transition-all duration-300"
            >
              VIEW DONOR STRUCTURES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
