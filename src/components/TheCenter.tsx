import React from 'react';
import { motion } from 'motion/react';
import { Construction, MapPin, TreePine, Award, Landmark, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

const VILLAGE_IMAGE = '/src/assets/images/circus_village_sketch_1779798206442.png';

interface TheCenterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function TheCenter({ setCurrentPage }: TheCenterProps) {
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string; key?: any }) => {
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
                <span class="text-[9px] text-[#EDE8DF]/30 mt-1 font-serif">The Center Blueprint</span>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-center">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-zinc-950/90 border-b border-[#C8963E1C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Header Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-circus-gold" /> PHYSICAL ANCHOR
              </span>
              <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-circus-cream font-bold italic leading-tight">
                The Circus Center, Entoto Park
              </h1>
              <div className="h-0.5 w-24 bg-circus-gold/30"></div>
              
              <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed text-justify">
                Our permanent training campus, nestled within the beautiful misty eucalyptus forests of Entoto Mountain in Addis Ababa. Here, we build a sanctuary where young performers will receive first-class training, safe shelter, and vocational certifications.
              </p>
            </div>

            {/* Generated Design Sketch Render */}
            <div className="lg:col-span-5">
              <div className="relative p-2 border border-[#C8963E3f] rounded-sm bg-zinc-950 shadow-2xl">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-circus-gold"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-circus-gold"></div>
                
                <ImageWithFallback
                  src={VILLAGE_IMAGE}
                  alt="Circus Center Entoto Park Design Render"
                  className="aspect-[4/3] w-full"
                />
                <div className="absolute bottom-4 right-4 bg-circus-bg/95 border border-circus-gold/20 px-3.5 py-1 rounded-sm shadow-md">
                  <span className="text-[9px] font-mono text-circus-gold tracking-widest uppercase font-bold">ENTOTO VISION REDESIGN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION DESCRIPTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-circus-gold/25 p-8 sm:p-12 rounded-sm bg-zinc-950 space-y-4 shadow-xl">
          <span className="font-cinzel text-[10px] text-circus-gold tracking-widest uppercase font-bold">THE ARCHITECTURE</span>
          <h2 className="font-display text-xl sm:text-2xl text-circus-cream font-semibold italic">About the Location & Setup</h2>
          
          {/* Word-for-word text preserved strictly */}
          <p className="font-serif text-sm sm:text-base text-circus-text/90 leading-relaxed italic text-justify">
            "Entoto Park is a stunning cultural precinct in a large national park within easy access of the capital, Addis Ababa. The Circus Center, Addis Ababa, Ethiopia has pre-approval for a circus village within Entoto which will feature a 500 seat performance venue based on a unique design concept which merges traditional Ethiopian architecture with the classic European cabaret venues known as Spiegeltents. It will also house a community training center, a place where School children will be offered free workshops. This enterprise will be a critical first step to providing an ongoing source of income and funding for the initial set up of the Circus Center, Addis Ababa, Ethiopia. It will continue long term as an adjunct facility, providing additional employment for the young people involved."
          </p>
        </div>
      </section>

      {/* BUILD NEWS AND TREE STORIES */}
      <section className="bg-zinc-950/70 border-y border-[#C8963E1C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">CONSTRUCTION LOGS</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
              Building Chronicles & Eco-Activity
            </h2>
            <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tree Planting Story with word-for-word prose */}
            <div className="bg-zinc-950 p-8 rounded-sm border border-zinc-900 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-circus-teal text-xs font-mono tracking-widest uppercase">
                  <TreePine className="w-4 h-4 text-circus-teal" /> Green Heritage Footprint
                </span>
                <h3 className="font-cormorant text-2xl font-semibold text-circus-cream italic">
                  "Over 500 trees were planted at the Circus Center, Entoto"
                </h3>
                <p className="font-serif text-sm text-circus-text/80 leading-relaxed text-justify">
                  "Over 200 circus artists, locals and trainers joined us to plant native trees at the site of the circus center, leaving their green footprint at Ethiopia's first circus theatre. 6 Billion trees have been planted in Ethiopia over the past year as a part of the Ethiopian government's Green Legacy project."
                </p>
              </div>

              {/* 5 image slot grid */}
              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-5 gap-1.5 h-16 sm:h-20">
                {[
                  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=150',
                  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=150',
                  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=150',
                  'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=150',
                  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=150'
                ].map((u, i) => (
                  <ImageWithFallback key={i} src={u} alt={`Tree root detail ${i+1}`} className="w-full h-full border border-white/5" />
                ))}
              </div>
            </div>

            {/* Donor Announcement story with word-for-word prose */}
            <div className="bg-zinc-950 p-8 rounded-sm border border-zinc-900 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-circus-gold text-xs font-mono tracking-widest uppercase">
                  <Construction className="w-4 h-4 text-circus-gold animate-spin-slow" /> Construction Milestone
                </span>
                <h3 className="font-cormorant text-2xl font-semibold text-circus-cream italic">
                  "The build has begun!"
                </h3>
                <h4 className="font-serif text-xs font-semibold text-circus-gold tracking-widest uppercase">
                  "The Circus Center Entoto has secured a donor to fund 50% of the build"
                </h4>
                <p className="font-serif text-sm text-circus-text/80 leading-relaxed text-justify">
                  "We are thrilled to announce that the Circus Center, Entoto has secured a donor to fund 50% of the total build. Surveying and preparing the foundational has begun. Bamacon Engineering, well respected Level 1 contractors in Ethiopia are in charge of the build. This project will create employment opportunities for the local and greater community both during and after the build."
                </p>
              </div>

              {/* 5 image slot grid */}
              <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-5 gap-1.5 h-16 sm:h-20">
                {[
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=150',
                  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=150',
                  'https://images.unsplash.com/photo-1503387762-592dec5824eb?q=80&w=150',
                  'https://images.unsplash.com/photo-1531834685032-c34bf0d8b286?q=80&w=150',
                  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=150'
                ].map((u, i) => (
                  <ImageWithFallback key={i} src={u} alt={`Concrete grid detail ${i+1}`} className="w-full h-full border border-white/5" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL HIGHLIGHTS / SPECS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-cinzel text-xs text-circus-gold tracking-widest uppercase text-center mb-12">
          Key Structural Characteristics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-zinc-950/40 border border-[#C8963E15] rounded-xs space-y-3">
            <CheckCircle2 className="w-5 h-5 text-circus-gold" />
            <h4 className="font-cinzel text-xs font-bold text-circus-cream tracking-wide">500-Seat Spiegeltent Theatre</h4>
            <p className="font-serif text-xs text-circus-text/70 leading-relaxed">
              Merging structural elements of ancient wooden structures with European classic theatre concepts.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/40 border border-[#C8963E15] rounded-xs space-y-3">
            <CheckCircle2 className="w-5 h-5 text-circus-gold" />
            <h4 className="font-cinzel text-xs font-bold text-circus-cream tracking-wide">Community Workshop Hubs</h4>
            <p className="font-serif text-xs text-circus-text/70 leading-relaxed">
              Granting free access workshops and acrobatics courses to schoolchildren nearby.
            </p>
          </div>

          <div className="p-6 bg-zinc-950/40 border border-[#C8963E15] rounded-xs space-y-3">
            <CheckCircle2 className="w-5 h-5 text-circus-gold" />
            <h4 className="font-cinzel text-xs font-bold text-circus-cream tracking-wide">Eco Sustainable Gardens</h4>
            <p className="font-serif text-xs text-circus-text/70 leading-relaxed">
              Anchored within Entoto National Park, planting hundreds of indigenous trees as the foundation roots.
            </p>
          </div>
        </div>
      </section>

      {/* BIG CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-t from-zinc-950 to-circus-bg py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-cinzel text-[#F2E8D5] text-xs font-bold tracking-widest uppercase">
            Sponsorship Opportunities Available
          </h2>
          <p className="font-serif text-sm text-circus-text/75">
            Help us secure the final 50% construction funding to open the doors of this historic circus village.
          </p>
          <div className="pt-3">
            <button
              onClick={() => handleNavigate('donor-page')}
              className="px-8 py-3.5 font-cinzel text-xs text-circus-bg bg-circus-gold hover:bg-white text-circus-bg font-extrabold tracking-widest rounded-sm transition-all duration-300 shadow-lg"
              id="center-funding-cta"
            >
              DONATE TO BUILD THE STAGE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
