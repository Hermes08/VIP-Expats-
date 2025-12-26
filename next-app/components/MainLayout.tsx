'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import RockstarParticles from './RockstarParticles';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-950 text-slate-100 relative">
            {/* Persistent 3D Particle Field */}
            <RockstarParticles />

            <StickyCTA />

            <Navbar />

            <main className="flex-grow z-10 relative">{children}</main>

            <Footer />
        </div>
    );
};

export default MainLayout;
