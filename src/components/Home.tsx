import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowRight, Award, TreePine, Construction, Image as ImageIcon } from 'lucide-react';
import { PageId } from '../types';
import { OFFICIAL_IMAGES } from '../data';

// Imported generated image assets from generation tool:
const HERO_IMAGE = '/src/assets/images/circus_ethiopia_hero_1779798184475.png';
const VILLAGE_IMAGE = '/src/assets/images/circus_village_sketch_1779798206442.png';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe image component which shows a shimmer fallback if loading fails
  const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string; key?: any }) => {
    return (
      <div className={`relative overflow-hidden bg-zinc-950/80 group ${className}`}>
        {/* Subtle shimmer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8963E0a] to-transparent animate-[pulse_3s_infinite] pointer-events-none"></div>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            // Replace with a custom styling that represents high cultural authenticity
            const parent = e.currentTarget.parentElement;
            if (parent) {
              e.currentTarget.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = "absolute inset-0 flex flex-col items-center justify-center p-4 border border-[#C8963E20] bg-gradient-to-br from-[#0d0a05] to-[#1a1309] text-center";
              placeholder.innerHTML = `
                <span class="text-3xl mb-2 opacity-55">🎪</span>
                <span class="font-cinzel text-xs text-[#C8963E] tracking-widest">${alt.toUpperCase()}</span>
                <span class="text-[10px] text-[#EDE8DF]/40 mt-1 font-serif">Circus Ethiopia Archive</span>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="relative bg-circus-bg overflow-hidden" id="page-home">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background dark hero overlay and spotlight */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Circus Ethiopia Hero Performance"
            className="w-full h-full object-cover opacity-35 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-circus-bg via-[#0D0A05A0] to-transparent"></div>
          <div className="absolute inset-0 spotlight-radial mix-blend-color-dodge opacity-80 pointer-events-none animate-[pulse_8s_infinite]"></div>
          <div className="absolute inset-0 spotlight-beam opacity-45 pointer-events-none"></div>
          {/* Subtle ethiopian repeating backdrop pattern overlay */}
          <div className="absolute inset-0 ethiopian-pattern pointer-events-none opacity-[0.06]"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Line 1 */}
            <h2 className="font-cinzel text-xs sm:text-sm text-circus-gold font-bold tracking-widest block uppercase text-center max-w-xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              HELP US BUILD A CENTER FOR CIRCUS IN ETHIOPIA
            </h2>

            {/* Line 2 */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-circus-cream font-bold italic tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] pt-1">
              Showcase and Celebrate Ethiopian Culture
            </h1>

            {/* Line 3 & 4 */}
            <div className="space-y-2 max-w-2xl mx-auto pt-2">
              <p className="font-serif text-base sm:text-lg text-circus-text/90 italic tracking-wide">
                Provide training and employment opportunities for the youth of Ethiopia
              </p>
              <p className="font-serif text-sm sm:text-base text-circus-text/75 italic">
                Highlight Ethiopia's extraordinary circus artists
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleNavigate('donor-page')}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-cinzel bg-circus-gold text-circus-bg font-extrabold rounded-xs tracking-widest glow-gold-hover flex items-center justify-center gap-2 group cursor-pointer focus:outline-none"
                id="hero-donate-cta"
              >
                <span>DONATE</span>
                <ArrowRight className="w-4 h-4 text-circus-bg transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleNavigate('the-center')}
                className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-cinzel border border-circus-gold/40 text-circus-gold hover:text-white hover:bg-circus-gold/10 hover:border-circus-gold transition-all duration-300 rounded-xs tracking-widest flex items-center justify-center gap-1 cursor-pointer focus:outline-none"
                id="hero-learn-cta"
              >
                <span>EXPLORE THE CENTER</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* CSS Drawn Subtle Traditional Border Accent at page break */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 ethiopian-border opacity-50"></div>
      </section>

      {/* SECTION 2: THE CIRCUS CENTER, ENTOTO PARK */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">ADDIS ABABA SANCTUARY</span>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
            The Circus Center, Entoto Park
          </h2>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Three panel alternating layout (parallax visual feeling) */}
        <div className="space-y-24">
          {[
            {
              title: "Circus Center, Entoto Park / The Circus Village",
              tag: "THE VISION",
              desc: "A sprawling center of creative excellence in Addis Ababa where world-class training and cultural performance unite. Designed to mimic the organic circular shapes of heritage structures.",
              img: VILLAGE_IMAGE,
              alt: "The Circus Village render"
            },
            {
              title: "Circus Center, Entoto Park / The Circus Village",
              tag: "THE DESIGN",
              desc: "A sanctuary built to echo the spirit of Ethiopian contortionists and jugglers, housing our future training schools, rehearsal rooms, and residential pods.",
              img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop', // Stunning architectural details placeholder matching theatrical feel
              alt: "Alternative architecture frames"
            },
            {
              title: "Circus Center, Entoto Park / The Circus Village",
              tag: "THE OUTCOME",
              desc: "Providing durable employment, physical safety, and global athletic networks for underrepresented local youth of Ethiopia.",
              img: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop',
              alt: "The Circus Village training spaces"
            }
          ].map((panel, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative p-2 border border-[#C8963E2a] rounded-sm bg-zinc-950 shadow-2xl">
                  {/* Outer design corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-circus-gold"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-circus-gold"></div>
                  
                  <ImageWithFallback
                    src={panel.img}
                    alt={panel.alt}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="absolute bottom-4 right-4 bg-circus-bg/90 border border-circus-gold/20 px-3 py-1 rounded-xs">
                    <p className="text-[10px] font-mono text-circus-gold tracking-widest uppercase">The Circus Village</p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-1/2 space-y-4">
                <span className="font-cinzel text-xs text-circus-gold tracking-widest font-semibold">{panel.tag}</span>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-circus-cream italic">{panel.title}</h3>
                <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed">
                  {panel.desc}
                </p>
                <button
                  onClick={() => handleNavigate('the-center')}
                  className="font-cinzel text-xs text-circus-gold hover:text-circus-cream flex items-center gap-1 tracking-widest group pt-2 cursor-pointer focus:outline-none"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ABOUT THE LOCATION */}
      <section className="bg-zinc-950/90 py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-l-4 border-circus-gold pl-6 sm:pl-10 relative z-10">
          <span className="font-cinzel text-xs text-circus-gold/80 tracking-widest uppercase">ENTOTO MOUNTAIN</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold italic text-circus-cream mt-1 mb-6 leading-snug">
            About the Location
          </h2>
          {/* Preserved word-for-word text */}
          <p className="font-serif text-base sm:text-lg text-circus-text/90 leading-relaxed italic">
            "Entoto Park is a stunning cultural precinct in a large national park within easy access of the capital, Addis Ababa. The Circus Center, Addis Ababa, Ethiopia has pre-approval for a circus village within Entoto which will feature a 500 seat performance venue based on a unique design concept which merges traditional Ethiopian architecture with the classic European cabaret venues known as Spiegeltents. It will also house a community training center, a place where School children will be offered free workshops. This enterprise will be a critical first step to providing an ongoing source of income and funding for the initial set up of the Circus Center, Addis Ababa, Ethiopia. It will continue long term as an adjunct facility, providing additional employment for the young people involved."
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#C8963E1C]"></div>
      </section>

      {/* SECTION 4: SOSINA SPOTLIGHT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Portrait Column */}
          <div className="w-full lg:w-5/12">
            <div className="relative p-2.5 border border-[#C8963E3F] rounded-sm bg-zinc-950 max-w-sm mx-auto shadow-2xl">
              <div className="absolute inset-0 border border-circus-gold/20 m-1"></div>
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-circus-gold m-1"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-circus-gold m-1"></div>

              <ImageWithFallback
                src={OFFICIAL_IMAGES.sosinaPortrait}
                alt="Sosina Wogayehu Portrait"
                className="aspect-[3/4] w-full"
              />
              <div className="mt-3.5 text-center px-2 pb-1.5">
                <h4 className="font-cinzel text-sm text-circus-gold font-bold tracking-widest uppercase">Sosina Wogayehu OAM</h4>
                <p className="font-serif text-[11px] text-circus-text/50 mt-1 italic">Founding Director, Circus Center</p>
              </div>
            </div>
          </div>

          {/* Text/Bio Column */}
          <div className="w-full lg:w-7/12 space-y-6">
            <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-circus-gold" /> THE DRIVING FORCE
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-circus-cream leading-tight italic">
              "Our inspiration and the driving force behind the Circus Center is Sosina Wogayehu, one of Ethiopia's greatest circus expatriates"
            </h2>
            <h3 className="font-cormorant text-lg text-circus-gold font-semibold uppercase tracking-wider">Sosina Wogayehu</h3>

            {/* Exact Word-for-Word Text */}
            <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed">
              "Sosina Wogayehu was born and raised in Addis Ababa. After an international career Sosina Wogayehu returned to Ethiopia in 2013 to establish circus programs in Addis Ababa. She wished to build on Ethiopia's circus traditions, and share them with the world. She also wished to harness circus as a tool for empowerment, to engage young people, and support their educational development, providing them with a pathway out of poverty. Despite no permanent venue or ongoing funding, Sosina established GAMO Circus School and Ethio Circus Entertainment. For over 15 years, she has successfully supported hundreds of young people to develop circus skills and sponsor them with education. She has managed the training of a series of highly skilled circus artists, and supported them to perform in leading shows around the world, including Cirque Du Soleil and Circus 1903. Her dream now is to establish a permanent home which can ensure the work of providing a pathway out of unemployment for the young people of Ethiopia, a place to call home, the Circus Center, Addis Ababa, Ethiopia."
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleNavigate('about-us')}
                className="px-6 py-3 font-cinzel text-xs tracking-widest bg-circus-gold/5 border border-circus-gold text-circus-gold hover:bg-circus-gold hover:text-circus-bg font-extrabold transition-all duration-300 rounded-sm focus:outline-none cursor-pointer"
                id="sosina-spotlight-cta"
              >
                READ SOSINA'S LIFE STORY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIRECTOR'S MESSAGE PREVIEW */}
      <section className="bg-zinc-950/80 border-y border-[#C8963E1D] py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="font-cinzel text-xs text-circus-gold/60 tracking-widest uppercase">DIRECTOR'S SPEECH PREVIEW</span>
          
          {/* Quote Container */}
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-7xl font-display text-circus-gold/10 pointer-events-none">“</span>
            <p className="font-serif text-base sm:text-lg text-circus-text/90 italic leading-relaxed">
              "Circus provides great opportunities for the youth of Ethiopia. It protects young people from being on the street and vulnerable to substance abuse. It will keep young people healthy. It teaches discipline. It creates jobs. It supports many to further education and training, and when circus artists are contracted abroad, they are able to help their younger sisters and brothers to attend better schools. They support their family, community and the country. They build self-esteem, learn a language and travel the world..."
            </p>
            <span className="absolute -bottom-14 -right-2 text-7xl font-display text-circus-gold/10 pointer-events-none">”</span>
          </div>

          <div className="pt-6">
            <button
              onClick={() => handleNavigate('directors-message')}
              className="inline-flex items-center gap-1 font-cinzel text-xs text-circus-gold hover:text-[#EDE8DF] font-bold tracking-widest transition-colors cursor-pointer group focus:outline-none"
              id="directors-preview-link"
            >
              <span>READ FULL MESSAGE</span>
              <ArrowRight className="w-4 h-4 text-circus-gold transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: LATEST NEWS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">REAL-TIME PROGRESS</span>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
            Latest News from the Circus Center, Entoto!
          </h2>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Card 1 */}
          <div className="bg-zinc-950/60 border border-[#C8963E1a] p-8 rounded-sm space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-circus-teal text-xs font-mono uppercase tracking-wide">
                <TreePine className="w-4 h-4 text-circus-teal" /> ENVIRONMENT & ECO-LEGACY
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-circus-cream italic leading-tight">
                "Over 500 trees were planted at the Circus Center, Entoto"
              </h3>
              <p className="font-serif text-sm text-circus-text/75 leading-relaxed">
                "Over 200 circus artists, locals and trainers joined us to plant native trees at the site of the circus center, leaving their green footprint at Ethiopia's first circus theatre. 6 Billion trees have been planted in Ethiopia over the past year as a part of the Ethiopian government's Green Legacy project."
              </p>
            </div>

            {/* Photo Strip Grid (5 slots) */}
            <div className="space-y-2">
              <span className="font-cinzel text-[10px] text-circus-gold/50 tracking-wider block">PHOTO STRIP: PROJECT GREEN FOOTPRINT</span>
              <div className="grid grid-cols-5 gap-1.5 h-16 sm:h-20">
                {[
                  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=150', // forest native
                  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=150', // mist
                  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=150', // ecology
                  'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=150', // nature
                  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=150'  // native sapling
                ].map((url, i) => (
                  <ImageWithFallback key={i} src={url} alt={`Sapling root ${i+1}`} className="w-full h-full border border-white/5" />
                ))}
              </div>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-zinc-950/60 border border-[#C8963E1a] p-8 rounded-sm space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="flex items-center gap-2 text-circus-gold text-xs font-mono uppercase tracking-wide">
                <Construction className="w-4 h-4 text-circus-gold animate-spin-slow" /> CONSTRUCTION UPDATE
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-circus-cream italic leading-tight">
                "The build has begun!"
              </h3>
              <h4 className="font-serif text-xs font-semibold text-circus-gold tracking-wide">
                "The Circus Center Entoto has secured a donor to fund 50% of the build"
              </h4>
              <p className="font-serif text-sm text-circus-text/75 leading-relaxed">
                "We are thrilled to announce that the Circus Center, Entoto has secured a donor to fund 50% of the total build. Surveying and preparing the foundational has begun. Bamacon Engineering, well respected Level 1 contractors in Ethiopia are in charge of the build. This project will create employment opportunities for the local and greater community both during and after the build."
              </p>
            </div>

            {/* Photo Strip Grid (5 slots) */}
            <div className="space-y-2">
              <span className="font-cinzel text-[10px] text-circus-gold/50 tracking-wider block">PHOTO STRIP: FOUNDATIONS & SURVEYING</span>
              <div className="grid grid-cols-5 gap-1.5 h-16 sm:h-20">
                {[
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=150', // construction foundations
                  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=150', // safety surveying
                  'https://images.unsplash.com/photo-1503387762-592dec5824eb?q=80&w=150', // concrete layout
                  'https://images.unsplash.com/photo-1531834685032-c34bf0d8b286?q=80&w=150', // architectural structural
                  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=150'  // blueprints teamwork
                ].map((url, i) => (
                  <ImageWithFallback key={i} src={url} alt={`Foundational steel ${i+1}`} className="w-full h-full border border-white/5" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DONOR CTA BANNER */}
      <section className="bg-circus-gold/10 border-y border-circus-gold/30 relative">
        <div className="absolute inset-0 ethiopian-pattern pointer-events-none opacity-[0.05]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-10 space-y-6">
          <h2 className="font-cormorant text-2xl sm:text-4xl text-circus-gold font-bold italic tracking-wide">
            "Be a Donor, Fundraiser, Advocate or Partner!!"
          </h2>
          <div className="flex justify-center">
            <button
              onClick={() => handleNavigate('donor-page')}
              className="px-8 py-4 text-xs sm:text-sm font-cinzel bg-circus-red hover:bg-white text-white hover:text-circus-bg font-extrabold rounded-xs tracking-widest hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer focus:outline-none"
              id="donor-cta-banner-button"
            >
              <Heart className="w-4 h-4 fill-current animate-pulse" />
              <span>DONATE NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: GALLERY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">THE VISUAL CAPTURES</span>
          <h2 className="font-cormorant text-3xl sm:text-4xl text-circus-cream font-bold mt-2">
            The Circus Center, Addis Ababa, Ethiopia
          </h2>
          <p className="font-serif text-xs text-circus-text/50 italic mt-2">
            "Images Copyright Gamo Circus 2020"
          </p>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        {/* 8 placeholder image slots with styled dark frames */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "Solo Contortion", desc: "Expressive Flexibility", url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=400" },
            { tag: "Icarian Game", desc: "Acrobatic Precision", url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400" },
            { tag: "Group Pyramids", desc: "Interlocking Balance", url: "https://images.unsplash.com/photo-1513829096999-4978602297af?q=80&w=400" },
            { tag: "Juggling Mastery", desc: "Absolute Ball Concentration", url: "https://images.unsplash.com/photo-1574115918913-a8d29ec49b2c?q=80&w=400" },
            { tag: "Aerial Ring Performance", desc: "Empowered Heights", url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400" },
            { tag: "Youth Class Workshops", desc: "Serving Local Schools", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400" },
            { tag: "Tree Planting Day", desc: "Planting Green Legacy Foundations", url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400" },
            { tag: "Addis Training Center", desc: "Physical Theatre Mentorship", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative p-1.5 border border-[#C8963E17] rounded-sm bg-zinc-950 hover:border-circus-gold/40 hover:scale-[1.02] transition-all duration-350 shadow-lg"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-circus-gold/40"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-circus-gold/40"></div>

              <ImageWithFallback
                src={item.url}
                alt={item.tag}
                className="aspect-square w-full"
              />
              <div className="mt-2.5 px-1.5 pb-1">
                <span className="font-cinzel text-[10px] text-circus-gold font-bold tracking-wider block uppercase">
                  {item.tag}
                </span>
                <span className="font-serif text-[10px] text-circus-text/50 italic block mt-0.5">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: GOFUNDME CTA */}
      <section className="bg-gradient-to-t from-zinc-950 to-circus-bg py-20 border-t border-[#C8963E1D] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <ImageIcon className="w-8 h-8 text-circus-gold mx-auto opacity-70 animate-bounce" />
          <h3 className="font-cinzel text-[#F2E8D5] text-xs font-bold tracking-widest uppercase">
            Official Giving Channel
          </h3>
          <p className="font-serif text-sm text-circus-text/70 pb-3">
            Secure processing via our official GoFundMe page. Thank you for your support!
          </p>
          <a
            href="https://gf.me/u/y2jgxn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 font-cinzel text-xs text-white bg-circus-red hover:bg-[#C8963E] font-extrabold tracking-widest rounded-sm transition-all duration-300 shadow-[0_5px_15px_rgba(181,41,42,0.35)]"
            id="gofundme-centered-link"
          >
            <span>DONATE TO OUR GOFUNDME CAMPAIGN</span>
          </a>
        </div>
      </section>
    </div>
  );
}
