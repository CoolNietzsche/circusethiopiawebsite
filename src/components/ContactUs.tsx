import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Send, Landmark, CheckCircle, ShieldAlert } from 'lucide-react';
import { OFFICIAL_IMAGES } from '../data';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className="pt-24 bg-circus-bg text-circus-text" id="page-contact">
      {/* HERO SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">DIRECT CONNECTION</span>
          <h1 className="font-cormorant text-4xl sm:text-5xl text-circus-cream font-bold mt-2">
            Get in Touch
          </h1>
          <div className="h-0.5 w-24 bg-circus-gold/30 mx-auto mt-4"></div>
        </div>

        {/* TWO COLUMN GENERAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Address, email, and social networks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-cinzel text-xs text-circus-gold tracking-widest uppercase">Contact Information</h3>
              
              <div className="space-y-4 font-serif text-sm">
                <div className="flex items-start gap-4 p-4 bg-zinc-950/60 border border-white/5 rounded-xs">
                  <MapPin className="w-5 h-5 text-circus-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-cinzel text-[10px] text-circus-gold/60 tracking-wider font-bold uppercase">Circus Center Site</h4>
                    <p className="text-circus-text/90 mt-1">Entoto Mountain Royal Forest,</p>
                    <p className="text-circus-text/70 text-xs">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-zinc-950/60 border border-white/5 rounded-xs">
                  <Mail className="w-5 h-5 text-circus-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-cinzel text-[10px] text-circus-gold/60 tracking-wider font-bold uppercase">Official Mailbox</h4>
                    <p className="text-circus-text/90 mt-1 hover:text-circus-gold transition-colors">
                      <a href="mailto:info@circusethiopia.org">info@circusethiopia.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-zinc-950/60 border border-white/5 rounded-xs">
                  <Globe className="w-5 h-5 text-circus-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-cinzel text-[10px] text-circus-gold/60 tracking-wider font-bold uppercase">Web Domain</h4>
                    <p className="text-circus-text/90 mt-1">www.circusethiopia.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels using lh3 image resources */}
            <div className="space-y-4">
              <h3 className="font-cinzel text-xs text-circus-gold/60 tracking-widest uppercase block">Social Communities</h3>
              <div className="flex space-x-3.5 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/15 transition-all"
                >
                  <img src={OFFICIAL_IMAGES.facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/15 transition-all"
                >
                  <img src={OFFICIAL_IMAGES.socialIcon1} alt="Social Primary" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/15 transition-all"
                >
                  <img src={OFFICIAL_IMAGES.socialIcon2} alt="Social Secondary" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-sm bg-[#ffffff05] border border-circus-gold/20 flex items-center justify-center hover:bg-circus-gold/15 transition-all"
                >
                  <img src={OFFICIAL_IMAGES.socialIcon3} alt="Social Tertiary" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                </a>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="space-y-4">
              <span className="font-cinzel text-[10px] text-circus-gold/60 tracking-widest uppercase font-bold block">GEOGRAPHIC COORDINATES</span>
              <div className="relative p-1 border border-[#C8963D25] bg-zinc-950 rounded-sm overflow-hidden h-44 shadow-lg flex flex-col justify-center items-center text-center">
                {/* Simulated topo-mesh overlay pattern */}
                <div className="absolute inset-0 bg-[#0d0a05] opacity-50"></div>
                {/* Background topographic feel map */}
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400')` }}
                ></div>
                <div className="relative z-10 p-4 space-y-2">
                  <MapPin className="w-6 h-6 text-circus-red mx-auto animate-bounce" />
                  <h4 className="font-cinzel text-xs font-bold text-circus-gold tracking-widest uppercase">ADDIS ABABA, ETHIOPIA</h4>
                  <p className="font-serif text-[10px] text-circus-text/50">Entoto Park Cultural Precinct Altitude ~ 2,600m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Styled Contact Form */}
          <div className="lg:col-span-7 bg-zinc-950/40 border border-[#C8963E17] p-8 sm:p-10 rounded-sm shadow-2xl relative">
            <div className="absolute inset-0 ethiopian-pattern opacity-[0.03] pointer-events-none"></div>
            
            <h3 className="font-cinzel text-xs text-circus-gold tracking-widest uppercase mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 text-circus-gold" /> Send an Inquiry
            </h3>

            {success ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-circus-teal animate-bounce" />
                <h4 className="font-cinzel text-sm text-circus-teal tracking-widest uppercase font-bold">Message Submitted Successfully</h4>
                <p className="font-serif text-xs text-circus-text/60 max-w-sm">
                  Thank you for reaching out to Circus Ethiopia. Our communication coordinators will review your submission and contact you via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-serif text-sm relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs text-circus-text/50 font-sans block">YOUR NAME</label>
                    <input
                      required
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#120f0a] border border-white/5 rounded-sm p-3.5 text-circus-text focus:outline-none focus:border-circus-gold/50 transition-colors"
                      placeholder="e.g. Sosina Tesfaye"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs text-circus-text/50 font-sans block">YOUR EMAIL</label>
                    <input
                      required
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#120f0a] border border-white/5 rounded-sm p-3.5 text-circus-text focus:outline-none focus:border-circus-gold/50 transition-colors"
                      placeholder="e.g. name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-subject" className="text-xs text-circus-text/50 font-sans block">SUBJECT</label>
                  <input
                    type="text"
                    id="form-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#120f0a] border border-white/5 rounded-sm p-3.5 text-circus-text focus:outline-none focus:border-circus-gold/50 transition-colors"
                    placeholder="Sponsorship offer, partnership inquiry, etc."
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs text-circus-text/50 font-sans block">MESSAGE</label>
                  <textarea
                    required
                    id="form-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#120f0a] border border-white/5 rounded-sm p-3.5 text-circus-text focus:outline-none focus:border-circus-gold/50 transition-colors resize-none"
                    placeholder="Describe how you would like to support or query our programs in Addis Ababa..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 text-center font-cinzel text-xs font-bold bg-circus-gold hover:bg-white text-circus-bg tracking-widest rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                  >
                    <span>SUBMIT MESSAGE</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LEGAL REGISTRATION DISCLOSURE - preserved word for word equivalents */}
      <section className="bg-zinc-950/70 border-t border-[#C8963D1a] py-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="font-cinzel text-[10px] text-circus-gold tracking-widest uppercase font-bold flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-circus-gold" /> NGO REGISTRATION STATUS
          </span>
          <p className="font-serif text-xs text-circus-text/50 leading-relaxed text-justify">
            Legal Details: The Circus Center, Addis Ababa, Ethiopia operates as a formally registered and credentialed Non-Governmental Organization (NGO) within the jurisdiction of the Federal Democratic Republic of Ethiopia. Fully licensed to conduct non-profit, humanitarian performing arts curricula, local trees planting eco projects, and international sports representations since 2013 under the leadership of Sosina Wogayehu OAM.
          </p>
        </div>
      </section>
    </div>
  );
}
