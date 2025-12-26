'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PROJECTS, IMAGES, CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import LeadMagnet from '@/components/LeadMagnet';
import { ArrowRight, Compass, ShieldCheck, Globe, TrendingUp, CheckCircle, PlayCircle, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % IMAGES.heroSlides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-brand-950 overflow-hidden">
      {IMAGES.heroSlides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
          <img src={slide} alt="ExpatRockstars Luxury Experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/40 to-brand-950" />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT['en'];

  useEffect(() => {
    // Only run intersection observer on client
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]); // Re-run if lang changes (content might shift)

  return (
    <>
      {/* HERO EXPERIENCE */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <HeroCarousel />

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
              <div className="w-2 h-2 bg-brand-GOLD rounded-full animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Market Intelligence 2025</span>
            </div>

            <h1 className="font-heading text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 uppercase italic">
              OWN THE <br /> <span className="text-brand-GOLD">PANAMA</span> DREAM.
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 font-medium">
              We guide international investors to the most prestigious, high-yield real estate opportunities in the tropics.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-in fade-in zoom-in duration-1000 delay-700">
              <Link href="/proyectos" className="btn-3d btn-3d-gold px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center">
                EXPLORE ASSETS
              </Link>
              <Link href="/tours" className="btn-3d btn-3d-navy px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center gap-3">
                <PlayCircle size={20} className="text-brand-GOLD" /> DISCOVERY TOURS
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
          <span className="text-[9px] font-black uppercase tracking-widest text-white">Scroll to Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-GOLD to-transparent"></div>
        </div>
      </section>

      {/* SEO INTELLIGENCE WALL */}
      <section className="py-32 bg-brand-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-GOLD/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 reveal-on-scroll">
          <div className="text-center mb-24">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Rockstar Intelligence</span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-10 tracking-tighter uppercase italic">{t.homepage.introTitle}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-invert prose-lg text-slate-400 space-y-8 leading-relaxed font-medium">
              <p className="border-l-4 border-brand-GOLD pl-8 italic text-white text-2xl font-bold">"In Panama, we don't just sell property; we engineer lifestyle exits for the savvy global elite."</p>
              <p>{t.homepage.introBody}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 reveal-on-scroll stagger-1">
              {[
                { label: "Rental Yield", val: "8-12%", icon: TrendingUp },
                { label: "Safety Rank", val: "#1", icon: ShieldCheck },
                { label: "Community", val: "25k+", icon: Globe },
                { label: "Tax Benefits", val: "Tier-1", icon: Star }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 rounded-[2rem] text-center border-white/5 hover:border-brand-GOLD/30 transition-colors group">
                  <stat.icon className="mx-auto mb-4 text-brand-GOLD group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-3xl font-black text-white mb-2">{stat.val}</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ASSETS: FLOATING CARDS */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 reveal-on-scroll">
            <div className="max-w-2xl">
              <span className="text-brand-GOLD font-black uppercase tracking-[0.4em] text-[10px] mb-4 block italic">Curated Portfolio</span>
              <h2 className="font-heading text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">VIP DEVELOPMENTS</h2>
              <p className="text-slate-400 text-lg font-medium">High-liquidity <strong>Panama branded residences</strong> and beachfront assets engineered for the modern Rockstar investor.</p>
            </div>
            <Link href="/proyectos" className="btn-3d btn-3d-gold px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center">VIEW ENTIRE INVENTORY</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <div key={project.id} className={`reveal-on-scroll stagger-${(idx % 3) + 1} animate-float`} style={{ animationDelay: `${idx * 0.5}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT ROI: PREMIUM DARK EXPERIENCE */}
      <section className="py-32 bg-brand-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center reveal-on-scroll">
            <div className="relative p-12 lg:p-20 glass-card rounded-[4rem] border-white/5 shadow-inner">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-GOLD/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
              <TrendingUp className="text-brand-GOLD mb-10" size={80} />
              <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-10 uppercase tracking-tighter italic">{t.homepage.investmentTitle}</h3>
              <div className="prose prose-invert prose-lg text-slate-400 font-medium leading-relaxed mb-12">
                {t.homepage.investmentBody}
              </div>
              <ul className="space-y-10">
                <li className="flex items-start gap-6 reveal-on-scroll stagger-1">
                  <div className="bg-brand-GOLD text-brand-900 p-2.5 rounded-xl shadow-lg"><CheckCircle size={24} /></div>
                  <div>
                    <p className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">Tax Exemption 2025</p>
                    <p className="text-sm text-slate-500 font-medium">New <strong>Panama beachfront condos</strong> qualify for long-term fiscal incentives.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 reveal-on-scroll stagger-2">
                  <div className="bg-brand-GOLD text-brand-900 p-2.5 rounded-xl shadow-lg"><CheckCircle size={24} /></div>
                  <div>
                    <p className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">Dollarized Stability</p>
                    <p className="text-sm text-slate-500 font-medium">Protect your capital in the only LatAm economy with no central bank printing risk.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl h-[600px] border-4 border-brand-GOLD/20">
              <img src={IMAGES.heroSlides[3]} alt="Investment Quality" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Benchmark Performance</span>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic">Securing the Caribbean Frontier</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal-on-scroll">
        <LeadMagnet />
      </div>

      {/* THE JOURNEY: DARK MINIMALISM */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-24 reveal-on-scroll">
            <span className="text-brand-GOLD font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Discovery System</span>
            <h2 className="text-4xl md:text-8xl font-heading font-black mb-10 tracking-tighter uppercase italic">{t.homepage.expatLifeTitle}</h2>
            <div className="max-w-3xl mx-auto text-xl text-slate-400 font-medium leading-relaxed italic">
              {t.homepage.expatLifeBody}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Compass, title: "Curated Tours", desc: "Private access to <strong>Panama relocation tours</strong> focused on your specific ROI goals." },
              { icon: ShieldCheck, title: "Elite Ground Team", desc: "Legal concierges handling your <strong>residency visa</strong> and banking setup in 48 hours." },
              { icon: Globe, title: "Lifestyle Vetting", desc: "Connect with established <strong>expat leaders</strong> before you make your first deposit." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-12 rounded-[3rem] hover:bg-brand-GOLD hover:text-brand-900 transition-all duration-500 group reveal-on-scroll stagger-1 border-white/5">
                <item.icon className="text-brand-GOLD mb-10 group-hover:text-brand-900 transition-colors transform group-hover:scale-125" size={48} />
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter italic">{item.title}</h4>
                <p className="text-slate-400 group-hover:text-brand-900 text-sm font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL WALL OF CONVERSION */}
      <section className="py-40 bg-brand-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none animate-spin-slow">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-GOLD rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-GOLD/30 rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-9xl font-heading font-black text-white mb-16 tracking-tighter uppercase italic leading-[0.8]">READY FOR THE <br /> <span className="text-brand-GOLD">UPGRADE?</span></h2>
          <div className="flex flex-wrap justify-center gap-10">
            <Link href="/contacto" className="btn-3d btn-3d-navy px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex items-center justify-center">CONTACT A SENIOR ADVISOR</Link>
            <Link href="/tours" className="btn-3d btn-3d-gold px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center">BOOK DISCOVERY JOURNEY</Link>
          </div>
        </div>
      </section>
    </>
  );
}
