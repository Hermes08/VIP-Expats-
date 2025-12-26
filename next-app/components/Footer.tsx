'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Instagram, Lock } from 'lucide-react';
import { CONTENT, CONTACT_INFO } from '@/lib/constants';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
    const { lang } = useLanguage();
    const t = CONTENT[lang] || CONTENT['en'];

    return (
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
                            <li><Link href="/proyectos" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Developments</Link></li>
                            <li><Link href="/quiz" className="hover:text-white transition-colors flex items-center gap-2 group text-brand-GOLD"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Neighborhood Quiz</Link></li>
                            <li><Link href="/tours" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Relocation Tours</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 transition-all" /> Market Intelligence</Link></li>
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
                        <Link href="/admin" className="hover:text-white transition-all flex items-center gap-2"><Lock size={12} /> Admin Control</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
