'use client';

import React from 'react';
import { Language } from '@/lib/types';

interface Props {
    currentLang: Language;
    onLanguageChange: (lang: Language) => void;
    isMobile?: boolean;
}

const LanguageSwitcher: React.FC<Props> = ({ currentLang, onLanguageChange, isMobile }) => {
    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'es', label: 'ES' },
        { code: 'de', label: 'DE' }
    ];

    return (
        <div className={`flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-0.5 border border-white/20 ${isMobile ? 'scale-110' : ''}`}>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`
            px-2 h-7 rounded-full flex items-center justify-center text-[9px] font-black transition-all
            focus:outline-none
            ${currentLang === lang.code
                            ? 'bg-white text-brand-900 shadow-md'
                            : 'text-white hover:bg-white/20'}
          `}
                    aria-label={`Switch to ${lang.label}`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
