import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe } from 'lucide-react';
import '../../styles/index.css';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, switchLanguage } = useLanguage();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const t = translations[language];

    const cycleLanguage = () => {
        const languages = ['en', 'ru', 'az'];
        const currentIndex = languages.indexOf(language);
        const nextIndex = (currentIndex + 1) % languages.length;
        switchLanguage(languages[nextIndex]);
    };

    const getLangLabel = (code) => {
        switch (code) {
            case 'en': return 'EN';
            case 'ru': return 'RU';
            case 'az': return 'AZ';
            default: return 'EN';
        }
    };

    return (
        <header className="header" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
                {/* Logo */}
                <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 900, letterSpacing: '-0.5px' }}>
                    POLECONOMICS<span style={{ color: 'var(--color-secondary)' }}>.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden-mobile" style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: 500 }}>{t.news}</Link>
                    <Link to="/research" style={{ fontWeight: 500 }}>{t.research}</Link>
                    <Link to="/about" style={{ fontWeight: 500 }}>{t.about}</Link>
                    <Link to="/subscribe" className="btn-subscribe" style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    }}>
                        {t.subscribe}
                    </Link>
                    <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Search"><Search size={20} /></button>

                    {/* Language Switcher */}
                    <button
                        onClick={cycleLanguage}
                        style={{
                            background: 'none',
                            border: '1px solid var(--color-border)',
                            padding: '0.3rem 0.6rem',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            marginLeft: '0.5rem'
                        }}
                    >
                        <Globe size={14} />
                        {getLangLabel(language)}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-only-container">
                    {/* Mobile Lang Switcher - visible only on mobile (simplified view logic) */}
                    <button
                        className="mobile-lang-toggle"
                        onClick={cycleLanguage}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            display: 'none', // Will be overridden by CSS media query if we had one, but for now we rely on the container visibility
                        }}
                    >
                        {getLangLabel(language)}
                    </button>

                    <button className="mobile-toggle" onClick={toggleMenu} style={{ display: 'none' }}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div style={{ position: 'absolute', top: 'var(--header-height)', left: 0, right: 0, background: 'white', padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                    <Link to="/" onClick={toggleMenu}>{t.news}</Link>
                    <Link to="/research" onClick={toggleMenu}>{t.research}</Link>
                    <Link to="/about" onClick={toggleMenu}>{t.about}</Link>
                    <Link to="/subscribe" onClick={toggleMenu} style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{t.subscribe}</Link>
                    <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Language:</span>
                        <button
                            onClick={cycleLanguage}
                            style={{
                                background: '#f5f5f5',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-sm)',
                                fontWeight: 'bold'
                            }}
                        >
                            {getLangLabel(language)}
                        </button>
                    </div>
                </div>
            )}
            <style>{`
                @media (max-width: 768px) {
                    .mobile-only-container .mobile-lang-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
