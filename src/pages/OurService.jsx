import { useTranslation } from 'react-i18next';
import React from 'react';
import ContactUs from '../components/ContactUs';
import heroImage from '../assets/our-services/hero.png';

export default function OurService() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'vehicle-leasing',
      number: '01',
      title: 'OurService.service1.title',
      description: 'OurService.service1.desc',
      image: 'https://primemobility.co.th/wp-content/uploads/2025/03/IMAGE-8.png',
      alt: 'OurService.service1.title'
    },
    {
      id: 'charging-installation',
      number: '02',
      title: 'OurService.service2.title',
      description: 'OurService.service2.desc',
      image: 'https://primemobility.co.th/wp-content/uploads/2025/03/IMAGE-1-2.png',
      alt: 'OurService.service2.title'
    },
    {
      id: 'insurance-maintenance',
      number: '03',
      title: 'OurService.service3.title',
      description: 'OurService.service3.desc',
      image: 'https://primemobility.co.th/wp-content/uploads/2025/03/IMAGE-2-2.png',
      alt: 'OurService.service3.title'
    },
    {
      id: 'ev-fleet-management',
      number: '04',
      title: 'OurService.service4.title',
      description: 'OurService.service4.desc',
      image: 'https://primemobility.co.th/wp-content/uploads/2025/03/IMAGE-3-1.png',
      alt: 'OurService.service4.title'
    }
  ];

  const renderService = (service, index) => {
    // Alternating background colors
    const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-surface-alt';
    
    return (
      <section key={service.id} className={`service-detail-section ${bgClass}`}>
        <div className="service-detail-container">
          <div className="service-detail-content">
            <div className="service-detail-number-wrapper">
              <span className="service-detail-accent-line"></span>
              <span className="service-detail-number">{service.number}</span>
            </div>
            <h2 className="service-detail-title">{t(service.title)}</h2>
            <p className="service-detail-description" dangerouslySetInnerHTML={{ __html: t(service.description) }} />
          </div>
          <div className="service-detail-image-wrapper">
            <img 
              src={service.image} 
              alt={t(service.alt)} 
              className="service-detail-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="our-service-page">
      {/* 1. Hero */}
      <section
        className="hero"
        style={{
          minHeight: '40vh',
          background: `linear-gradient(rgba(14, 27, 61, 0.7), rgba(14, 27, 61, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--text-inverse)'
        }}
      >
        <div className="hero-content" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text-inverse)' }}>{t('OurService.hero.title')}</h1>
          <p style={{ margin: '0 auto', maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)' }}>
            {t('OurService.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="services-list">
        {services.map((service, index) => renderService(service, index))}
      </div>

      <style>{`
        .bg-white {
          background-color: var(--background); /* #FFFFFF */
        }
        
        .bg-surface-alt {
          background-color: var(--surface-alt); /* #F3F6FA */
        }

        .service-detail-section {
          width: 100%;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05); /* Thin divider */
        }

        .service-detail-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 20px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .service-detail-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          order: 1; /* Always first on mobile */
        }

        .service-detail-image-wrapper {
          width: 100%;
          order: 2; /* Always second on mobile */
        }

        .service-detail-image {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 8px; /* Clean look without heavy shadows */
          display: block;
        }

        .service-detail-number-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .service-detail-accent-line {
          width: 32px;
          height: 2px;
          background-color: var(--accent);
        }

        .service-detail-number {
          color: var(--accent);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .service-detail-title {
          color: var(--primary);
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .service-detail-description {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
          white-space: pre-line;
        }

        .text-accent {
          color: var(--accent);
          font-weight: 600;
        }

        /* Tablet Layout (768px - 1023px) */
        @media (min-width: 768px) {
          .service-detail-container {
            padding: 64px 32px;
          }
          
          .service-detail-title {
            font-size: 2rem;
            margin-bottom: 24px;
          }
          
          .service-detail-description {
            font-size: 1.125rem;
          }
        }

        /* Desktop Layout (1024px and up) */
        @media (min-width: 1024px) {
          .service-detail-container {
            padding: 80px 40px;
            flex-direction: row;
            align-items: center;
            gap: 64px;
          }

          /* Content (42%) / Image (58%) */
          .service-detail-content {
            width: 42%;
            order: unset; /* Reset order for desktop */
          }

          .service-detail-image-wrapper {
            width: 58%;
            order: unset; /* Reset order for desktop */
          }

          /* Alternate layouts: 2nd and 4th rows (index 1 and 3) */
          .service-detail-section:nth-child(even) .service-detail-container {
            flex-direction: row-reverse;
          }
        }
      `}</style>

      <ContactUs />
    </main>
  );
}
