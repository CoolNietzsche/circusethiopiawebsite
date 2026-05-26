import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Star, Shield, HelpCircle, ChevronRight } from 'lucide-react';
import { SUCCESS_STORIES, INTERNATIONAL_AWARDS } from '../data';

export default function SuccessStories() {
  const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
    return (
      <div className={`relative overflow-hidden bg-zinc-950/80 group ${className}`}>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8963E08] to-transparent animate-pulse pointer-events-none"></div>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            const parent = e.currentTarget.parentElement;
            if (parent) {
              e.currentTarget.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = "absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0d0a05] to-[#140f07] text-center border border-dashed border-[#C8963E1F]";
              placeholder.innerHTML = `
                <span class="text-3xl mb-1.5 opacity-50">🎪</span>
                <span class="font-cinzel text-xs text-[#C8963E] tracking-widest font-bold">${alt.toUpperCase()}</span>
                <p class="font-serif text-[10px] text-[#EDE8DF]/30 mt-1">Gamo Circus Alumni</p>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
      </div>
    );
  };

  const imagesByStoryIdx = [
    'https://images.unsplash.com/photo-1574115918913-a8d29ec49b2c?q=80&w=600', // Juggling Abebe
    'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600', // Professional Canada Worku
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600', // Academic Netsanet
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600', // Germany Frehiwot
    'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=600', // Contortion Trilogy Wintana
    'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600'  // Icarian duo Abreham
  ];

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-stories">
      {/* SECTION 1: EDITORIAL SUCCESS STORY BLOCKS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE ALUMNI STARS</span>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-circus-cream font-bold mt-2">
            Success Stories
          </h1>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        {/* 6 editorial blocks alternating */}
        <div className="space-y-24">
          {SUCCESS_STORIES.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-5/12">
                <div className="relative p-2 border border-zinc-900 rounded-sm bg-zinc-950 shadow-2xl relative">
                  {/* Outer Gold Corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-circus-gold"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-circus-gold"></div>

                  <ImageWithFallback
                    src={imagesByStoryIdx[index]}
                    alt={story.name}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="absolute bottom-4 right-4 bg-circus-bg/95 border border-circus-gold/25 px-3 py-1 rounded-xs">
                    <span className="text-[10px] font-mono text-circus-gold tracking-widest uppercase font-bold">ALUMNUS {index+1}</span>
                  </div>
                </div>
              </div>

              {/* Text/Narrative Side */}
              <div className="w-full lg:w-7/12 space-y-4">
                <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center gap-1.5 font-bold">
                  <Star className="w-4 h-4 text-circus-gold" /> MENTORSHIP JOURNEY
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl text-circus-cream font-bold italic leading-tight">
                  {story.name}
                </h2>
                <h3 className="font-serif text-xs font-semibold text-circus-gold uppercase tracking-wider">
                  {story.role}
                </h3>

                {/* Exact Word-for-Word Text preserved */}
                <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed text-justify">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: INTERNATIONAL PRIZE WINNINGS */}
      <section className="bg-zinc-950/70 border-t border-[#C8963E1A] py-20 relative">
        <div className="absolute inset-0 ethiopian-pattern pointer-events-none opacity-[0.04]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">HONOUR BOARD</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
              International Prize Winners
            </h2>
            <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {INTERNATIONAL_AWARDS.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 p-6 sm:p-8 rounded-sm border border-[#C8963E1A] hover:border-circus-gold/20 hover:scale-[1.01] transition-all duration-350 shadow-xl flex flex-col justify-start space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-circus-gold/10 border border-circus-gold/25 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-circus-gold" />
                  </div>
                  <h3 className="font-cinzel text-sm text-circus-cream font-extrabold tracking-widest uppercase">
                    {item.act}
                  </h3>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {item.awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-serif text-circus-text/80">
                      <ChevronRight className="w-4 h-4 text-circus-gold flex-shrink-0 mt-0.5" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-t from-zinc-950 to-circus-bg py-20 text-center border-t border-[#C8963E1c]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-cinzel text-[#F2E8D5] text-xs font-bold tracking-widest uppercase">
            Support Future Champions
          </h2>
          <p className="font-serif text-sm text-circus-text/75">
            By donating today, you sponsor certified gymnastics training and pathways for our upcoming youth generation.
          </p>
          <div className="pt-3">
            <a
              href="https://gf.me/u/y2jgxn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-cinzel text-xs text-white bg-[#B5292A] hover:bg-[#C8963D] font-extrabold tracking-widest rounded-sm transition-all duration-300 inline-block shadow-md"
            >
              GIVE ON GOFUNDME
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
