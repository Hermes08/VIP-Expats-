import React from 'react';
import type { Metadata } from 'next';
import ProjectDetailContent from '@/components/pages/ProjectDetailContent';
import { PROJECTS } from '@/lib/constants';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | ExpatRockstars',
            description: 'The requested project could not be found.',
        };
    }

    return {
        title: project.h1Title.en,
        description: project.description.en,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    return <ProjectDetailContent slug={slug} />;
}
