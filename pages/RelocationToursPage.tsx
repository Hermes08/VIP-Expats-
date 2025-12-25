
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Compass, MapPin, CheckCircle, ArrowRight, MessageSquare, Ship, Mountain, Hotel, Globe, ShieldCheck, TrendingUp, Users, Info, Calendar, Plane, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO_KEYWORDS_LIST } from '../constants';

const RelocationToursPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>Panama Relocation Tours | Retire in Panama & Discovery Tours | ExpatRockstars</title>
        <meta name="description" content="Master your relocation to Panama with our expert-led discovery tours. Explore boquete real estate, panama condos on the beach, and the pensionado visa." />
        <meta name="keywords" content={SEO_KEYWORDS_LIST.join(', ')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-brand-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" alt="Panama Relocation Real Estate Tours" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-GOLD text-brand-950 text-[10px] font-bold uppercase tracking-[0.3em] rounded mb-6">
            REAL BOOTS ON THE GROUND
          </span>
          <h1 className="font-heading text-4xl md:text-8xl font-bold mb-8 leading-[0.9]">Explore. Invest. <br/> Relocate.</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Don't buy blind. Feel the vibe. Walk the neighborhoods. Meet the community. Our <strong>panama relocation real estate tours</strong> are the filter between a mistake and your <strong>panama dream home</strong>.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-brand-GOLD text-brand-950 font-black uppercase tracking-widest text-xs rounded-xl shadow-2xl hover:bg-white transition-all">Request Custom Itinerary</button>
            <div className="flex items-center gap-2 text-brand-GOLD text-xs font-bold uppercase tracking-widest">
               <Calendar size={16} /> Monthly Tours Available
            </div>
          </div>
        </div>
      </section>

      {/* INTRO: WHY TOURS? (WORD COUNT BOOST) */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="prose prose-lg text-brand-600 max-w-none space-y-10">
          <h2 className="text-brand-900 text-3xl md:text-5xl font-heading font-bold mb-10 text-center italic border-b-2 border-brand-GOLD inline-block pb-4">Why a Panama Discovery Tour is Your Best Investment</h2>
          <p>
            Deciding to <strong>relocate to panama</strong> is one of the most exciting decisions you will ever make. However, it is also one where small mistakes can cost thousands. Many people spend months searching for "<strong>panama real estate</strong>" or "<strong>boquete homes for sale</strong>" without understanding the nuances of microclimates, local traffic patterns, or proximity to <strong>best places for expats to live in panama</strong> hubs.
          </p>
          <p>
            A "Rockstar <strong>panama real estate discovery tour</strong>" isn't just a property showing. It's a deep dive into the <strong>cost of living in panama</strong>, the legal frameworks of the <strong>pensionado visa panama</strong>, and the reality of <strong>expat communities in panama</strong>. We take you behind the scenes of our top developments like <strong>pino alto boquete</strong> or <strong>the westin panama residences</strong>, but we also show you where to buy groceries, where the best private clinics are, and where to have the best coffee.
          </p>
          <p>
            Our <strong>panama relocation real estate tours</strong> focus on <strong>panama luxury developments</strong> and <strong>panama gated communities</strong>. We want you to see the difference between <strong>panama city condos</strong> in Punta Pacifica vs <strong>costa del este apartments</strong>. We want you to feel the breeze at <strong>playa bonita panama</strong> and compare it to the surfing vibe of <strong>playa caracol panama</strong>. This is <strong>international living in panama</strong> at its most transparent and professional level.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 my-20 not-prose">
            <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-xl transition-all">
               <Mountain className="text-brand-GOLD mb-8" size={48} />
               <h3 className="text-2xl font-bold text-brand-900 mb-6 uppercase italic">Highlands Immersion (Boquete)</h3>
               <p className="text-sm text-brand-500 leading-relaxed mb-6">Discover why <strong>boquete real estate</strong> is the #1 choice for <strong>american retirees in panama</strong>. We walk through <strong>valle escondido panama</strong> and Lucero, comparing the microclimates and gated communities. Learn about <strong>property in boquete panama</strong> availability and rental yields for <strong>panama expat housing</strong>.</p>
               <div className="flex items-center gap-2 text-brand-GOLD font-black text-[10px] uppercase tracking-widest">
                  Explore Boquete <ArrowRight size={14} />
               </div>
            </div>
            <div className="bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-xl transition-all">
               <Ship className="text-brand-GOLD mb-8" size={48} />
               <h3 className="text-2xl font-bold text-brand-900 mb-6 uppercase italic">Coastal Discovery (Pacific Coast)</h3>
               <p className="text-sm text-brand-500 leading-relaxed mb-6">From the ultra-luxury of <strong>buenaventura resort panama</strong> to the lifestyle ROI of <strong>margaritaville panama</strong>. Explore <strong>panama condos on the beach</strong> and benchmark them against urban options like <strong>ocean reef islands panama</strong>. Experience the <strong>panama beach lifestyle</strong> first-hand.</p>
               <div className="flex items-center gap-2 text-brand-GOLD font-black text-[10px] uppercase tracking-widest">
                  Explore the Coast <ArrowRight size={14} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-DAY ITINERARY: THE MASTER ROADMAP (WORD COUNT BOOST) */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8">The 5-Day Discovery Itinerary</h2>
             <p className="text-brand-400 text-xl max-w-3xl mx-auto font-medium">A structured roadmap for your <strong>panama relocation real estate</strong> discovery process.</p>
          </div>
          
          <div className="space-y-24">
            {[
              { 
                day: "01", icon: Plane, title: "Urban Pulse & Sky High Luxury", 
                desc: "Arrival and check-in at a <strong>panama luxury hotel</strong>. We start with <strong>panama city luxury condos</strong>. Visit <strong>punta pacifica condos</strong> (ph oceanaire/dupont tower) and <strong>costa del este apartments</strong>. Evening workshop on <strong>panama residency visa</strong> legalities and <strong>panama tax benefits</strong>." 
              },
              { 
                day: "02", icon: Ship, title: "The Beach Club & Branded Residences", 
                desc: "Head to <strong>playa bonita panama</strong> to see the <strong>westin panama residences</strong>. Afternoon at <strong>playa caracol panama</strong> exploring <strong>margaritaville beach resort panama</strong>. Learn about <strong>vacation rental investment</strong> and property management for <strong>panama beachfront condos</strong>." 
              },
              { 
                day: "03", icon: Map, title: "The Ultra-Luxury Benchmark (Buenaventura)", 
                desc: "A full day at <strong>buenaventura resort panama</strong>. Explore the <strong>buenaventura golf club</strong> and <strong>the buenaventura golf and beach resort</strong>. Private yacht tour to see <strong>panama coastal real estate</strong> from the water. Comparison session with <strong>coronado panama real estate</strong> options." 
              },
              { 
                day: "04", icon: Mountain, title: "Mountain Wellness in Boquete", 
                desc: "Quick flight to David. Explore <strong>boquete panama real estate</strong>. Visit <strong>valle escondido panama</strong> and see <strong>boquete homes for sale</strong>. Meet with <strong>american retirees in panama</strong> to hear real stories about the <strong>cost of retirement in panama</strong> and local <strong>expat communities in panama</strong>." 
              },
              { 
                day: "05", icon: Globe, title: "Caribbean Frontier & Legal Wrap-up", 
                desc: "Helicopter excursion to <strong>playa escondida resort</strong> near Portobelo. Discover the growth potential of <strong>panama oceanfront real estate</strong> on the Caribbean side. Final wrap-up on <strong>buying real estate in panama</strong> legal guide and tax planning for <strong>panama foreign buyer real estate</strong>." 
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-16 items-center lg:items-start group">
                <div className="lg:w-1/4">
                   <div className="text-8xl font-black text-brand-GOLD/10 group-hover:text-brand-GOLD/40 transition-all duration-700 leading-none">{step.day}</div>
                   <div className="mt-4 flex items-center gap-4 text-brand-GOLD">
                      <step.icon size={32} />
                      <span className="font-black uppercase tracking-[0.2em] text-[10px]">Phase {i+1}</span>
                   </div>
                </div>
                <div className="lg:w-3/4 border-l border-white/10 pl-16 py-4 group-hover:border-brand-GOLD transition-all">
                  <h4 className="text-3xl md:text-5xl font-bold mb-8 italic">{step.title}</h4>
                  <p className="text-brand-300 text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: step.desc }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL & RESIDENCY: THE GROUND TEAM GUIDE (WORD COUNT BOOST) */}
      <section className="py-24 max-w-5xl mx-auto px-4 prose prose-lg text-brand-600 max-w-none">
        <h3 className="text-brand-900 font-heading font-bold text-3xl md:text-5xl mb-10 text-center uppercase tracking-tighter">Your Legal Ground Team in Panama</h3>
        <p className="mb-10 text-xl font-bold text-brand-950 leading-relaxed text-center">
          One of the biggest advantages of our <strong>panama relocation services</strong> is the direct access to top-tier legal experts. Whether you are aiming for the <strong>friendly nations visa panama</strong> or the <strong>panama pensionado program</strong>, we ensure you have the right documentation.
        </p>
        <div className="grid md:grid-cols-2 gap-12 not-prose my-16 bg-neutral-50 p-12 rounded-[3rem] border border-neutral-100 shadow-inner">
           <div className="space-y-6">
              <h4 className="text-xl font-bold text-brand-900 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-brand-GOLD pb-2"><ShieldCheck className="text-brand-GOLD" /> Residency via Investment</h4>
              <p className="text-sm leading-relaxed">Purchasing <strong>panama real estate projects</strong> over $300,000 can often be your ticket to immediate permanent residency through the Qualified Investor program. Our <strong>panama real estate advisors</strong> specialize in assets that meet these strict criteria while providing <strong>panama high ROI real estate</strong> potential.</p>
           </div>
           <div className="space-y-6">
              <h4 className="text-xl font-bold text-brand-900 flex items-center gap-2 uppercase tracking-widest text-xs border-b border-brand-GOLD pb-2"><Users className="text-brand-GOLD" /> The Pensionado Secrets</h4>
              <p className="text-sm leading-relaxed">The <strong>pensionado visa panama</strong> is the world's most generous retirement visa. It's not just about residency; it's about the lifetime discounts on everything from flights and movies to utility bills and hospital visits. We guide you on how to structure your <strong>panama retirement real estate</strong> purchase to leverage these benefits.</p>
           </div>
        </div>
        <p>
          During our <strong>panama relocation real estate tours</strong>, we host private sessions with residency attorneys to answer your specific "outside the box" questions about offshore income reporting, <strong>panama real estate tax benefits</strong>, and global asset protection. This is crucial for <strong>american retirees in panama</strong> who need to navigate IRS reporting while enjoying the low <strong>cost of living panama</strong> offers.
        </p>
      </section>

      {/* THE INFOGRAPHIC: 10 ROCKSTAR FACTS (SEO DENSITY) */}
      <section className="py-24 bg-brand-GOLD rounded-[5rem] mx-4 mb-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-brand-950">
          <h2 className="text-3xl md:text-6xl font-heading font-bold mb-16 text-center uppercase tracking-tighter">10 Rockstar Relocation Realities</h2>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
            {[
              "<strong>Panama uses the US Dollar</strong>, protecting your <strong>panama real estate investment</strong> from local currency crashes.",
              "The <strong>Pensionado Visa grants 25% off electricity</strong> and 50% off movies for life.",
              "<strong>Starlink WiFi</strong> is fully active in <strong>boquete panama</strong> and <strong>playa caracol panama</strong> for remote workers.",
              "You pay <strong>zero tax on foreign-earned income</strong> under the <strong>panama tax benefits</strong> code.",
              "Driving from <strong>panama city condos</strong> to <strong>playa bonita panama</strong> takes only 15 minutes over the canal.",
              "<strong>Property tax is extremely low</strong>, often under $500/year for a <strong>luxury beach home panama</strong>.",
              "Panama is home to the <strong>second largest free trade zone</strong> in the world near Colon.",
              "<strong>Private healthcare is 70% cheaper</strong> than the US and features Johns Hopkins affiliated doctors.",
              "You can <strong>own beachfront property titled</strong> in your name (no long-term leases required).",
              "ExpatRockstars <strong>refunds your tour costs</strong> if you purchase a <strong>panama dream home</strong> through our team."
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-6xl font-black opacity-10 leading-none">{i+1}</span>
                <p className="text-lg font-bold leading-tight mt-1" dangerouslySetInnerHTML={{ __html: item }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA: THE CONVERSION MACHINE */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-7xl font-bold text-brand-900 mb-10">Start Your Discovery Journey</h2>
          <p className="text-brand-500 mb-16 text-xl font-medium">Our tours are limited to 4 families per month to ensure an exclusive, high-value experience. Custom itineraries available for <strong>panama real estate investors</strong>.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="px-16 py-8 bg-brand-900 text-white font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-GOLD hover:text-brand-950 transition-all shadow-2xl flex items-center gap-4 group">
              <Compass size={24} className="group-hover:rotate-45 transition-transform" /> Request Custom Tour Quote
            </button>
            <Link to="/contacto" className="px-16 py-8 border-4 border-brand-900 text-brand-900 font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-brand-900 hover:text-white transition-all">Speak with an Advisor</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelocationToursPage;
