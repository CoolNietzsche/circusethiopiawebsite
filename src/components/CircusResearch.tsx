import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, BarChart3, Mail, Quote, ShieldAlert, Award } from 'lucide-react';

export default function CircusResearch() {
  const researchCards = [
    {
      title: "Social Circus and Youth Development",
      abstract: "A comprehensive investigation analyzing physically-demanding artistic programs (Social Circus) as primary cognitive interventions for street-vulnerable youth. The findings detail direct gains in emotional resilience, absolute peer trust, hand-eye coordination agility, and general self-esteem. Case profiles include qualitative indicators of Gamo Circus alumni transitions in Addis Ababa."
    },
    {
      title: "Circus as Education in Developing Nations",
      abstract: "This paper assesses the incorporation of gymnastic, contortion, and balance training as a non-formal vocational education pathway within under-resourced structures. Under conditions of high youth unemployment, contemporary circus schools serve as critical bridges to financial independence, self-employment, and international technical certification."
    },
    {
      title: "Ethiopian Circus: A Cultural Heritage",
      abstract: "Examines the intersection of ancestral Ethiopian movement expressions, liturgical dance geometries, contortion patterns, and European physical theatricality. The study highlights how Gamo Circus and Ethio Circus Entertainment act as live archives preserving rare cultural motion syntax while innovating the global contemporary arts stage."
    }
  ];

  const statistics = [
    { value: "70%", label: "of Ethiopia's population is under 30 years old" },
    { value: "48%", label: "under 15 years old" },
    { value: "110M", label: "People total population" },
    { value: "100s", label: "of youth professionally trained of Gamo Circus" }
  ];

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-research">
      {/* HEADER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 max-w-3xl mx-auto z-10 relative">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-circus-gold animate-pulse" /> ACADEMIC STUDIES
          </span>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-circus-cream font-bold mt-2">
            Circus Research
          </h1>
          <h2 className="font-serif text-sm sm:text-base text-circus-gold/80 italic mt-3">
            "The evidence behind circus as a tool for youth empowerment"
          </h2>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>
      </section>

      {/* THREE RESEARCH CARDS */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 p-6 sm:p-8 rounded-sm border border-[#C8963E4a] hover:border-circus-gold/80 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-circus-gold/50 tracking-widest uppercase block">PAPER ABSTRACT 0{idx+1}</span>
                <h3 className="font-cinzel text-xs sm:text-sm font-bold text-circus-cream tracking-wider leading-snug">
                  {card.title}
                </h3>
                <p className="font-serif text-xs text-circus-text/70 leading-relaxed text-justify">
                  {card.abstract}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <button
                  onClick={() => alert(`Full text and research bibliography for "${card.title}" will be catalogued in the permanent Circus Center Library. For inquiries write to info@circusethiopia.org.`)}
                  className="w-full py-2 bg-circus-gold/5 border border-circus-gold/30 hover:bg-circus-gold hover:text-circus-bg font-cinzel text-[10px] font-bold tracking-widest uppercase rounded-sm transition-all focus:outline-none cursor-pointer"
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD STATISTICS BAR */}
      <section className="bg-zinc-950/80 border-y border-[#C8963E1A] py-16 my-16 relative">
        <div className="absolute inset-0 ethiopian-pattern pointer-events-none opacity-[0.04]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, i) => (
              <div key={i} className="text-center space-y-1.5 border-r border-[#C8963E15] last:border-none px-4">
                <span className="font-display text-3xl sm:text-4xl text-circus-gold font-bold block filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {stat.value}
                </span>
                <span className="font-serif text-[10px] sm:text-xs text-circus-text/60 leading-tight block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO NOTE */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Mail className="w-8 h-8 text-circus-gold mx-auto opacity-70" />
          <h3 className="font-cinzel text-[#F2E8D5] text-xs font-bold tracking-widest uppercase">
            Inquire for Academic Collaboration
          </h3>
          <p className="font-serif text-xs sm:text-sm text-circus-text/75 leading-relaxed">
            We actively support global researchers studying performance arts pedagogy, social work metrics, and Ethiopian non-profit frameworks.
          </p>
          <div className="pt-2 font-mono text-xs text-circus-gold">
            {/* Preserved word-for-word exactly */}
            <span>"For research inquiries, contact <a href="mailto:info@circusethiopia.org" className="underline hover:text-white">info@circusethiopia.org</a>"</span>
          </div>
        </div>
      </section>
    </div>
  );
}
