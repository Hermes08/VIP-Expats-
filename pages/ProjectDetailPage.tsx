import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS, CONTACT_INFO, CONTENT } from '../constants';
import LeadMagnet from '../components/LeadMagnet';
import { MapPin, Bed, Bath, Move, CheckCircle, TrendingUp, BookOpen, ArrowRight, Compass, Info, ShieldCheck, UserCheck, Gavel, Home } from 'lucide-react';
import { Language } from '../types';
import { useCMS } from '../context/CMSContext';

interface Props {
  lang: Language;
}

const ProjectDetailPage: React.FC<Props> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const { blogPosts } = useCMS();
  const project = PROJECTS.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const t = CONTENT[lang] || CONTENT['en'];
  const labels = t.labels;

  if (!project) return <Navigate to="/proyectos" replace />;

  const relatedPosts = blogPosts.filter(post => post.projectId === project.id);

  return (
    <div className="pt-[72px] bg-white min-h-screen">
      <Helmet>
        <title>{project.h1Title[lang] || project.h1Title.en}</title>
        <meta name="description" content={project.description[lang] || project.description.en} />
      </Helmet>

      {/* Gallery Header */}
      <section className="bg-neutral-900 h-[60vh] min-h-[500px] relative overflow-hidden group">
        <img src={project.images[activeImage]} alt={project.name[lang]} className="w-full h-full object-cover opacity-80 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-white max-w-3xl">
              <div className="flex items-center gap-2 text-brand-GOLD font-bold uppercase tracking-widest text-[10px] mb-4">
                <MapPin size={12} /> {project.location[lang]}
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 leading-tight">{project.name[lang]}</h1>
              <div className="flex flex-wrap gap-4">
                <span className="bg-brand-GOLD text-brand-950 px-3 py-1 rounded text-xs font-bold uppercase">{project.status}</span>
                <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold uppercase border border-white/20">{project.type}</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-end min-w-[250px] hidden md:flex border-l-4 border-brand-GOLD">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">{labels.startingAt}</span>
              <span className="text-3xl font-bold text-brand-900">USD {project.priceFrom.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selectors */}
        {project.images.length > 1 && (
          <div className="absolute bottom-12 right-12 flex gap-2">
            {project.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-brand-GOLD scale-110 shadow-lg' : 'border-white/20 opacity-60 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt=""/>
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            
            {/* Quick Specs */}
            <div className="grid grid-cols-3 gap-6 mb-16 py-8 border-y border-neutral-100 text-center">
               <div>
                  <span className="block text-xl font-bold text-brand-900">{project.beds}</span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{labels.beds}</span>
               </div>
               <div>
                  <span className="block text-xl font-bold text-brand-900">{project.baths}</span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{labels.baths}</span>
               </div>
               <div>
                  <span className="block text-xl font-bold text-brand-900">{project.sqft}</span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">m²</span>
               </div>
            </div>

            {/* SECTION 1: Deep Dive */}
            <article className="prose prose-lg max-w-none text-brand-600 mb-20">
              <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 border-b-2 border-brand-GOLD inline-block pb-2 uppercase tracking-tighter">
                {lang === 'es' ? 'Análisis Profundo del Proyecto' : 'Project Deep Dive & Architectural Vision'}
              </h2>
              <div 
                className="leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: project.longDescription?.[lang] || project.description[lang] }}
              />
            </article>

            {/* SECTION 2: Location & Lifestyle */}
            <article className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 mb-20">
              <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 flex items-center gap-4">
                <Compass className="text-brand-GOLD" size={36} />
                {lang === 'es' ? 'Ubicación y Estilo de Vida' : 'Neighborhood Analysis & Coastal Lifestyle'}
              </h2>
              <div 
                className="prose prose-lg text-brand-600 max-w-none whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: project.locationAnalysis?.[lang] || '' }}
              />
            </article>

            {/* SECTION 3: Investment Analysis */}
            <article className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-900 text-brand-GOLD rounded-full flex items-center justify-center">
                  <TrendingUp size={32} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-900 uppercase tracking-tighter">
                  {lang === 'es' ? 'Análisis de Inversión y ROI' : 'Investment Analysis & Market Trends'}
                </h2>
              </div>
              <div 
                className="prose prose-lg text-brand-600 max-w-none whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: project.investmentAnalysis?.[lang] || '' }}
              />
            </article>

            {/* SECTION 4: Buyer Profile */}
            <article className="bg-brand-900 text-white p-12 rounded-[3rem] mb-20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-GOLD/5 rounded-full blur-3xl"></div>
              <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-4">
                <UserCheck className="text-brand-GOLD" size={36} />
                {lang === 'es' ? 'Perfil del Comprador' : 'Ideal Buyer Profile & Use Cases'}
              </h2>
              <div 
                className="prose prose-lg prose-invert max-w-none whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: project.buyerProfile?.[lang] || '' }}
              />
            </article>

            {/* SECTION 5: Legal & Residency */}
            <article className="mb-20 p-12 border-2 border-brand-GOLD/20 rounded-[3rem]">
              <h2 className="text-3xl font-heading font-bold text-brand-900 mb-8 flex items-center gap-4">
                <Gavel className="text-brand-GOLD" size={36} />
                {lang === 'es' ? 'Integración Legal y Residencia' : 'Legal Guide & Residency Pathways'}
              </h2>
              <div 
                className="prose prose-lg text-brand-600 max-w-none whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: project.residencyInfo?.[lang] || '' }}
              />
            </article>

          </div>

          {/* SIDEBAR CONVERSION */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
               {/* Tour CTA */}
               <div className="bg-brand-950 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-GOLD/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <Compass className="text-brand-GOLD mb-6" size={40} />
                  <h4 className="text-2xl font-bold mb-4 leading-tight">Request a Private Relocation Tour</h4>
                  <p className="text-neutral-400 text-sm mb-8 leading-relaxed">Experience {project.name[lang]} first-hand with our expert ground team. We handle legal, logistics, and lifestyle vetting.</p>
                  <Link to="/contacto" className="block w-full py-4 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-all text-center">Schedule Discovery Visit</Link>
               </div>

               {/* Lead Magnet Book */}
               <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl text-center group">
                  <BookOpen className="mx-auto text-brand-GOLD mb-4 transition-transform group-hover:scale-110" size={32} />
                  <h4 className="font-bold text-brand-900 mb-2">Free Panama Investment Guide</h4>
                  <p className="text-xs text-brand-500 mb-6">"How to master panama real estate in 2025". 50+ pages of expert data.</p>
                  <button className="text-brand-AMBER font-black uppercase tracking-widest text-[10px] border-b-2 border-brand-GOLD pb-1 hover:text-brand-900 transition-colors">Download PDF Bible</button>
               </div>

               {/* Amenities List */}
               <div className="bg-neutral-50 p-8 rounded-3xl">
                  <h4 className="font-bold text-brand-900 mb-6 uppercase tracking-widest text-[10px] border-b border-neutral-200 pb-2 flex items-center gap-2">
                    <Home size={14} className="text-brand-GOLD" /> Development Amenities
                  </h4>
                  <ul className="space-y-4">
                    {(project.amenities[lang] || project.amenities.en).map((a, i) => (
                      <li key={i} className="flex gap-3 text-xs font-bold text-brand-600">
                        <CheckCircle size={14} className="text-brand-GOLD shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Related Content */}
               {relatedPosts.length > 0 && (
                <div className="bg-neutral-50 p-8 rounded-3xl">
                  <h4 className="font-bold text-brand-900 mb-6 uppercase tracking-widest text-[10px] border-b border-neutral-200 pb-2">Market Context</h4>
                  <div className="space-y-6">
                    {relatedPosts.map(post => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                        <h5 className="text-sm font-bold text-brand-900 group-hover:text-brand-GOLD transition-colors mb-2">{post.title[lang]}</h5>
                        <span className="text-[10px] text-brand-400 font-bold uppercase">{labels.readReport} →</span>
                      </Link>
                    ))}
                  </div>
                </div>
               )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Grounding Wall (SEO Booster) */}
      <section className="bg-neutral-50 py-20 border-t border-neutral-100">
         <div className="max-w-7xl mx-auto px-4">
            <h5 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-10 text-center">Global Reach • Local Expertise • Panama Investment Hub</h5>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 text-[11px] font-bold text-brand-900 grayscale">
               <span>panama condos on the beach</span>
               <span>panama city condos</span>
               <span>panama real estate</span>
               <span>panama luxury real estate</span>
               <span>panama luxury apartments</span>
               <span>panama beachfront real estate</span>
               <span>panama oceanfront real estate</span>
               <span>panama coastal real estate</span>
               <span>beachfront property for sale in panama</span>
               <span>american retirees in panama</span>
               <span>pensionado visa panama</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;