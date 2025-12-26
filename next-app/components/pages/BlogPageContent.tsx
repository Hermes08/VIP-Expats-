'use client';

import React from 'react';
import Link from 'next/link';
import { CONTENT } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const BlogPageContent: React.FC = () => {
    const { lang } = useLanguage();
    const t = CONTENT[lang] || CONTENT['en'];
    const { blogPosts } = useCMS();

    return (
        <div className="pt-24 min-h-screen bg-slate-50 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-900 mb-6">{t.nav.blog}</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Stay updated with the latest trends in the Panamanian property market, investment guides, and lifestyle tips for the rockstar expat.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-100">
                            <Link href={`/blog/${post.slug}`} className="block h-64 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title[lang] || post.title.en}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-brand-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-slate-400 text-xs font-medium mb-3">{post.date}</div>
                                <h2 className="font-serif text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-GOLD transition-colors leading-tight">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title[lang] || post.title.en}
                                    </Link>
                                </h2>
                                <p className="text-slate-500 mb-8 leading-relaxed flex-grow line-clamp-3 text-sm">
                                    {post.excerpt[lang] || post.excerpt.en}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-brand-900 font-bold hover:gap-3 transition-all text-sm group-hover:text-brand-GOLD"
                                >
                                    Read Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPageContent;
