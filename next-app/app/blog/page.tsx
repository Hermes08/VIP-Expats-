import React from 'react';
import type { Metadata } from 'next';
import BlogPageContent from '@/components/pages/BlogPageContent';

export const metadata: Metadata = {
    title: 'Blog | ExpatRockstars Real Estate',
    description: 'Read our latest insights on Panama real estate, investment trends, and how to live like a rockstar as an expat.',
};

export default function Page() {
    return <BlogPageContent />;
}
