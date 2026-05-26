import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Compass, Sparkles, Award, Star, Heart } from 'lucide-react';
import { PageId } from '../types';

interface VisionValuesProps {
  setCurrentPage: (page: PageId) => void;
}

export default function VisionValues({ setCurrentPage }: VisionValuesProps) {
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-vision">
      {/* SECTION 1: VALUES STATEMENT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE ETHICAL PIE</span>
          <h1 className="font-cinzel text-4xl sm:text-5xl text-circus-cream font-bold mt-2">
            OUR VALUES
          </h1>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Full-width statement box with gold border, dark background */}
        <div className="relative p-8 sm:p-12 border border-circus-gold rounded-sm bg-zinc-950 max-w-4xl mx-auto shadow-2xl overflow-hidden">
          {/* Ambient light spill */}
          <div className="absolute inset-0 ethiopian-pattern pointer-events-none opacity-[0.05]"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-circus-gold/5 blur-3xl rounded-full"></div>

          <div className="relative z-10 space-y-6 text-center sm:text-left">
            <span className="font-mono text-xs text-circus-gold uppercase tracking-widest font-bold block">
              OPERATIONAL FRAMEWORK
            </span>
            <p className="font-display text-lg sm:text-xl text-circus-cream italic leading-relaxed">
              "The Ethiopian Circus Centre will operate within an overarching, single framework, based around the values of:"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-circus-gold/15">
              {[
                "An artistic identity and vision",
                "Excellence in art and education",
                "Access and equality",
                "Ethiopian cultural pride",
                "Sustainability",
                "International context"
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-3 py-2 px-3 bg-white/[0.01] border border-white/[0.03] rounded-sm hover:border-circus-gold/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-circus-gold"></div>
                  <span className="font-serif text-sm sm:text-base text-circus-text/90">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE PILLARS (animated cards with staggered motion) */}
      <section className="bg-zinc-950/70 border-y border-[#C8963E1C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">FOUNDATIONAL PILLARS</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
              Our Vision, Mission & Goal
            </h2>
            <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Vision */}
            <div className="bg-zinc-950 p-8 rounded-sm border border-[#C8963E1a] flex flex-col items-center text-center space-y-4 shadow-xl hover:border-circus-gold/30 transition-all group duration-350">
              <div className="w-12 h-12 rounded-full bg-circus-teal/10 border border-circus-teal/25 flex items-center justify-center transition-all group-hover:scale-110">
                <Compass className="w-6 h-6 text-circus-teal" />
              </div>
              <h3 className="font-cinzel text-sm text-circus-gold font-bold tracking-widest uppercase">
                Our Vision
              </h3>
              <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed italic px-2">
                "A brighter future for the young people of Ethiopia."
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-zinc-950 p-8 rounded-sm border border-[#C8963E1a] flex flex-col items-center text-center space-y-4 shadow-xl hover:border-circus-gold/30 transition-all group duration-350">
              <div className="w-12 h-12 rounded-full bg-[#B5292A]/10 border border-[#B5292A]/25 flex items-center justify-center transition-all group-hover:scale-110">
                <Sparkles className="w-6 h-6 text-circus-red" />
              </div>
              <h3 className="font-cinzel text-sm text-circus-gold font-bold tracking-widest uppercase">
                Our Mission
              </h3>
              <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed italic px-2">
                "To empower and support the young people of Ethiopia through circus, education and cultural pride."
              </p>
            </div>

            {/* Our Goal */}
            <div className="bg-zinc-950 p-8 rounded-sm border border-[#C8963E1a] flex flex-col items-center text-center space-y-4 shadow-xl hover:border-circus-gold/30 transition-all group duration-350">
              <div className="w-12 h-12 rounded-full bg-circus-gold/10 border border-circus-gold/25 flex items-center justify-center transition-all group-hover:scale-110">
                <Target className="w-6 h-6 text-circus-gold" />
              </div>
              <h3 className="font-cinzel text-sm text-circus-gold font-bold tracking-widest uppercase">
                Our Goal
              </h3>
              <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed italic px-2">
                "Establish a centre for vocational training, arts and circus."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OBJECTIVES (icon + text, three large blocks) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE OBJECTIVES</span>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
            Key Objectives of the Circus Center
          </h2>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Obj 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-zinc-950/40 border border-white/5 p-8 rounded-sm hover:border-circus-gold/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-sm bg-circus-gold/5 flex-shrink-0 flex items-center justify-center border border-circus-gold/20">
              <Star className="w-6 h-6 text-circus-gold" />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h3 className="font-cinzel text-sm sm:text-base text-circus-cream font-extrabold tracking-wider">
                SHOWCASE AND CELEBRATE ETHIOPIAN CULTURE
              </h3>
              <p className="font-serif text-xs sm:text-sm text-circus-text/70 leading-relaxed">
                We believe contemporary choreography, traditional tunes, and physical acts represent the visual identity of Ethiopia. We aim to share our profound ancient arts safely with global crowds.
              </p>
            </div>
          </div>

          {/* Obj 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-zinc-950/40 border border-white/5 p-8 rounded-sm hover:border-circus-gold/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-sm bg-[#B5292A]/5 flex-shrink-0 flex items-center justify-center border border-[#B5292A]/20">
              <Award className="w-6 h-6 text-circus-red" />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h3 className="font-cinzel text-sm sm:text-base text-circus-cream font-extrabold tracking-wider">
                PROVIDE TRAINING AND EMPLOYMENT OPPORTUNITIES FOR THE YOUTH OF ETHIOPIA
              </h3>
              <p className="font-serif text-xs sm:text-sm text-circus-text/70 leading-relaxed">
                By offering stable, structured paths, we give teenagers a high-performance alternative to street life, building career skills that can support whole communities.
              </p>
            </div>
          </div>

          {/* Obj 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-zinc-950/40 border border-white/5 p-8 rounded-sm hover:border-circus-gold/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-sm bg-circus-teal/5 flex-shrink-0 flex items-center justify-center border border-circus-teal/20">
              <Shield className="w-6 h-6 text-circus-teal" />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h3 className="font-cinzel text-sm sm:text-base text-[#EDE8DF] font-extrabold tracking-wider">
                HIGHLIGHT ETHIOPIA'S EXTRAORDINARY CIRCUS ARTISTS
              </h3>
              <p className="font-serif text-xs sm:text-sm text-circus-text/70 leading-relaxed">
                Our artists belong on the world's grandest stages. We foster high-tech pipelines to international scouts, including Cirque Du Soleil and Circus 1903.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Donor CTA */}
      <section className="bg-gradient-to-t from-zinc-950 to-circus-bg py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Heart className="w-8 h-8 text-circus-gold mx-auto opacity-75 animate-pulse" />
          <h3 className="font-cinzel text-[#F2E8D5] text-xs font-bold tracking-widest uppercase">
            Support Our Goal
          </h3>
          <p className="font-serif text-sm text-circus-text/70">
            By funding our vocational programs, you direct high-end opportunities to the youth of Ethiopia.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNavigate('donor-page')}
              className="px-8 py-3.5 font-cinzel text-xs text-circus-bg bg-circus-gold hover:bg-white text-circus-bg font-extrabold tracking-widest rounded-sm transition-all duration-300"
              id="vision-donor-link"
            >
              BECOME A SPONSOR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
