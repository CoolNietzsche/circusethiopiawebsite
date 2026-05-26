import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, MessageSquare, Quote, Star, Landmark } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data';
import { PageId } from '../types';

interface DirectorsMessageProps {
  setCurrentPage: (page: PageId) => void;
}

export default function DirectorsMessage({ setCurrentPage }: DirectorsMessageProps) {
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
              placeholder.className = "absolute inset-0 flex flex-col items-center justify-center p-4 bg-zinc-950 text-center border border-[#C8963E1a]";
              placeholder.innerHTML = `
                <span class="text-3xl mb-1 opacity-45">🎪</span>
                <span class="font-cinzel text-xs text-[#C8963E] tracking-widest">${alt.toUpperCase()}</span>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-message">
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE DIRECTOR'S HEARTH</span>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-circus-cream font-bold mt-2">
            A Message from the Director
          </h1>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sidebar Picture & Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative p-2 border border-[#C8963E3f] bg-zinc-950 rounded-sm shadow-2xl">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-circus-gold"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-circus-gold"></div>
              
              <ImageWithFallback
                src={OFFICIAL_IMAGES.sosinaPortrait}
                alt="Sosina Wogayehu"
                className="aspect-[3/4] w-full"
              />
              <div className="mt-4 text-center">
                <h4 className="font-cinzel text-xs text-circus-gold font-bold tracking-wider uppercase">Sosina Wogayehu OAM</h4>
                <p className="font-serif text-[10px] text-circus-text/50 italic mt-0.5">Founding Director, The Circus Center</p>
              </div>
            </div>

            {/* Side stats boxes */}
            <div className="bg-[#ffffff02] border border-white/5 rounded-xs p-6 space-y-4">
              <span className="font-cinzel text-[10px] text-circus-gold tracking-widest uppercase block border-b border-circus-gold/20 pb-2">The Mission Outcome</span>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="font-serif text-xs text-circus-text/60">Founded Year</span>
                  <span className="font-mono text-xs text-circus-gold">2013 (Addis)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="font-serif text-xs text-circus-text/60">Youth Sponsoring</span>
                  <span className="font-mono text-xs text-circus-gold">Hundreds</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif text-xs text-circus-text/60">Permanent Base</span>
                  <span className="font-mono text-xs text-circus-gold">Entoto Park</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main message text column - Preserved word for word */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative border-b border-white/5 pb-4">
              <Quote className="w-10 h-10 text-circus-gold/15 mb-2" />
              <h2 className="font-display text-lg sm:text-xl font-bold italic text-circus-cream leading-relaxed">
                "Our artists represent the profound elasticity and endurance of the Ethiopian spirit. Yet to thrive, they deserve a stable hearth."
              </h2>
            </div>

            {/* Word-for-word core message blocks */}
            <div className="font-serif text-sm sm:text-base text-circus-text/85 space-y-6 leading-relaxed text-justify">
              <p>
                "Circus provides great opportunities for the youth of Ethiopia. It protects young people from being on the street and vulnerable to substance abuse. It will keep young people healthy. It teaches discipline. It creates jobs. It supports many to further education and training, and when circus artists are contracted abroad, they are able to help their younger sisters and brothers to attend better schools. They support their family, community and the country. They build self-esteem, learn a language and travel the world..."
              </p>

              <p>
                Currently, our training efforts face immense environmental and structural barriers. Without a permanent sanctuary, we are subject to constant disruption. During the rainy seasons, Addis Ababa's heavy rainfall halts all outdoor practice. During the dry wedding seasons, our temporary practice fields are rented out for ceremonies, leaving hundreds of eager young acrobats with nowhere to train.
              </p>

              <p>
                More than anything, we face extreme safety concerns. Right now, our elite contortionists, hand-balancers, and jugglers have to practice high-risk aerial elements and double flips on hard mud or dry grass, lacking safety nets, proper pulleys, or gymnastics crash mats. This risk of injury is a heavy burden we bear every single day.
              </p>

              <p>
                This structural challenge represents a stark missed opportunity. Over 70% of Ethiopia’s 110 million population is under the age of 30, with nearly 48% under 15. This represents an enormous ocean of raw, youthful athletic talent waiting to be unlocked.
              </p>

              <p>
                Ethiopia is rightfully world-famous for exporting premium coffee. I believe contemporary circus is also a precious, premium export. When our young artists travel internationally to perform at UniverSoul or Circus Krone, they act as magnificent cultural ambassadors, earning legal foreign currency and funneling livelihood back to their home towns.
              </p>

              <p>
                The permanent Circus Center, Addis Ababa, Ethiopia in Entoto Park solves all of these. It will establish:
              </p>

              {/* Bullet list of what center enables */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-l-2 border-circus-gold/30 pl-6 py-2 my-4 bg-zinc-950/40 p-4 rounded-sm">
                {[
                  "A secure, weather-proof 500-seat Spiegeltent venue",
                  "Elite standard gymnastics safety pulleys and mats",
                  "Guaranteed shelter, nourishment, and study zones",
                  "Free educational workshops for nearby schoolchildren",
                  "Stable salaries and long-term career placement",
                  "Continuous cultural projection on a global scale"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-circus-gold flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-bold text-circus-cream border-t border-white/5 pt-6">
                "Be a Donor, an Advocate, or Partner!!"
              </p>
            </div>

            {/* Sign off and signature block */}
            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <h5 className="font-cinzel text-xs text-circus-gold tracking-widest font-extrabold uppercase">Sosina Wogayehu OAM</h5>
                <p className="font-serif text-xs text-circus-text/50 mt-1 italic">Founding Director, Circus Center Addis Ababa</p>
              </div>
              <span className="text-3xl opacity-50 font-cinzel text-circus-gold italic">Sosina</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-t from-zinc-950 to-circus-bg py-20 text-center border-t border-[#C8963E1C]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Heart className="w-8 h-8 text-[#B5292A] mx-auto animate-pulse" />
          <h2 className="font-cormorant text-2xl sm:text-3xl text-circus-cream font-bold italic">
            "Be a Donor, an Advocate, or Partner!!"
          </h2>
          <p className="font-serif text-xs sm:text-sm text-circus-text/75">
            Join hands with Sosina to create a sustainable, world-class refuge for Ethiopia's acrobatic treasures.
          </p>
          <div className="pt-3">
            <button
              onClick={() => handleNavigate('donor-page')}
              className="px-8 py-3.5 font-cinzel text-xs text-white bg-circus-red hover:bg-[#C8963D] font-extrabold tracking-widest rounded-sm transition-all duration-300"
              id="directors-gofundme-link"
            >
              DONATE TO CAMPAIGN
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
