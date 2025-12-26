'use client';

import React from 'react';
import Link from 'next/link';
import { CONTENT, PROJECTS } from '@/lib/constants';
import { useCMS } from '@/context/CMSContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Calendar, User, Share2, ArrowRight, BookOpen } from 'lucide-react';

const BlogPostContent: React.FC<{ slug: string }> = ({ slug }) => {
    const { lang } = useLanguage();
    const { blogPosts } = useCMS();
    const post = blogPosts.find(p => p.slug === slug);
    const t = CONTENT[lang] || CONTENT['en'];

    if (!post) {
        return (
            <div className="pt-32 text-center">
                <h1 className="text-2xl font-bold text-brand-900">Post not found</h1>
                <Link href="/blog" className="text-brand-GOLD hover:underline mt-4 block">Back to Blog</Link>
            </div>
        )
    }

    const project = post.projectId ? PROJECTS.find(p => p.id === post.projectId) : null;

    const title = post.title[lang] || post.title.en;
    const excerpt = post.excerpt[lang] || post.excerpt.en;
    const content = post.content[lang] || post.content.en;

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-900 font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors">
                    <ArrowLeft size={12} /> Back to Insights
                </Link>

                <span className="text-brand-GOLD font-bold tracking-[0.2em] uppercase text-[10px] block mb-4">
                    {post.category}
                </span>

                <h1 className="font-heading text-3xl md:text-5xl font-bold text-brand-900 mb-8 leading-[1.2]">
                    {title}
                </h1>

                <div className="flex items-center justify-between border-y border-neutral-100 py-6 mb-12">
                    <div className="flex items-center gap-6 text-neutral-500 text-xs font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-brand-GOLD" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-brand-GOLD" />
                            Rockstar Advisor
                        </div>
                    </div>
                    <button className="text-neutral-400 hover:text-brand-900 transition-colors">
                        <Share2 size={18} />
                    </button>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 bg-slate-100">
                    <img src={post.image} alt={title} className="w-full h-auto object-cover max-h-[500px]" loading="eager" />
                </div>

                <article className="prose prose-lg prose-neutral max-w-none mb-20 text-brand-900">
                    <p className="text-xl text-brand-900 leading-relaxed mb-10 font-semibold border-l-4 border-brand-GOLD pl-6">
                        {excerpt}
                    </p>
                    <div
                        className="text-brand-600 leading-[1.8] font-sans"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </article>

                {/* Dynamic Project CTA if linked */}
                {project && (
                    <div className="mb-20 bg-neutral-900 p-10 rounded-[2rem] border border-neutral-800 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-GOLD/5 rounded-full blur-3xl group-hover:bg-brand-GOLD/10 transition-colors"></div>
                        <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden shadow-md shrink-0">
                            <img src={project.images[0]} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-grow text-white">
                            <h4 className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px] mb-3">Featured Opportunity</h4>
                            <h3 className="text-2xl font-bold text-white mb-3">{project.name[lang] || project.name.en}</h3>
                            <p className="text-sm text-neutral-400 mb-6 leading-relaxed line-clamp-2">
                                {project.description[lang] || project.description.en}
                            </p>
                            <Link
                                href={`/proyectos/${project.slug}`}
                                className="inline-flex items-center gap-3 bg-brand-GOLD text-brand-950 font-black px-6 py-3 rounded-xl text-xs uppercase hover:bg-white transition-all shadow-xl"
                            >
                                View Development <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Lead Magnet CTA for Blog */}
                <div className="mb-20 bg-brand-GOLD p-12 rounded-[2rem] text-brand-950 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[20px] border-white rounded-full"></div>
                    </div>
                    <BookOpen className="mx-auto mb-6 text-brand-950/20" size={48} />
                    <h3 className="font-heading text-3xl font-bold mb-4">Want the full picture?</h3>
                    <p className="text-brand-950 font-medium mb-8 max-w-xl mx-auto">
                        Download our 50-page Panama Investment Bible. Covers residency, taxes, and hidden market opportunities.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-brand-950 text-white font-black py-4 px-12 rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl"
                    >
                        Download Free Guide
                    </Link>
                </div>

                {/* Professional Advisor CTA */}
                <div className="bg-neutral-50 rounded-2xl p-12 text-center border border-neutral-100 mb-20">
                    <h3 className="font-heading text-2xl font-bold text-brand-900 mb-4">Need personalized advice?</h3>
                    <p className="text-brand-500 mb-8 max-w-xl mx-auto">Our senior advisors can build a custom portfolio for your specific ROI and residency goals.</p>
                    <Link
                        href="/contacto"
                        className="inline-block border-2 border-brand-900 text-brand-900 font-black py-4 px-12 rounded-xl uppercase tracking-widest text-xs hover:bg-brand-900 hover:text-white transition-all"
                    >
                        Speak with an Advisor
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostContent;
