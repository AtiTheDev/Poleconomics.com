import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { newsItems } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NewsArchive = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="container" style={{ padding: 'var(--space-xl) var(--space-md)' }}>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)', textDecoration: 'none' }}>
                    <ArrowLeft size={16} /> {language === 'az' ? 'Ana səhifəyə qayıt' : (language === 'ru' ? 'Вернуться на главную' : 'Back to Home')}
                </Link>
                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>{t.news} Archive</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Latest updates on global finance, policy, and technology.</p>
            </div>

            <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
                {newsItems.map((item) => {
                    const content = item[language] || item['en'];
                    return (
                        <div key={item.id} className="news-card" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'white' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={item.image} alt={content.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: 'var(--space-md)' }}>
                                <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        color: 'var(--color-primary)',
                                        backgroundColor: '#f0f7ff',
                                        padding: '2px 8px',
                                        borderRadius: '12px'
                                    }}>
                                        {content.category}
                                    </span>
                                    <div className="flex items-center gap-xs" style={{ fontSize: '0.8rem', color: '#888' }}>
                                        <Clock size={14} /> {content.time}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                    <Link to={`/research/${item.id}`} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>
                                        {content.title}
                                    </Link>
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.5 }}>
                                    {content.summary}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsArchive;
