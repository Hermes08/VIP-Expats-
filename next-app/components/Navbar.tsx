'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Sparkles } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { CONTENT } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
    const { lang, setLang } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const t = CONTENT[lang] || CONTENT['en'];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-950/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="z-50 focus:outline-none">
                        <span className="font-heading text-xl md:text-3xl font-black tracking-tighter">
                            <span className="text-brand-GOLD uppercase">EXPAT</span><span className="uppercase text-white">ROCKSTARS</span><span className="text-brand-GOLD">.</span>
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/70">
                            <Link href="/proyectos" className={isActive('/proyectos') ? 'text-brand-GOLD' : 'hover:text-brand-GOLD transition-all'}>{t.nav.projects}</Link>
                            <Link href="/quiz" className={isActive('/quiz') ? 'text-brand-GOLD' : 'flex items-center gap-2 hover:text-brand-GOLD transition-all'}><Sparkles size={14} className="animate-pulse" /> Neighborhood Quiz</Link>
                            <Link href="/tours" className={isActive('/tours') ? 'text-brand-GOLD' : 'hover:text-brand-GOLD transition-all'}>{t.nav.tours}</Link>
                            <Link href="/blog" className={isActive('/blog') ? 'text-brand-GOLD' : 'hover:text-brand-GOLD transition-all'}>{t.nav.blog}</Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
                            <Link href="/proyectos" className="btn-3d btn-3d-gold px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
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
                    <Link href="/proyectos" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.projects}</Link>
                    <Link href="/quiz" className="text-2xl font-black text-brand-GOLD uppercase tracking-tighter flex items-center gap-3"><Sparkles size={24} /> Neighborhood Quiz</Link>
                    <Link href="/tours" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.tours}</Link>
                    <Link href="/blog" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.blog}</Link>
                    <Link href="/contacto" className="text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-GOLD">{t.nav.contact}</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
