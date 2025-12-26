import React from 'react';
import type { Metadata } from 'next';
import BlogPostContent from '@/components/pages/BlogPostContent';
import { useCMS } from '@/context/CMSContext'; // Warning: This might not work in server component if context is client only. 
// Instead of context, we should import data directly or fetch it.
import { BLOG_POSTS } from '@/lib/constants';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found | ExpatRockstars Insights',
        };
    }

    return {
        title: `${post.title.en} | ExpatRockstars Insights`,
        description: post.excerpt.en,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    return <BlogPostContent slug={slug} />;
}
