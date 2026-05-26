import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Megaphone, MessageSquare, Handshake, Heart, Mail, Landmark, Users } from 'lucide-react';

export default function DonorPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@circusethiopia.org');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donorTypes = [
    {
      icon: <Gift className="w-6 h-6 text-circus-gold" />,
      title: "🎁 Donor",
      action: "Financial Contribution",
      description: "Direct sponsorship to finance eco-friendly architecture, logistics, gymnastics mats, dynamic pulley systems, and legal compliance. Ideal for single donations or ongoing monthly support."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-circus-gold" />,
      title: "📣 Fundraiser",
      action: "Host a Campaign",
      description: "Organize digital crowds, performance events, or runs in your local city or school club. We supply certified media assets and brochures to facilitate your outreach."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#C8963D]" />,
      title: "💬 Advocate",
      action: "Spread the Word",
      description: "Follow us, write about Sosina’s dream, and tag journalists or arts philanthropists. Amplifying our storytelling connects us directly with prominent global scouts."
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#C8963D]" />,
      title: "🤝 Partner",
      action: "Organizational Collaboration",
      description: "Establish artistic residency programs, educational exchanges, or certified gymnastics sponsorships. Contact us directly to orchestrate institutional pathways."
    }
  ];

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-donor">
      {/* HERO SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-6 max-w-4xl mx-auto z-10 relative">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-circus-red animate-pulse" /> MAKE AN IMPACT
          </span>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-circus-cream font-bold italic">
            "Be a Donor, Fundraiser, Advocate or Partner!!"
          </h1>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>

          <p className="font-serif text-sm sm:text-base text-circus-text/80 leading-relaxed max-w-2xl mx-auto pt-2">
            "Our first major goal is to raise $800,000 to establish the Circus Center in Entoto Park, an Ethiopian Government initiative."
          </p>
        </div>
      </section>

      {/* DECORATIVE FUNDRAISING PROGRESS CONSOLE */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 p-8 sm:p-10 rounded-sm border border-[#C8963E2a] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 ethiopian-pattern opacity-[0.04]"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <span className="font-cinzel text-[10px] text-circus-gold/60 tracking-widest block uppercase">FUNDING STATUS</span>
                <h3 className="font-cinzel text-base text-circus-cream font-bold mt-1">THE FIRST MILESTONE</h3>
              </div>
              <div className="text-center sm:text-right">
                <span className="font-mono text-2xl text-circus-gold font-bold">$416,000</span>
                <span className="font-serif text-xs text-circus-text/50 block">Raised of $800,000 Target</span>
              </div>
            </div>

            {/* Custom high-contrast progress bar track */}
            <div className="space-y-2">
              <div className="w-full bg-zinc-900 border border-white/5 h-4 rounded-full overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-circus-red to-circus-gold w-[52%] transition-all duration-1000"></div>
                {/* Horizontal light glow reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] text-circus-text/50">
                <span>52% Secured</span>
                <span>$384,000 Remaining</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 text-center">
              <a
                href="https://gf.me/u/y2jgxn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-cinzel text-xs text-white bg-circus-red hover:bg-[#C8963D] font-extrabold tracking-widest rounded-sm shadow-[0_5px_20px_rgba(181,41,42,0.4)] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none"
                id="donor-primary-gofundme-btn"
              >
                <Heart className="w-4 h-4 fill-current animate-pulse text-white" />
                <span>DONATE ON GOFUNDME</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR DONOR TYPE CARDS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donorTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 p-6 sm:p-8 rounded-sm border border-[#C8963E14] hover:border-circus-gold/40 hover:scale-[1.02] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-circus-gold/5 border border-circus-gold/20 flex items-center justify-center">
                  {type.icon}
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-circus-gold/60 tracking-widest uppercase block">{type.action}</span>
                  <h3 className="font-cinzel text-sm text-circus-cream font-bold">
                    {type.title}
                  </h3>
                </div>
                <p className="font-serif text-xs text-circus-text/75 leading-relaxed leading-6 text-justify">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FOR PARTNERSHIPS */}
      <section className="bg-zinc-950/80 border-t border-[#C8963E1c] py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Mail className="w-8 h-8 text-circus-gold mx-auto opacity-75" />
          <h2 className="font-cinzel text-lg text-circus-gold tracking-widest uppercase font-bold">
            Interested in Partnership?
          </h2>
          <p className="font-serif text-sm text-circus-text/75 leading-relaxed">
            For institutional giving, corporate wire details, foundations grants, or structural collaborations, write directly to our management board:
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@circusethiopia.org"
              className="w-full sm:w-auto px-6 py-3 font-cinzel text-xs font-bold text-white bg-[#B5292A] hover:bg-[#C8963D] tracking-widest rounded-xs transition-colors"
            >
              info@circusethiopia.org
            </a>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-3 font-cinzel text-xs font-bold text-circus-gold border border-circus-gold/30 hover:border-circus-gold tracking-widest rounded-xs transition-colors cursor-pointer focus:outline-none"
              id="copy-email-btn"
            >
              {copied ? "COPIED!" : "COPY EMAIL ADDRESS"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
