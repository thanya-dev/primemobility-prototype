import React from 'react';
import { useTranslation } from 'react-i18next';
import marubeniImg from '../assets/investors/maruben.jpg';
import banpuNextImg from '../assets/investors/BANPU_NEXT.png';
import fuyoImg from '../assets/investors/fuyo-group.jpg';

export default function StrategicInvestors() {
  const { t } = useTranslation();

  const investors = [
    {
      name: 'Marubeni',
      logo: marubeniImg,
      alt: 'Marubeni strategic investor logo',
      descKey: 'Marubeni description'
    },
    {
      name: 'Banpu NEXT',
      logo: banpuNextImg,
      alt: 'Banpu NEXT strategic investor logo',
      descKey: 'Banpu NEXT description'
    },
    {
      name: 'Fuyo General Lease',
      logo: fuyoImg,
      alt: 'Fuyo General Lease strategic investor logo',
      descKey: 'Fuyo General Lease description',
      scale: 1.6
    }
  ];

  const handleImageError = (e) => {
    // Hide the broken image icon
    e.target.style.display = 'none';
  };

  return (
    <section className="strategic-investors section-spacing">
      <div className="container">
        <div className="si-header">
          <span className="eyebrow">{t('Strategic Investors')}</span>
          <h2 className="si-headline">{t('Backed by Three Leading Global Companies')}</h2>
          <p className="si-supporting-text">
            {t('Strategic investors description')}
          </p>
        </div>
        
        <div className="si-grid">
          {investors.map((investor, index) => (
            <div className="si-card" key={index}>
              <div className="si-logo-wrapper">
                <img 
                  src={investor.logo} 
                  alt={investor.alt} 
                  className="si-logo"
                  style={{ transform: investor.scale ? `scale(${investor.scale})` : 'none' }}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <p className="si-desc">{t(investor.descKey)}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .strategic-investors {
          background-color: var(--surface-alt);
          width: 100%;
        }

        .strategic-investors .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .si-header {
          text-align: center;
          margin-bottom: 2.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .eyebrow {
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .si-headline {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.625rem; /* ~26px on mobile */
          font-weight: 700;
          line-height: 1.3;
        }

        .si-supporting-text {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 auto;
        }

        .si-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem; /* 16px on mobile */
        }

        .si-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.5rem; /* 24px */
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .si-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.06);
        }

        .si-logo-wrapper {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .si-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-width: 180px;
        }

        .si-name {
          color: var(--primary);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .si-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Tablet Layout */
        @media (min-width: 768px) {
          .si-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          .si-headline {
            font-size: 2rem;
          }
          .si-supporting-text {
            font-size: 1.125rem;
          }
        }

        /* Desktop Layout */
        @media (min-width: 1024px) {
          .si-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          .si-header {
            margin-bottom: 3.5rem;
          }
          .si-headline {
            font-size: 2.25rem;
          }
          .si-card {
            padding: 2.5rem 2rem;
          }
          .si-logo-wrapper {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
