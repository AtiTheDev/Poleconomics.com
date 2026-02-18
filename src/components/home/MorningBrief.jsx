import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { morningBriefData } from '../../data/mockData';

const MorningBrief = () => {
    const { language } = useLanguage();
    const content = morningBriefData[language];

    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            borderLeft: '4px solid var(--color-primary)',
            padding: 'var(--space-lg)',
            marginBottom: 'var(--space-xl)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
                    <Coffee size={24} color="var(--color-secondary)" />
                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{content.title}</h3>
                </div>

                <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: 'var(--space-md)' }}>
                    {content.intro}
                </p>

                <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--space-lg)' }}>
                    {content.points.map((point, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>{point}</li>
                    ))}
                </ul>

                <Link to="/research/morning-brief" style={{ textDecoration: 'none' }}>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'transparent',
                        color: 'var(--color-primary)',
                        border: '2px solid var(--color-primary)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}>
                        {content.cta} <ArrowRight size={16} />
                    </button>
                </Link>
            </div>

            {/* Decorative background element */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '150px',
                height: '150px',
                backgroundColor: '#e6e6e6',
                borderRadius: '50%',
                opacity: 0.2,
                zIndex: 1
            }}></div>
        </div>
    );
};

export default MorningBrief;
