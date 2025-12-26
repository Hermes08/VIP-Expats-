'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const ContactPageContent: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <section className="bg-brand-900 py-24 text-white text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Hablemos de tu inversión</h1>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">Nuestro equipo de expertos bilingües de ExpatRockstars está listo para asistirte en cada paso.</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-brand-GOLD">
                        <form onSubmit={(e) => e.preventDefault()} className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Nombre Completo</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="john@expatrockstars.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">WhatsApp / Phone</label>
                                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="+1 234 567 890" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Proyecto de Interés</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none text-sm font-bold">
                                    <option>Seleccionar proyecto...</option>
                                    <option>Pino Alto (Boquete)</option>
                                    <option>Westin Residences (Playa Bonita)</option>
                                    <option>Playa Escondida (Colón)</option>
                                    <option>Buenaventura (Rio Hato)</option>
                                    <option>Margaritaville (Chame)</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Mensaje</label>
                                <textarea className="w-full h-32 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-GOLD outline-none" placeholder="I am interested in..." />
                            </div>
                            <button className="md:col-span-2 bg-brand-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-GOLD hover:text-brand-900 transition-all shadow-xl">
                                <Send size={18} /> Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                            <h3 className="text-xl font-bold text-brand-900 mb-8 uppercase tracking-widest text-sm">Direct Contact</h3>
                            <div className="space-y-6">
                                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-100 rounded-full group-hover:bg-brand-GOLD group-hover:text-brand-900 transition-all"><Phone size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                                        <p className="font-bold text-brand-900">{CONTACT_INFO.phone}</p>
                                    </div>
                                </a>
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-100 rounded-full group-hover:bg-green-600 group-hover:text-white transition-all"><MessageCircle size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">WhatsApp</p>
                                        <p className="font-bold text-brand-900">Send Message</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-slate-100 rounded-full transition-all"><Mail size={20} /></div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                                        <p className="font-bold text-brand-900">{CONTACT_INFO.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Micro Map */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-64 grayscale hover:grayscale-0 transition-all">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5036!2d-79.51!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTgnNDguMCJOIDc5wrAzMCczNi4wIlc!5e0!3m2!1sen!2spa!4v1"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageContent;
