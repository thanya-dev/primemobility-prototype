import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, MapPin } from 'lucide-react';
import vanImg from '../assets/charging/location.png';
import busImg from '../assets/charging/charging.png';

export default function ChargingNetwork() {
  const { t } = useTranslation();

  const blocks = [
    {
      title: 'PrimeMobility charging network across Thailand',
      highlight: '9',
      animateTo: 9,
      subtitle: 'Strategic Locations',
      features: [
        'Key logistics corridors',
        'Industrial areas',
        'Major cities',
        'Scalable for fleet growth'
      ],
      icon: <MapPin size={48} color="var(--accent)" strokeWidth={1.5} />,
      bgGradient: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
      image: vanImg
    },
    {
      title: 'Fast Charging',
      highlight: 'Up to 240 kW',
      subtitle: 'Ultra-fast charging',
      features: [
        'Commercial-grade infrastructure',
        'Charging data monitoring',
        'Designed for fleet operations'
      ],
      icon: <Zap size={48} color="var(--accent)" strokeWidth={1.5} />,
      bgGradient: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
      image: busImg
    }
  ];

  return (
    <section className="charging-network section-spacing" style={{ backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <div className="text-center mb-lg">
          <span className="eyebrow" style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
            {t("CHARGING NETWORK")}
          </span>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{t("Powering Thailand’s Commercial EV Future")}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            {t("Strategic charging locations supporting commercial fleets across key logistics routes.")}
          </p>
        </div>

        <div className="cn-blocks-wrapper">
          {blocks.map((block, idx) => (
            <div key={idx} className="cn-block-card">
              <div className="cn-text-side" style={{ background: block.bgGradient }}>
                <div className="cn-overlay"></div>
                <div className="cn-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '0 0 1.5rem 0' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0, maxWidth: '75%', lineHeight: 1.3, color: 'var(--text-inverse)' }}>
                      {t(block.title)}
                    </h3>
                    <div style={{ opacity: 0.8 }}>
                      {block.icon}
                    </div>
                  </div>

                  <div>
                    <div className="cn-highlight">
                      {block.animateTo ? <AnimatedNumber end={block.animateTo} /> : t(block.highlight)}
                    </div>
                    <div className="cn-subtitle">{t(block.subtitle)}</div>
                  </div>

                  <ul className="cn-features">
                    {block.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ color: 'var(--text-inverse)' }}>{t(feature)}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="cn-image-side">
                <div className="cn-image-bg" style={{ backgroundImage: `url(${block.image})` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cn-blocks-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cn-block-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          background-color: #fff;
        }

        .cn-text-side {
          flex: 0.75;
          padding: 3rem;
          position: relative;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cn-image-side {
          flex: 1.25;
          min-height: 320px;
          position: relative;
          overflow: hidden;
        }

        .cn-image-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .cn-block-card:hover .cn-image-bg {
          transform: scale(1.05);
        }

        .cn-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(0,0,0,0.4));
          z-index: 1;
        }

        .cn-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cn-highlight {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: var(--text-inverse);
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .cn-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--text-inverse);
          opacity: 0.9;
        }

        .cn-features {
          list-style: none;
          padding: 0;
          margin: auto 0 0 0;
        }

        .cn-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 1.05rem;
          opacity: 0.95;
        }

        .cn-features li::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent);
        }

        @media (min-width: 992px) {
          .cn-block-card {
            flex-direction: row;
            min-height: 480px;
          }
        }
      `}</style>
    </section>
  );
}

function AnimatedNumber({ end }) {
  const [count, setCount] = useState(6);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 6;
          const duration = 600; // Fast counting
          const steps = end > 6 ? end - 6 : 1;
          const stepTime = Math.abs(Math.floor(duration / steps));
          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= end) {
              clearInterval(timer);
              setCount(end);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
}
