import React from 'react';
import type { Metadata } from 'next';
import RelocationToursContent from '@/components/pages/RelocationToursContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Panama Relocation Tours | Retire in Panama & Discovery Tours | ExpatRockstars',
    description: 'Master your relocation to Panama with our expert-led discovery tours. Explore boquete real estate, panama condos on the beach, and the pensionado visa.',
    keywords: SEO_KEYWORDS_LIST.join(', '),
};

export default function Page() {
    return <RelocationToursContent />;
}
