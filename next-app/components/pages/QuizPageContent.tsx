'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, CheckCircle2, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';

const QuizPageContent: React.FC = () => {
    const router = useRouter();
    const { saveQuizSubmission } = useCMS();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({
        environment: '',
        household: '',
        livingStyle: '',
        priority: '',
        social: '',
        expats: '',
        feature: '',
        budget: '',
        proximity: '',
        concern: '',
        concernOther: '',
        timeline: '',
        firstName: '',
        lastName: '',
        email: '',
        consent: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [recommendations, setRecommendations] = useState<any[]>([]);

    const totalSteps = 13;
    const progress = Math.round((step / totalSteps) * 100);

    const calculateResults = () => {
        // Logic: Map environment choices to existing projects
        let matched = PROJECTS.filter(p => {
            if (formData.environment === 'Mountains') return p.zone === 'Mountain';
            if (formData.environment === 'Beach') return p.zone === 'Beach' || p.zone === 'Caribbean';
            if (formData.environment === 'City') return p.zone === 'City' || p.slug.includes('westin'); // Westin is near city
            return true;
        });

        if (matched.length === 0) matched = PROJECTS.slice(0, 3);
        setRecommendations(matched.slice(0, 4));
    };

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < totalSteps) return handleNext();

        calculateResults();

        const matchedNames = recommendations.length > 0
            ? recommendations.map(r => r.name.en)
            : ["General Panama Discovery"];

        const submission = {
            id: `quiz-${Date.now()}`,
            timestamp: new Date().toISOString(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            answers: { ...formData },
            recommendedNeighborhoods: matchedNames
        };

        await saveQuizSubmission(submission);
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (isSubmitted) {
        return (
            <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16 animate-in fade-in duration-700">
                        <div className="w-20 h-20 bg-brand-GOLD text-brand-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <Sparkles size={40} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-900 mb-4">Your Rockstar Match is Ready!</h1>
                        <p className="text-slate-500 text-lg">Based on your lifestyle and investment goals, we've identified these top Panama locations.</p>
                    </div>

                    <div className="bg-brand-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row mb-12 border-4 border-brand-GOLD">
                        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                            <img src={recommendations[0]?.images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="" />
                        </div>
                        <div className="md:w-1/2 p-12 text-white flex flex-col justify-center">
                            <span className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px] mb-4">Featured Recommendation</span>
                            <h2 className="text-4xl font-heading font-bold mb-6">{recommendations[0]?.name.en}</h2>
                            <p className="text-brand-200 mb-8 leading-relaxed line-clamp-4">{recommendations[0]?.description.en}</p>
                            <button
                                onClick={() => router.push(`/proyectos/${recommendations[0]?.slug}`)}
                                className="inline-flex items-center gap-2 bg-brand-GOLD text-brand-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl self-start"
                            >
                                Learn More About {recommendations[0]?.name.en.split(' ')[0]} <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {recommendations.slice(1, 4).map((p, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all">
                                <div className="h-48 overflow-hidden">
                                    <img src={p.images[0]} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="p-8 flex-grow">
                                    <h3 className="text-xl font-bold text-brand-900 mb-3">{p.name.en}</h3>
                                    <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">{p.description.en}</p>
                                    <button
                                        onClick={() => router.push(`/proyectos/${p.slug}`)}
                                        className="text-brand-GOLD font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-brand-900 transition-colors"
                                    >
                                        View Details <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center p-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
                        <h3 className="text-2xl font-bold text-brand-900 mb-4">Want a guided experience?</h3>
                        <p className="text-slate-500 mb-8 max-w-xl mx-auto">Our advisors are ready to walk you through these neighborhoods in person or via video call.</p>
                        <button onClick={() => router.push('/contacto')} className="bg-brand-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-brand-GOLD hover:text-brand-900 transition-all">Schedule Discovery Call</button>
                    </div>
                </div>
            </div>
        );
    }

    const QuestionFrame = ({ title, children }: any) => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-4 flex items-center gap-2 text-brand-GOLD font-black uppercase text-[10px] tracking-widest">
                <Sparkles size={12} /> Step {step} of {totalSteps}
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-900 mb-8 leading-tight">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );

    return (
        <div className="pt-32 pb-20 bg-brand-950 min-h-screen">
            <div className="max-w-2xl mx-auto px-4">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-brand-GOLD font-black uppercase text-[9px] tracking-[0.3em]">Discovery Evolution</span>
                        <span className="text-white font-black text-xl">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-GOLD transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,0.4)]" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-GOLD/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        {step === 1 && (
                            <QuestionFrame title="What kind of environment best describes your dream location?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.environment} onChange={e => setFormData({ ...formData, environment: e.target.value })}>
                                    <option value="">Choose Environment...</option>
                                    <option value="Mountains">Mountains (Cooler, lush green)</option>
                                    <option value="City">City (Modern skyscrapers, urban energy)</option>
                                    <option value="Beach">Beach (Pacific or Caribbean shores)</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 2 && (
                            <QuestionFrame title="What kind of household are you in?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.household} onChange={e => setFormData({ ...formData, household: e.target.value })}>
                                    <option value="">Choose Household...</option>
                                    <option value="Family">Family (Kids, schools priority)</option>
                                    <option value="Retirement">Retirement (Peace, medical access)</option>
                                    <option value="Professional">Young Professional (Coworking, nightlife)</option>
                                    <option value="Solo">Solo or Empty Nester</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 3 && (
                            <QuestionFrame title="What style of living are you looking for?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.livingStyle} onChange={e => setFormData({ ...formData, livingStyle: e.target.value })}>
                                    <option value="">Choose Style...</option>
                                    <option value="Laid-back">Laid-back (Relaxed, unhurried)</option>
                                    <option value="Trendy">Trendy (Artistic, modern, social)</option>
                                    <option value="Luxury">Luxury (Gated, premium amenities)</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 4 && (
                            <QuestionFrame title="Which of the following is most important for your community to have?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.priority} onChange={e => setFormData({ ...formData, priority: e.target.value })}>
                                    <option value="">Choose Priority...</option>
                                    <option value="Walkability">Walkability (Everything close)</option>
                                    <option value="Ocean View">Ocean View (Waking up to the sea)</option>
                                    <option value="Expats">Established Expat Community</option>
                                    <option value="Local">Local/Authentic Vibe</option>
                                    <option value="Facilities">High-end Facilities (Gym, Pool, Spa)</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 5 && (
                            <QuestionFrame title="How socially active do you want your community to be?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.social} onChange={e => setFormData({ ...formData, social: e.target.value })}>
                                    <option value="">Choose Social level...</option>
                                    <option value="Tight-knit">A tight-knit, very social community</option>
                                    <option value="Quiet">A quiet, private neighborhood</option>
                                    <option value="Mix">A mix of both</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 6 && (
                            <QuestionFrame title="Do you prefer a community with an established expat presence?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.expats} onChange={e => setFormData({ ...formData, expats: e.target.value })}>
                                    <option value="">Choose preference...</option>
                                    <option value="Yes">Yes, I'd love to connect with other expats.</option>
                                    <option value="No">No, I prefer to blend with the local culture.</option>
                                    <option value="Open">I'm open to either.</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 7 && (
                            <QuestionFrame title="What is the most important for your neighborhood to have?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.feature} onChange={e => setFormData({ ...formData, feature: e.target.value })}>
                                    <option value="">Choose Hobby/Feature...</option>
                                    <option value="Golfing">Golfing</option>
                                    <option value="Beachfront">Direct Beachfront</option>
                                    <option value="Medical">Proximity to Medical Care</option>
                                    <option value="Fishing">Fishing & Boating</option>
                                    <option value="Hiking">Hiking & Nature Trails</option>
                                    <option value="Weather">Cool Highlands Weather</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 8 && (
                            <QuestionFrame title="What is your budget for your ideal property?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}>
                                    <option value="">Choose Budget...</option>
                                    <option value="Under $200k">Under $200,000</option>
                                    <option value="$200k-$500k">$200,000 – $500,000</option>
                                    <option value="$500k+">$500,000 +</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 9 && (
                            <QuestionFrame title="How close do you want to be to the following?">
                                <div className="grid grid-cols-1 gap-4">
                                    {['International Schools', 'Major Airports', 'Shopping and Dining', 'Hospitals or Clinics'].map(opt => (
                                        <label key={opt} className={`p-4 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${formData.proximity === opt ? 'border-brand-GOLD bg-brand-50 shadow-inner' : 'border-slate-100 hover:border-slate-200'}`}>
                                            <input required type="radio" name="proximity" value={opt} className="w-5 h-5 text-brand-GOLD" checked={formData.proximity === opt} onChange={e => setFormData({ ...formData, proximity: e.target.value })} />
                                            <span className="font-bold text-slate-700">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </QuestionFrame>
                        )}

                        {step === 10 && (
                            <QuestionFrame title="What's your biggest concern about moving to a new area?">
                                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700 mb-4" value={formData.concern} onChange={e => setFormData({ ...formData, concern: e.target.value })}>
                                    <option value="">Choose Concern...</option>
                                    <option value="Culture">Adjusting to the culture</option>
                                    <option value="Cost">Cost of living</option>
                                    <option value="Safety">Safety</option>
                                    <option value="Neighborhood">Finding the right neighborhood</option>
                                    <option value="Other">Other (Specify below)</option>
                                </select>
                                <textarea className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-medium text-slate-700 h-24" placeholder="If none of the above, please specify..." value={formData.concernOther} onChange={e => setFormData({ ...formData, concernOther: e.target.value })} />
                            </QuestionFrame>
                        )}

                        {step === 11 && (
                            <QuestionFrame title="How soon are you planning to make a move?">
                                <select required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.timeline} onChange={e => setFormData({ ...formData, timeline: e.target.value })}>
                                    <option value="">Choose Timeline...</option>
                                    <option value="Within 3 months">Within 3 months</option>
                                    <option value="3-6 months">3 – 6 months</option>
                                    <option value="6-12 months">6 – 12 months</option>
                                    <option value="Exploring">Just exploring for now</option>
                                </select>
                            </QuestionFrame>
                        )}

                        {step === 12 && (
                            <QuestionFrame title="Awesome! Almost done. To get your results, please share your name">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400">First Name</label>
                                        <input required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400">Last Name</label>
                                        <input required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                    </div>
                                </div>
                            </QuestionFrame>
                        )}

                        {step === 13 && (
                            <QuestionFrame title="And finally, your email address.">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400">Email Address</label>
                                        <input required type="email" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-brand-GOLD outline-none font-bold text-slate-700" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <input type="checkbox" className="mt-1 w-5 h-5 text-brand-GOLD rounded" checked={formData.consent} onChange={e => setFormData({ ...formData, consent: e.target.checked })} />
                                        <span className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-600 transition-colors">
                                            I agree to receive other communications from ExpatRockstars Real Estate. You may unsubscribe at any time.
                                        </span>
                                    </label>
                                    <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest leading-loose">By clicking submit, you consent to allow ExpatRockstars to store and process your personal information.</p>
                                </div>
                            </QuestionFrame>
                        )}

                        <div className="pt-8 border-t border-slate-100 flex justify-between gap-4">
                            <button type="button" onClick={handlePrev} disabled={step === 1} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all ${step === 1 ? 'opacity-0 invisible' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                                <ChevronLeft size={16} /> Previous
                            </button>
                            <button type="submit" className="flex items-center gap-2 bg-brand-900 text-white px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-brand-GOLD hover:text-brand-900 transition-all shadow-xl">
                                {step === totalSteps ? 'Reveal Results' : 'Continue'} <ChevronRight size={16} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-12 flex items-center justify-center gap-10 text-white/40">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={14} /> 100% Privacy Secure</div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><MapPin size={14} /> Advisor Verified</div>
                </div>
            </div>
        </div>
    );
};

export default QuizPageContent;
