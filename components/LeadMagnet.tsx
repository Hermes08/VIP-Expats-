import React, { useState } from 'react';
import { Download, CheckCircle2, ShieldCheck, Mail, BookOpen, Star } from 'lucide-react';
import { Language } from '../types';
import { CONTENT, COUNTRIES } from '../constants';

interface LeadMagnetProps {
  lang: Language;
  variant?: 'full' | 'sidebar';
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ lang, variant = 'full' }) => {
  const t = (CONTENT[lang]?.leadMagnet) || (CONTENT['en'].leadMagnet);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    intent: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="glass-card rounded-[3rem] p-16 text-center border-brand-GOLD/40">
        <div className="w-24 h-24 bg-brand-GOLD text-brand-900 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter italic">{t.success}</h3>
        <p className="text-brand-GOLD font-bold uppercase tracking-[0.2em] text-xs">A ROCKSTAR ADVISOR WILL REACH OUT MOMENTARILY.</p>
      </div>
    );
  }

  return (
    <section className="py-32 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-GOLD/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row border-white/5">
          {/* Visual Column */}
          <div className="lg:w-1/2 bg-brand-900 p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 animate-pulse">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[20px] border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-8 text-brand-GOLD">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
              </div>
              <p className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-xs mb-6 italic">
                {t.socialProof}
              </p>
              <h3 className="text-4xl md:text-6xl font-heading font-black text-white mb-16 leading-[0.9] tracking-tighter uppercase italic">
                THE PANAMA <br/> INVESTMENT <br/> <span className="text-brand-GOLD">BIBLE 2025.</span>
              </h3>

              {/* Book Experience */}
              <div className="relative group mx-auto lg:mx-0 max-w-[320px]">
                <div className="absolute inset-0 bg-brand-GOLD/30 rounded-2xl blur-2xl group-hover:blur-[60px] transition-all duration-700"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-l-[15px] border-brand-GOLD transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 h-[450px]">
                  <div className="p-10 h-full flex flex-col justify-between bg-gradient-to-br from-white via-neutral-50 to-neutral-200">
                    <div>
                      <div className="w-16 h-1.5 bg-brand-900 mb-8"></div>
                      <h4 className="text-3xl font-heading font-black text-brand-900 mb-6 leading-tight uppercase italic tracking-tighter">
                        ULTIMATE GUIDE <br/> TO PANAMA.
                      </h4>
                      <p className="text-[10px] font-black text-brand-AMBER uppercase tracking-[0.3em]">RETIREMENT & ROI STRATEGIES</p>
                    </div>
                    <div className="flex justify-between items-end border-t border-black/10 pt-6">
                      <span className="font-heading font-black text-sm tracking-tighter text-brand-900">EXPAT<br/>ROCKSTARS.</span>
                      <BookOpen size={32} className="text-brand-GOLD" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-1/2 p-16 md:p-20 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <span className="inline-block px-4 py-1.5 bg-brand-GOLD text-brand-900 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 shadow-2xl">
                {t.freeBadge}
              </span>
              <h2 className="text-4xl font-heading font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
                {t.title}
              </h2>
              
              <ul className="space-y-6 mb-12">
                {t.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 font-medium text-lg leading-snug">
                    <CheckCircle2 size={24} className="text-brand-GOLD shrink-0 mt-1" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{t.formLabels.name}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-GOLD outline-none transition-all text-white font-bold"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{t.formLabels.email}</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-GOLD outline-none transition-all text-white font-bold"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="btn-3d btn-3d-gold w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] transition-all flex items-center justify-center gap-4 mt-8"
                >
                  <Download size={20} /> {t.button}
                </button>
                <p className="text-center text-[10px] text-slate-500 font-black mt-6 uppercase tracking-[0.2em]">
                  {t.buttonSub}
                </p>
              </form>

              <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-brand-GOLD" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">{t.trust.privacy}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-GOLD" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">{t.trust.delivery}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;