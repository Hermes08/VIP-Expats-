import React from 'react';
import { Link } from 'react-router-dom';
import { Project, Language } from '../types';
import { MapPin, ArrowRight, Bed, Bath, Move, TrendingUp } from 'lucide-react';
import { CONTENT } from '../constants';

const ProjectCard: React.FC<{ project: Project; lang: Language }> = ({ project, lang }) => {
  const t = CONTENT[lang] || CONTENT['en'];
  const labels = t.labels;
  
  const priceCNY = (project.priceFrom * 7.25).toLocaleString('zh-CN', { 
    style: 'currency', 
    currency: 'CNY', 
    maximumFractionDigits: 0 
  });

  return (
    <div className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] hover:border-brand-GOLD/30">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.name[lang] || project.name.en} 
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="bg-brand-GOLD text-brand-900 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/10 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/10 shadow-2xl flex justify-between items-center transform transition-transform duration-500 group-hover:-translate-y-2">
            <div>
              <span className="text-[9px] font-black text-brand-GOLD uppercase tracking-widest block mb-1">Rockstar Valuation</span>
              <div className="text-xl font-black text-white tracking-tighter italic">USD {project.priceFrom.toLocaleString()}</div>
            </div>
            <div className="bg-brand-GOLD/20 p-2.5 rounded-xl">
               <TrendingUp size={18} className="text-brand-GOLD" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-10 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-brand-GOLD text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          <MapPin size={12} />
          {project.location[lang] || project.location.en}
        </div>
        <h3 className="text-3xl font-heading font-black text-white mb-6 group-hover:text-brand-GOLD transition-colors uppercase tracking-tighter italic">
          {project.name[lang] || project.name.en}
        </h3>
        
        {/* Modern Specs Bar */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{labels.beds}</span>
            <div className="flex items-center gap-2 text-white font-black italic"><Bed size={14} className="text-brand-GOLD" /> {project.beds}</div>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{labels.baths}</span>
            <div className="flex items-center gap-2 text-white font-black italic"><Bath size={14} className="text-brand-GOLD" /> {project.baths}</div>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">AREA</span>
            <div className="flex items-center gap-2 text-white font-black italic"><Move size={14} className="text-brand-GOLD" /> {project.sqft} m²</div>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 line-clamp-2 italic">
          {project.description[lang] || project.description.en}
        </p>
        
        <Link 
          to={`/proyectos/${project.slug}`}
          className="btn-3d btn-3d-navy flex items-center justify-center gap-4 w-full py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] bg-white/5 hover:bg-brand-GOLD hover:text-brand-900 transition-all border border-white/5"
        >
          {labels.viewDetails} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;