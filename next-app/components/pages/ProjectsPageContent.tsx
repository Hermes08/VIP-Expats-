'use client';

import React, { useState } from 'react';
import { PROJECTS, CONTENT } from '@/lib/constants';
import ProjectCard from '@/components/ProjectCard';
import { Search, Map, TrendingUp, Info, ChevronDown, Filter, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProjectsPageContent: React.FC = () => {
    const { lang } = useLanguage();
    const [activeZone, setActiveZone] = useState<string>('All');
    const [activeType, setActiveType] = useState<string>('Any');
    const t = CONTENT[lang] || CONTENT['en'];

    const filteredProjects = PROJECTS.filter(p => {
        const zoneMatch = activeZone === 'All' || p.zone === activeZone;
        const typeMatch = activeType === 'Any' || p.type === activeType;
        return zoneMatch && typeMatch;
    });

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-brand-900 py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-brand-GOLD font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Exclusive Inventory</span>
                    <h1 className="font-heading text-4xl md:text-7xl font-bold text-white mb-8">
                        {lang === 'zh' ? '新开发项目' : 'New Developments Panama'}
                    </h1>
                    <p className="text-brand-300 text-xl max-w-2xl mx-auto leading-relaxed">
                        Curating the highest ROI <strong>panama real estate projects</strong> and exclusive <strong>panama luxury developments</strong> across the country's premium zones.
                    </p>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="sticky top-[72px] z-40 bg-white border-b border-neutral-100 py-6 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-10 items-center">
                            <div className="flex items-center gap-3">
                                <Filter size={14} className="text-brand-GOLD" />
                                <div className="relative">
                                    <select
                                        className="bg-transparent font-bold text-xs uppercase tracking-widest focus:outline-none cursor-pointer pr-6 appearance-none text-brand-900"
                                        value={activeZone}
                                        onChange={(e) => setActiveZone(e.target.value)}
                                    >
                                        <option value="All">{lang === 'zh' ? '全部地区' : 'All Neighborhoods'}</option>
                                        <option value="Beach">{lang === 'zh' ? '海滩' : 'Beach Areas'}</option>
                                        <option value="Mountain">{lang === 'zh' ? '山区' : 'Highlands'}</option>
                                        <option value="Caribbean">{lang === 'zh' ? '加勒比海' : 'Caribbean'}</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={12} />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Map size={14} className="text-brand-GOLD" />
                                <div className="relative">
                                    <select
                                        className="bg-transparent font-bold text-xs uppercase tracking-widest focus:outline-none cursor-pointer pr-6 appearance-none text-brand-900"
                                        value={activeType}
                                        onChange={(e) => setActiveType(e.target.value)}
                                    >
                                        <option value="Any">{lang === 'zh' ? '房产类型' : 'Property Type'}</option>
                                        <option value="Condo">{lang === 'zh' ? '公寓' : 'Condominiums'}</option>
                                        <option value="House">{lang === 'zh' ? '住宅' : 'Single Family'}</option>
                                        <option value="Villa">{lang === 'zh' ? '别墅' : 'Luxury Villas'}</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={12} />
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow md:max-w-sm relative">
                            <input
                                type="text"
                                placeholder={lang === 'zh' ? "搜索项目..." : "Search project by keyword..."}
                                className="w-full pl-12 pr-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:ring-2 focus:ring-brand-GOLD outline-none transition-all"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex justify-between items-center mb-16">
                    <p className="text-[10px] font-black text-brand-GOLD uppercase tracking-[0.3em]">
                        Showing {filteredProjects.length} Verified Rockstar Assets
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* SECTION: MASSIVE NEIGHBORHOOD ANALYSIS */}
                <div className="mt-32 pt-20 border-t border-neutral-100">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="bg-brand-GOLD/10 text-brand-AMBER px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Market Intelligence</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-900 mb-8">{t.projectsPage.neighborhoodTitle}</h2>
                            <div className="prose prose-lg text-brand-600 max-w-none text-left leading-relaxed whitespace-pre-line font-medium">
                                {t.projectsPage.neighborhoodBody}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 mt-20">
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-3"><TrendingUp className="text-brand-GOLD" /> Beachfront Investment Hotspots</h4>
                                    <p className="text-sm leading-relaxed text-brand-600">The <strong>panama condos on the beach</strong> market has expanded significantly towards <strong>playa caracol panama</strong> and Playa Bonita. These areas represent <strong>panama beachfront investment</strong> opportunities with the highest potential for short-term rental yields. Benchmark these against the traditional <strong>coronado panama real estate</strong> market to see how <strong>panama city beach real estate</strong> is evolving towards a younger, lifestyle-oriented demographic.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-3"><Map className="text-brand-GOLD" /> The Highlands & Retiro Life</h4>
                                    <p className="text-sm leading-relaxed text-brand-600">For <strong>panama mountain homes for sale</strong>, Boquete is the undisputed king. The <strong>boquete panama real estate</strong> market is driven by <strong>american retirees in panama</strong> looking for world-class wellness facilities and established <strong>expat communities in panama</strong>. Explore <strong>property in boquete panama</strong> as a defensive asset in your portfolio, providing stability and excellent quality of life under the <strong>pensionado visa panama</strong> benefits.</p>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-3"><Info className="text-brand-GOLD" /> Urban Luxury & Branded Residences</h4>
                                    <p className="text-sm leading-relaxed text-brand-600"><strong>Panama city condos</strong> continue to lead the region in sophistication. Projects like <strong>ocean reef islands panama</strong> and <strong>westin panama residences</strong> are the pinnacle of <strong>panama branded residences</strong>. These properties appeal to international buyers seeking <strong>panama high end real estate</strong> with the security of a global hotel brand. Benchmark these against <strong>punta pacifica condos</strong> like <strong>ph oceanaire</strong> to understand the premium of hotel-managed inventory.</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-3"><ShieldCheck className="text-brand-GOLD" /> Buyer's Checklist for Panama</h4>
                                    <p className="text-sm leading-relaxed text-brand-600">When <strong>buying real estate in panama</strong>, always verify the developer's track record and the <strong>panama real estate projects</strong>' history of appreciation. Our <strong>panama property investment guide</strong> recommends prioritizing <strong>panama gated communities</strong> with professional maintenance. Whether you seek <strong>panama expat real estate</strong> or a <strong>panama second home</strong>, the Rockstar advisors provide full transparency on closing costs and tax exemptions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Grounding Wall */}
            <section className="bg-neutral-50 py-20 border-t border-neutral-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h5 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-10 text-center">Global Property Search Hub</h5>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 text-[11px] font-bold text-brand-900 grayscale">
                        <span>panama condos for sale</span>
                        <span>panama apartments for sale</span>
                        <span>panama houses for sale</span>
                        <span>panama gated communities</span>
                        <span>new developments panama</span>
                        <span>panama pre construction condos</span>
                        <span>panama sea view apartments</span>
                        <span>panama investment condos</span>
                        <span>panama waterfront condos</span>
                        <span>panama foreign buyer real estate</span>
                        <span>panama luxury coastal condos</span>
                        <span>panama resort real estate</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPageContent;
