import React from 'react';
import { useTranslation } from 'react-i18next';
import { Coins, ChartNoAxesColumnIncreasing, Leaf, MonitorCog } from 'lucide-react';

export default function BusinessImpact() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Coins size={32} aria-hidden="true" strokeWidth={1.5} />,
      title: t('Lower Total Cost of Ownership', { defaultValue: 'Lower Total Cost of Ownership' }),
      highlight: t('20–40%', { defaultValue: '20–40%' }),
      description: t('Lower operating costs compared with conventional vehicles', { defaultValue: 'Lower operating costs compared with conventional vehicles' })
    },
    {
      icon: <ChartNoAxesColumnIncreasing size={32} aria-hidden="true" strokeWidth={1.5} />,
      title: t('Operational Efficiency', { defaultValue: 'Operational Efficiency' }),
      highlight: t('Higher Utilization', { defaultValue: 'Higher Utilization' }),
      description: t('With smart fleet management', { defaultValue: 'With smart fleet management' })
    },
    {
      icon: <Leaf size={32} aria-hidden="true" strokeWidth={1.5} />,
      title: t('Sustainability', { defaultValue: 'Sustainability' }),
      highlight: t('Lower Emissions', { defaultValue: 'Lower Emissions' }),
      description: t('For a cleaner Thailand', { defaultValue: 'For a cleaner Thailand' })
    },
    {
      icon: <MonitorCog size={32} aria-hidden="true" strokeWidth={1.5} />,
      title: t('Real-Time Fleet Visibility', { defaultValue: 'Real-Time Fleet Visibility' }),
      highlight: t('Full Control', { defaultValue: 'Full Control' }),
      description: t('Anytime, anywhere', { defaultValue: 'Anytime, anywhere' })
    }
  ];

  return (
    <section className="business-impact section-spacing">
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div className="impact-header">
          <div className="impact-header-left">
            <span className="eyebrow">
              {t('BUSINESS IMPACT')}
            </span>
            <h2 className="impact-heading">
              {t('Drive Better Business with EV')}
            </h2>
            <p className="impact-description">
              {t('More than vehicles. A smarter, cleaner and more profitable way to move your business forward.')}
            </p>
          </div>
          <div className="impact-header-right">

          </div>
        </div>

        {/* Benefits Grid */}
        <div className="impact-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="impact-card">
              <div className="impact-icon">
                {benefit.icon}
              </div>
              <div className="impact-content">
                <h3 className="impact-title">{benefit.title}</h3>
                <div className="impact-card-bottom">
                  <div className="impact-highlight">{benefit.highlight}</div>
                  <p className="impact-support-text">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .business-impact {
          background-color: #ffffff;
        }
        
        .impact-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .eyebrow {
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .impact-heading {
          color: var(--primary);
          margin: 0;
          font-size: 2.5rem;
          line-height: 1.2;
        }

        .impact-description {
          margin: 0;
          color: var(--text-muted);
          font-size: 1.125rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .impact-header {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
          .impact-header-left {
            flex: 1;
            padding-right: 2rem;
          }
          .impact-header-right {
            flex: 0 0 45%;
            text-align: left;
            padding-top: 2rem;
          }
        }

        .impact-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .impact-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          min-height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .impact-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          border-color: rgba(77, 224, 138, 0.4);
        }

        .impact-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex: 1;
        }

        .impact-icon {
          color: var(--accent);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .impact-title {
          color: var(--primary);
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.3;
          height: 58px;
        }

        .impact-highlight {
          color: var(--accent);
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1.2;
        }

        .impact-support-text {
          color: var(--text-muted);
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile Layout */
        @media (max-width: 767px) {
          .impact-heading {
            font-size: 2rem;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .impact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .impact-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .impact-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
