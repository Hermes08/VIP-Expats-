
import React, { useState, useEffect } from 'react';
import { Phone, Download, X, User, Mail, CheckCircle2, Star, BookOpen } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const StickyCTA: React.FC = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    const handleScroll = () => {
      // Threshold: Scroll past approximately 2 sections (roughly 1.5x viewport height)
      if (window.scrollY > window.innerHeight * 1.2) {
        setShowDownload(true);
      } else {
        setShowDownload(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <>
      {/* STICKY BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100] transition-all duration-500 transform hover:scale-105">
        {!showDownload ? (
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-3 bg-brand-900 text-white px-6 py-4 rounded-full shadow-[0_20px_50px_rgba(10,22,40,0.3)] border border-brand-800 font-bold uppercase tracking-widest text-xs hover:bg-brand-GOLD hover:text-brand-900 transition-all group"
          >
            <div className="bg-brand-GOLD p-2 rounded-full text-brand-900 group-hover:bg-brand-900 group-hover:text-brand-GOLD transition-colors">
              <Phone size={16} fill="currentColor" />
            </div>
            <span>Call Us Now</span>
          </a>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 bg-brand-GOLD text-brand-900 px-6 py-4 rounded-full shadow-[0_20px_50px_rgba(212,175,55,0.4)] border border-brand-AMBER/20 font-black uppercase tracking-widest text-xs hover:bg-brand-900 hover:text-white transition-all animate-in zoom-in duration-300"
          >
            <div className="bg-brand-900 p-2 rounded-full text-brand-GOLD">
              <Download size={16} />
            </div>
            <span>Download Free Guide</span>
          </button>
        )}
      </div>

      {/* EMAIL CAPTURE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-950/80 backdrop-blur-sm transition-opacity" 
            onClick={() => !isSubmitted && setIsModalOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            {!isSubmitted && (
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-brand-900 hover:bg-neutral-100 rounded-full transition-all z-20"
              >
                <X size={24} />
              </button>
            )}

            <div className="flex flex-col md:flex-row">
              {/* Sidebar/Visual */}
              <div className="md:w-2/5 bg-brand-900 p-10 text-white relative flex flex-col justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[10px] border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-4 text-brand-GOLD">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <h4 className="text-xl font-bold mb-4 leading-tight">Master the Panama Real Estate Market</h4>
                  <p className="text-brand-300 text-xs leading-relaxed mb-6 italic">"The definitive guide for expats and investors in 2025."</p>
                  
                  <div className="relative mx-auto max-w-[140px]">
                    <div className="absolute inset-0 bg-brand-GOLD/20 rounded-lg blur-lg"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden border-l-[6px] border-brand-GOLD transform -rotate-3 p-4 h-48 flex flex-col justify-between shadow-2xl">
                      <div className="w-8 h-0.5 bg-brand-900 mb-2"></div>
                      <p className="text-[10px] font-black text-brand-900 tracking-tighter leading-none">PANAMA<br/>INVESTMENT<br/>BIBLE</p>
                      <BookOpen size={16} className="text-brand-GOLD self-end" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Area */}
              <div className="md:w-3/5 p-10 md:p-12 bg-white">
                {!isSubmitted ? (
                  <>
                    <span className="text-brand-AMBER font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">INSTANT PDF DELIVERY</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-900 mb-6 leading-tight">Get Your Free 50-Page Panama Guide</h3>
                    <p className="text-brand-600 text-sm mb-8 leading-relaxed">Join 2,500+ savvy expats. Learn about the <strong>Pensionado Visa</strong>, top ROI zones, and legal tax loopholes.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1.5 ml-1">Your Full Name</label>
                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-GOLD" />
                          <input 
                            required
                            type="text"
                            placeholder="John Rockstar"
                            className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none transition-all text-sm font-medium"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-GOLD" />
                          <input 
                            required
                            type="email"
                            placeholder="john@example.com"
                            className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none transition-all text-sm font-medium"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>
                      <button 
                        type="submit"
                        className="w-full py-5 bg-brand-900 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-brand-GOLD hover:text-brand-900 transition-all shadow-xl flex items-center justify-center gap-3 mt-4"
                      >
                        <Download size={18} /> Send Me My Free Guide
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-900 mb-4">Check Your Inbox!</h3>
                    <p className="text-brand-600 mb-8 leading-relaxed font-medium">Hello {formData.name}, your guide is on its way to <strong>{formData.email}</strong>. Please check your spam folder if you don't see it within 2 minutes.</p>
                    <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                      <p className="text-xs font-bold text-brand-AMBER uppercase tracking-widest mb-4">Immediate Access</p>
                      <button 
                        className="flex items-center gap-2 mx-auto text-brand-900 font-black uppercase tracking-widest text-[10px] border-b-2 border-brand-GOLD pb-1 hover:border-brand-900 transition-all"
                        onClick={() => window.open('https://example.com/guide.pdf', '_blank')}
                      >
                        <Download size={14} /> Download PDF Manually
                      </button>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="mt-8 text-neutral-400 font-bold uppercase tracking-widest text-[10px] hover:text-brand-900 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyCTA;
