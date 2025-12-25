
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Award, Compass, TrendingUp, ShieldCheck, Star, Users, Map, Heart, Shield, Globe, BookOpen, CheckCircle, MapPin, ArrowRight, Info, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { SEO_KEYWORDS_LIST } from '../constants';

interface Props {
  lang: Language;
}

const AboutPage: React.FC<Props> = ({ lang }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>About ExpatRockstars | Premier Panama Real Estate Agency & Relocation Services</title>
        <meta name="description" content="Learn why ExpatRockstars is the top panama real estate agency for expats. Specialized in boquete real estate, panama condos on the beach, and the pensionado visa." />
        <meta name="keywords" content={SEO_KEYWORDS_LIST.join(', ')} />
      </Helmet>

      {/* Header section */}
      <section className="bg-brand-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-bold text-brand-GOLD uppercase tracking-[0.4em] mb-4 block">THE ROCKSTAR MANIFESTO</span>
          <h1 className="font-heading text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">We Curate Freedoms, <br/> Not Just Floorplans.</h1>
          <p className="text-xl text-brand-300 leading-relaxed font-medium">ExpatRockstars was founded by international expats for international expats seeking the best in <strong>panama luxury real estate</strong> and <strong>panama relocation services</strong>.</p>
        </div>
      </section>

      {/* CORE MANIFESTO (WORD COUNT BOOST) */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="prose prose-lg text-brand-600 max-w-none space-y-10">
          <h2 className="text-brand-900 text-3xl md:text-5xl font-heading font-bold mb-10 text-center uppercase tracking-tighter italic underline decoration-brand-GOLD">Our Story: Navigating Panama Real Estate for Foreigners</h2>
          <p>
            The <strong>panama real estate agency</strong> landscape is often a minefield for the uninitiated. We founded ExpatRockstars because we realized that <strong>buying real estate in panama</strong> is about much more than square meters—it's about building a legacy, optimizing your global footprint, and joining established <strong>expat communities in panama</strong>. We moved here ourselves, navigated the <strong>friendly nations visa panama</strong> process, and dealt with the <strong>cost of living panama</strong> nuances before ever selling our first unit.
          </p>
          <p>
            We focus exclusively on the "Position Gap." In any <strong>panama real estate market</strong> analysis, you'll see thousands of <strong>panama city condos</strong>. But only a few represent a safe, <strong>secure real estate investment</strong>. We benchmark projects like <strong>westin panama residences</strong> and <strong>pino alto boquete</strong> against overpriced legacy buildings like <strong>dupont tower</strong> or <strong>ph oceanaire</strong> to ensure our clients get institutional-grade value.
          </p>
          <p>
            Our mission is to act as your <strong>panama real estate advisors</strong> and ground team. Whether you are searching for <strong>panama condos on the beach</strong> or a <strong>panama luxury retirement</strong> estate in the mountains, we provide the <strong>panama real estate expertise</strong> required to avoid common pitfalls. From <strong>panama relocation tours</strong> to final title handover, we are with you every step of the way.
          </p>
          <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 not-prose my-16 shadow-inner">
             <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 bg-brand-GOLD text-brand-950 rounded-full flex items-center justify-center font-black text-3xl shadow-xl">1%</div>
                  <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-brand-GOLD">Curated Inventory</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-brand-900 mb-4 uppercase italic">The Rockstar Standard</h4>
                  <p className="text-brand-600 leading-relaxed">We reject 99% of <strong>panama real estate projects</strong>. We only represent developers with proven liquid assets, clear title history, and strong property management structures. This is how we ensure <strong>panama safe investment property</strong> for our international clients.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE GUIDE: PROS, CONS, AND DANGERS (SEO GOLDMINE) */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px] mb-4 block underline underline-offset-8 decoration-2">Deep Intelligence</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Retiring in Panama: Pros, Cons & Dangers</h2>
            <p className="text-brand-400 text-lg max-w-2xl mx-auto">A transparent <strong>panama property investment guide</strong> for the serious mover.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
             <div className="space-y-12">
                <div>
                   <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-brand-GOLD"><Heart /> The Pros: Living the Dream</h4>
                   <p className="text-brand-200 leading-relaxed mb-6">The <strong>panama lifestyle for expats</strong> is legendary. <strong>American retirees in panama</strong> enjoy first-world healthcare at 70% lower costs, a dollarized economy that protects your <strong>panama real estate investment</strong>, and the incredible <strong>panama retirement benefits</strong> of the <strong>pensionado visa panama</strong>.</p>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3"><CheckCircle className="text-brand-GOLD shrink-0" size={18} /> 25% off electricity and utility bills for life.</li>
                      <li className="flex items-start gap-3"><CheckCircle className="text-brand-GOLD shrink-0" size={18} /> High-speed Starlink internet in <strong>boquete panama retire</strong> zones.</li>
                      <li className="flex items-start gap-3"><CheckCircle className="text-brand-GOLD shrink-0" size={18} /> 0% tax on income earned outside of Panama under <strong>panama tax benefits</strong>.</li>
                   </ul>
                </div>
                <div>
                   <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-brand-GOLD"><AlertTriangle /> The Dangers: Avoiding Pitfalls</h4>
                   <p className="text-brand-200 leading-relaxed">Let's talk about <strong>retiring in panama dangers</strong>. The biggest risk is buying unverified <strong>panama property</strong> or pre-construction units from developers with no liquidity. This is why we focus on <strong>panama gated communities</strong> and <strong>panama branded residences</strong> like <strong>buenaventura resort panama</strong> or <strong>margaritaville panama</strong>. These projects offer institutional security and professional management.</p>
                </div>
             </div>
             <div className="space-y-12">
                <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10">
                   <h4 className="text-2xl font-bold mb-8 uppercase tracking-widest text-brand-GOLD border-b border-brand-GOLD/30 pb-4">The Real Cost of Living</h4>
                   <p className="text-brand-100 leading-relaxed mb-8">Building a realistic <strong>cost of retirement in panama</strong> budget is essential. While local food is cheap, high-end <strong>panama luxury apartments</strong> in the city and imported goods can match US prices. We help you build a profile: <strong>panama coastal expat living</strong> vs mountain wellness in Boquete. Most Rockstar clients live comfortably on $2,500 - $4,000 USD per month including luxury rent.</p>
                   <Link to="/contacto" className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl">Speak with a Relocation Advisor <ArrowRight size={16} /></Link>
                </div>
                <div>
                   <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 text-brand-GOLD"><Users /> Expat Communities in Panama</h4>
                   <p className="text-brand-200 leading-relaxed">Finding your tribe is crucial. From the <strong>best places for expats to live in panama</strong> like Coronado for golf lovers, to <strong>boquete panama real estate</strong> for mountain hikers, we connect you with the social hubs that make <strong>international living in panama</strong> truly feel like home.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* STRATEGY & ROI: THE BUYING GUIDE (WORD COUNT BOOST) */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="prose prose-lg text-brand-600 max-w-none">
          <h2 className="text-brand-900 font-heading font-bold text-3xl md:text-5xl mb-10 text-center italic">Your 2025 Panama Property Buying Guide</h2>
          <p className="mb-10 text-xl font-bold text-brand-900 border-l-8 border-brand-GOLD pl-10 leading-relaxed">
            The <strong>panama real estate market</strong> is currently in a "sweet spot" for international buyers. With the global search for <strong>panama sun and beach living</strong> reaching an all-time high, the <strong>panama beachfront investment</strong> sector is seeing unprecedented growth.
          </p>
          <div className="grid md:grid-cols-3 gap-12 not-prose my-20">
             {[
               { icon: MapPin, title: "Zone Selection", desc: "Choose between <strong>panama condos on the beach</strong> or <strong>mountain homes</strong> based on ROI goals." },
               { icon: Shield, title: "Title Verification", desc: "Rockstar legal partners ensure every <strong>panama property</strong> is clear and safe for foreign buyers." },
               { icon: BookOpen, title: "Visa Integration", desc: "Optimizing your <strong>panama residency visa</strong> process through your real estate purchase." }
             ].map((item, i) => (
               <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-GOLD group-hover:bg-brand-900 group-hover:text-white transition-all duration-500 shadow-lg"><item.icon size={40}/></div>
                  <h4 className="font-bold text-brand-900 uppercase text-xs tracking-widest mb-4">{item.title}</h4>
                  <p className="text-xs text-brand-500 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
               </div>
             ))}
          </div>
          <p className="mb-8">
            Our <strong>panama real estate advisors</strong> focus on <strong>panama high ROI real estate</strong> and <strong>panama passive income property</strong>. This means conducting deep due diligence on occupancy rates for <strong>panama vacation rental investment</strong> and analyzing the liquidity of <strong>panama pre construction condos</strong>. We represent the savvy buyer who wants to <strong>live and invest</strong> simultaneously.
          </p>
          <p className="mb-8">
            From the <strong>panama sea view apartments</strong> in Avenida Balboa to the <strong>panama golf communities</strong> in Santa Maria, we provide a <strong>panama real estate market</strong> report that cuts through the marketing noise. We are <strong>panama beachfront experts</strong> and <strong>panama luxury property advisors</strong> dedicated to your long-term success.
          </p>
        </div>
      </section>

      {/* THE ROADMAP wall (approx 200 words) */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
           <h4 className="text-brand-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-12 text-center">Global Relocation & Investment Hub</h4>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-bold text-neutral-400 uppercase tracking-tighter opacity-70">
              {SEO_KEYWORDS_LIST.map((k, i) => (
                <span key={i} className="hover:text-brand-900 transition-colors cursor-default">{k}</span>
              ))}
              <span>panama waterfront condos</span>
              <span>panama foreign investment property</span>
              <span>panama international buyers real estate</span>
              <span>panama upscale living</span>
              <span>panama luxury coastal condos</span>
              <span>panama branded residences</span>
              <span>panama lifestyle for expats</span>
              <span>panama beach retirement</span>
              <span>panama real estate discoveries</span>
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-900 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-6xl font-heading font-bold text-white mb-10">Start Your Rockstar Journey</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-14 py-6 bg-brand-GOLD text-brand-950 font-black uppercase tracking-[0.2em] text-xs rounded-full hover:scale-105 transition-all shadow-xl">Speak with an Advisor</button>
              <Link to="/tours" className="px-14 py-6 border-2 border-white text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-brand-900 transition-all">Book Relocation Tour</Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
