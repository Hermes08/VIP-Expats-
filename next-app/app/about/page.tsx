import { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPageContent';
import { SEO_KEYWORDS_LIST } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'About ExpatRockstars | Premier Panama Real Estate Agency & Relocation Services',
    description: 'Learn why ExpatRockstars is the top panama real estate agency for expats. Specialized in boquete real estate, panama condos on the beach, and the pensionado visa.',
    keywords: SEO_KEYWORDS_LIST.join(', '),
};

export default function AboutPage() {
    return <AboutPageContent />;
}
