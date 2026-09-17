import React from 'react';
import { useTranslation } from 'react-i18next';
import { articlesEN, articlesTH } from '../data/articles';

const getExcerpt = (htmlContent) => {
  if (!htmlContent) return '';
  const text = htmlContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 160) {
    return text.substring(0, 160).trim() + '...';
  }
  return text;
};

export default function Articles() {
  const { t, i18n } = useTranslation();
  
  const articles = i18n.language === 'th' ? articlesTH : articlesEN;

  return (
    <main className="articles-page" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <section
        className="hero"
        style={{
          minHeight: '40vh',
          background: `linear-gradient(rgba(14, 27, 61, 0.7), rgba(14, 27, 61, 0.7)), url('https://primemobility.co.th/wp-content/uploads/2025/03/motion-image-small-white-truck-running-road-logistics-business-1024x678.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--text-inverse)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="hero-content" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text-inverse)' }}>{t('News & Articles')}</h1>
        </div>
      </section>

      <style>{`
        .articles-grid {
          display: grid;
          gap: 2.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .article-card {
          display: flex;
          flex-direction: column;
          background-color: transparent;
        }
        .article-img-wrapper {
          overflow: hidden;
          border-radius: var(--radius-md, 8px);
          aspect-ratio: 16/9;
          margin-bottom: 1rem;
        }
        .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .article-card:hover .article-img {
          transform: scale(1.05);
        }
        .article-card:hover .article-title, 
        .article-card:hover .article-read-more {
          color: var(--accent);
        }
        .article-date {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .article-title {
          font-size: 1.25rem;
          color: var(--primary);
          margin-top: 0;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
          line-height: 1.4;
          font-weight: 600;
        }
        .article-excerpt {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .article-divider {
          height: 1px;
          background-color: #E5E7EB;
          margin: 1.25rem 0;
          width: 100%;
        }
        .article-read-more {
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          margin-top: auto;
          align-self: flex-start;
          min-height: 44px;
        }
        .article-read-more svg {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }
        .article-card:hover .article-read-more svg {
          transform: translateX(4px);
        }
      `}</style>
      
      <section className="section-spacing">
        <div className="container" style={{ maxWidth: '1224px', margin: '0 auto', padding: '2rem 1rem' }}>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="article-img-wrapper">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="article-img"
                  />
                </div>
                <div className="article-date">{article.date}</div>
                <h3 className="article-title">{article.title}</h3>
                <div className="article-excerpt">
                  {getExcerpt(article.content)}
                </div>
                <div className="article-divider"></div>
                <a 
                  href={article.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-read-more"
                >
                  {article.linkText} 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
