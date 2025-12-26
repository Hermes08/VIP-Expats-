import React from 'react';
import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
    title: 'Hablemos de tu inversión en Panamá | Contacto ExpatRockstars',
};

export default function Page() {
    return <ContactPageContent />;
}
