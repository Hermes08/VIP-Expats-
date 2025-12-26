import React from 'react';
import type { Metadata } from 'next';
import QuizPageContent from '@/components/pages/QuizPageContent';

export const metadata: Metadata = {
    title: 'Panama Neighborhood Quiz | ExpatRockstars Discovery Tool',
};

export default function Page() {
    return <QuizPageContent />;
}
