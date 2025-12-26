import React from 'react';
import type { Metadata } from 'next';
import ProjectsPageContent from '@/components/pages/ProjectsPageContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'New Developments Panama | Luxury Beachfront Condos & Investment Projects',
    description: 'Explore pre-construction condos, gated communities, and luxury resorts in Panama. From Panama City to Boquete and Coronado real estate.',
    keywords: SEO_KEYWORDS_LIST.join(', '),
};

export default function Page() {
    return <ProjectsPageContent />;
}
