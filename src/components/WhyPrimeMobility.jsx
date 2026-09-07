import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Handshake, Settings, ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function WhyPrimeMobility() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: <GraduationCap size={48} aria-hidden="true" strokeWidth={1.5} />,
      title: 'EV Expert',
      description: 'In-depth knowledge of commercial EVs and the Thai market',
    },
    {
      icon: <Handshake size={48} aria-hidden="true" strokeWidth={1.5} />,
      title: 'Trusted Advisor',
      description: 'Independent and objective recommendations',
    },
    {
      icon: <Settings size={48} aria-hidden="true" strokeWidth={1.5} />,
      title: 'Total Fleet Solution',
      description: 'From vehicles and charging to maintenance and eFMS',
    },
    {
      icon: <ChartNoAxesColumnIncreasing size={48} aria-hidden="true" strokeWidth={1.5} />,
      title: 'Business Value Partner',
      description: 'Focused on your long-term business success',
    },
  ];

  return (
    <section ref={sectionRef} className="why-primemobility">
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div className="why-header">
          <div className="why-header-content">
            <span className="eyebrow">{t('WHY PRIMEMOBILITY')}</span>
            <h2 className="why-heading">{t('Your Trusted Commercial EV Partner')}</h2>
            <p className="why-description">
              {t('Deep expertise. End-to-end solutions. Real business impact.')}
            </p>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="why-grid">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className={`why-item ${isVisible ? 'fade-up' : ''}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="why-icon">{item.icon}</div>
              <div className="why-content">
                <h3 className="why-title">{t(item.title)}</h3>
                <p className="why-support-text">{t(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-primemobility {
          background-color: #0E1B3D;
          color: #ffffff;
          padding: 56px 1.25rem;
        }

        .why-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .why-primemobility .eyebrow {
          color: var(--accent, #4DE08A);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .why-heading {
          color: #ffffff;
          margin: 0 0 1rem 0;
          font-size: 2.5rem;
          line-height: 1.2;
        }

        .why-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.125rem;
          line-height: 1.6;
        }

        .why-grid {
          display: flex;
          flex-direction: column;
        }

        .why-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          opacity: 0;
          transform: translateY(20px);
        }

        .why-item:last-child {
          border-bottom: none;
        }

        .why-item.fade-up {
          animation: fadeUp 0.4s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-item {
            opacity: 1;
            transform: none;
            animation: none !important;
          }
        }

        .why-icon {
          color: #ffffff;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .why-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .why-title {
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .why-support-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.5;
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .why-primemobility {
            padding: 80px 1.5rem;
          }
          .why-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .why-item {
            flex-direction: column;
            text-align: center;
            align-items: center;
            padding: 2.5rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
          .why-item:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
          }
          .why-item:nth-child(n+3) {
            border-bottom: none;
          }
        }

        /* Desktop Layout */
        @media (min-width: 1024px) {
          .why-primemobility {
            padding: 96px 1.5rem;
          }
          .why-header {
            max-width: 800px;
          }
          .why-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 1rem;
          }
          .why-item {
            flex-direction: column;
            text-align: center;
            align-items: center;
            padding: 3rem 1.5rem 1rem 1.5rem;
            border-bottom: none;
            border-right: 1px solid rgba(255, 255, 255, 0.15);
          }
          .why-item:last-child {
            border-right: none;
          }
        }
      `}</style>
    </section>
  );
}
