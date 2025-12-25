import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, NavLink } from 'react-router-dom';
// Fixed: Added ArrowRight to the lucide-react imports
import { Menu, X, Phone, Mail, Instagram, MapPin, Lock, Search, Sparkles, ArrowRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import StickyCTA from './StickyCTA';
import RockstarParticles from './RockstarParticles';
import { Language } from '../types';
import { CONTENT, SEO_KEYWORDS_LIST, CONTACT_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = CONTENT[lang] || CONTENT['en'];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-950 text-slate-100 relative">
      <Helmet>
        <html lang={lang} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Persistent 3D Particle Field */}
      <RockstarParticles />

      <StickyCTA />

      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-950/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="z-50 focus:outline-none">
              <span className="font-heading text-xl md:text-3xl font-black tracking-tighter">
                <span className="text-brand-GOLD uppercase">EXPAT</span><span className="uppercase text-white">ROCKSTARS</span><span className="text-brand-GOLD">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/70">
                <NavLink to="/proyectos" className={({isActive}) => isActive ? 'text-brand-GOLD' : 'hover:text-brand-GOLD transition-all'}>{t.nav.projects}</NavLink>
                <NavLink to="/quiz" className={({isActive}) => isActive ? 'text-brand-GOLD' : 'flex items-center gap-2 hover:text-brand-GOLD transition-all'}><Sparkles size={14} className="animate-pulse" /> Neighborhood Quiz</NavLink>
                <NavLink to="/tours" className={({isActive}) => isActive ? 'text-brand-GOLD' : 'hover:text-brand-GOLD transition-all'}>{t.nav.tours}</NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? 'text-brand-GOLD' : 'hover:text-brand-GOLD transition-all'}>{t.nav.blog}</NavLink>
              </div>
              <div className="flex items-center gap-6">
                <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
                <Link to="/proyectos" className="btn-3d btn-3d-gold px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <Search size={14} /> {t.nav.search}
                </Link>
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-4">
              <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-950 shadow-2xl border-t border-white/5 p-10 flex flex-col gap-8 lg:hidden animate-in slide-in-from-top-4 duration-500">
            <Link to="/proyectos" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.projects}</Link>
            <Link to="/quiz" className="text-2xl font-black text-brand-GOLD uppercase tracking-tighter flex items-center gap-3"><Sparkles size={24}/> Neighborhood Quiz</Link>
            <Link to="/tours" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.tours}</Link>
            <Link to="/blog" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.blog}</Link>
            <Link to="/contacto" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.contact}</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow z-10 relative">{children}</main>

      <footer className="bg-black text-white pt-24 pb-12 z-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-GOLD/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <span className="font-heading text-4xl font-black tracking-tighter mb-8 block italic">
                <span className="text-brand-GOLD">EXPAT</span>ROCKSTARS<span className="text-brand-GOLD">.</span>
              </span>
              <p className="text-slate-400 max-w-sm mb-10 text-lg font-medium leading-relaxed italic border-l-4 border-brand-GOLD pl-6">{t.footer.about}</p>
              <div className="flex gap-6">
                <a href="#" className="p-3 glass-card rounded-full hover:bg-brand-GOLD hover:text-brand-900 transition-all transform hover:scale-110"><Instagram size={20} /></a>
                <a href="#" className="p-3 glass-card rounded-full hover:bg-brand-GOLD hover:text-brand-900 transition-all transform hover:scale-110"><Mail size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-[0.3em] mb-8">Navigation</h4>
              <ul className="space-y-6 text-slate-400 text-xs font-black uppercase tracking-widest">
                <li><Link to="/proyectos" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Developments</Link></li>
                <li><Link to="/quiz" className="hover:text-white transition-colors flex items-center gap-2 group text-brand-GOLD"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Neighborhood Quiz</Link></li>
                <li><Link to="/tours" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Relocation Tours</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Market Intelligence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-GOLD text-xs font-black uppercase tracking-[0.3em] mb-8">Global Access</h4>
              <ul className="space-y-6 text-slate-300 text-sm font-medium">
                <li className="flex items-start gap-4"><Phone size={18} className="text-brand-GOLD shrink-0" /> {CONTACT_INFO.displayPhone}</li>
                <li className="flex items-start gap-4"><Mail size={18} className="text-brand-GOLD shrink-0" /> {CONTACT_INFO.email}</li>
                <li className="flex items-start gap-4"><MapPin size={18} className="text-brand-GOLD shrink-0" /> {CONTACT_INFO.address}</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-slate-500 text-[9px] font-black uppercase tracking-[0.4em] flex flex-col md:flex-row justify-between items-center gap-6">
            <p>&copy; {new Date().getFullYear()} EXPATROCKSTARS REAL ESTATE. {t.footer.rights}</p>
            <div className="flex gap-10">
              <Link to="/admin" className="hover:text-white transition-all flex items-center gap-2"><Lock size={12} /> Admin Control</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;