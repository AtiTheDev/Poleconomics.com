import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import NewsEngine from '../components/home/NewsEngine';
import MorningBrief from '../components/home/MorningBrief';
import Voices from '../components/home/Voices';
import Systems from '../components/home/Systems';
import EssentialResources from '../components/home/EssentialResources';
import ExternalNews from '../components/home/ExternalNews';
import { secondaryStory } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Home = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const content = secondaryStory[language];

    return (
        <div className="home-page">
            <div className="container" style={{ paddingTop: 'var(--space-lg)', paddingBottom: 'var(--space-lg)' }}>
                <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xl)' }}>
                    <div className="main-feed">
                        <MorningBrief />
                    </div>
                    <aside>
                        <NewsEngine />
                    </aside>
                </div>
            </div>

            <Hero />

            <div className="container" style={{ padding: '0 var(--space-md)' }}>
                <ExternalNews />
            </div>

            {/* Secondary Hero / Feature */}
            <section className="container" style={{ padding: 'var(--space-xl) var(--space-md)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', alignItems: 'center' }}>
                    <div>
                        <img src={secondaryStory.image} alt={content.title} style={{ width: '100%', borderRadius: 'var(--radius-sm)' }} />
                    </div>
                    <div>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                            {content.category}
                        </span>
                        <h2 style={{ fontSize: '2rem', margin: 'var(--space-sm) 0' }}>{content.title}</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                            {content.summary}
                        </p>
                        <Link to={`/research/${secondaryStory.id}`} style={{ textDecoration: 'none' }}>
                            <button style={{
                                backgroundColor: 'white',
                                border: '1px solid var(--color-black)',
                                padding: '0.5rem 1.5rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}>
                                {t.readMore}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Voices />

            <Systems />

            <EssentialResources />

            {/* Responsive adjustments */}
            <style>{`
        @media (max-width: 900px) {
          .home-page .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
