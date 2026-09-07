import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

import truckImg from '../assets/services/leasing.png';
import vanImg from '../assets/services/charging.png';
import heroImg from '../assets/services/eFMS.png';
import busImg from '../assets/services/maintenance.png';
import heroMobileImg from '../assets/services/consult.png';

export default function ProductsAndServices() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'vehicle-leasing',
      title: 'Vehicle & Leasing',
      subtitle: 'Flexible commercial EV leasing tailored to your business.',
      image: truckImg,
      link: 'https://primemobility.co.th/en/our-service/',
      featured: true,
    },
    {
      id: 'charging-solution',
      title: 'Charging Solution',
      subtitle: 'Reliable charging infrastructure for every operation.',
      image: vanImg,
      link: 'https://primemobility.co.th/en/our-service/',
      featured: false,
    },
    {
      id: 'efms',
      title: 'eFMS',
      subtitle: 'Manage fleet operations with real-time data.',
      image: heroImg,
      link: 'https://primemobility.co.th/en/our-service/',
      featured: false,
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      subtitle: 'Comprehensive maintenance and operational support.',
      image: busImg,
      link: 'https://primemobility.co.th/en/our-service/',
      featured: false,
    },
    {
      id: 'consulting',
      title: 'Consulting',
      subtitle: 'Plan the right EV fleet solution for your business.',
      image: heroMobileImg,
      link: 'https://primemobility.co.th/en/our-service/',
      featured: false,
    }
  ];

  const renderCard = (service) => (
    <a
      key={service.id}
      href={service.link}
      className={`service-card ${service.featured ? 'featured-card' : 'normal-card'}`}
      aria-label={`View ${t(service.title)} service`}
    >
      <img src={service.image} alt="" className="service-img" />

      {/* Bottom info section */}
      <div className="service-content">
        <div className="service-text-group">
          <h3 className="service-title">{t(service.title)}</h3>
          <p className="service-subtitle">{t(service.subtitle)}</p>
        </div>
        <div className="service-arrow">
          <ArrowRight size={24} strokeWidth={2} />
        </div>
      </div>
    </a>
  );

  return (
    <section className="products-services">
      <div className="container">
        {/* Header */}
        <div className="ps-header">
          <div className="ps-header-left">
            <span className="eyebrow">{t('PRODUCTS & SERVICES')}</span>
            <h2 className="ps-title">{t('Everything Your Fleet Needs, Working Together.')}</h2>
          </div>
          <div className="ps-header-right">
            <a href="#" className="ps-cta">
              {t('Explore Our Services')}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Desktop / Tablet Grid */}
        <div className="ps-grid-wrapper">
          <div className="ps-main-grid">
            {/* Left Column: Featured */}
            <div className="ps-featured-col">
              {renderCard(services[0])}
            </div>

            {/* Right Column: 2x2 Grid */}
            <div className="ps-small-grid">
              {services.slice(1).map(renderCard)}
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="ps-mobile-grid">
          {services.map(renderCard)}

          <div className="ps-mobile-cta">
            <a href="#" className="ps-cta full-width">
              {t('Explore Our Services')}
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .products-services {
          background-color: #F8FAFC; /* Light blue-gray */
          padding: 64px 1.25rem;
        }

        .products-services .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header Styles */
        .ps-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 40px;
        }

        .products-services .eyebrow {
          color: #64748B;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .ps-title {
          color: #0E1B3D;
          margin: 0;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .ps-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #4DE08A;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .ps-cta:hover {
          color: #0E1B3D;
        }

        /* Grid Framework */
        .ps-grid-wrapper {
          display: none;
        }
        .ps-mobile-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .ps-mobile-cta {
          margin-top: 1rem;
        }
        
        .ps-cta.full-width {
          width: 100%;
          justify-content: center;
          padding: 1rem;
          border: 1px solid #4DE08A;
          border-radius: 8px;
        }

        /* Card Styles */
        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          background-color: #000;
          min-height: 240px;
        }

        /* Image and Overlay */
        .service-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 350ms ease;
          z-index: 0;
        }

        .service-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14, 27, 61, 0.9) 0%, rgba(14, 27, 61, 0.4) 50%, rgba(14, 27, 61, 0.1) 100%);
          transition: background 300ms ease;
          z-index: 1;
        }

        /* Content Layer */
        .service-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
        }

        .service-text-group {
          flex: 1;
        }

        .service-title {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
        }

        .service-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.5;
          overflow: hidden;
        }

        /* Arrow Button */
        .service-arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ffffff;
          color: #0E1B3D;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 300ms ease;
        }

        /* Hover and Focus States (Desktop/Tablet Only) */
        @media (min-width: 768px) {
          .service-card::after {
            background: linear-gradient(to top, rgba(14, 27, 61, 0.8) 0%, rgba(14, 27, 61, 0) 60%);
          }
          
          .service-subtitle {
            opacity: 0;
            max-height: 0;
            transform: translateY(8px);
            transition: all 300ms ease;
          }

          .service-card:hover::after,
          .service-card:focus-visible::after {
            background: rgba(14, 27, 61, 0.65);
          }

          .service-card:hover .service-img,
          .service-card:focus-visible .service-img {
            transform: scale(1.05);
          }

          .service-card:hover .service-subtitle,
          .service-card:focus-visible .service-subtitle {
            opacity: 1;
            max-height: 100px;
            transform: translateY(0);
            margin-top: 0.5rem;
          }

          .service-card:hover .service-arrow,
          .service-card:focus-visible .service-arrow {
            background-color: #4DE08A;
            color: #ffffff;
          }
          
          .service-card:focus-visible {
            outline: 3px solid #4DE08A;
            outline-offset: 4px;
          }
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .products-services {
            padding: 80px 1.5rem;
          }
          .ps-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
          .ps-mobile-grid {
            display: none;
          }
          .ps-grid-wrapper {
            display: block;
          }
          .ps-main-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .featured-card {
            height: 360px;
          }
          .ps-small-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .normal-card {
            height: 280px;
          }
        }

        /* Desktop Layout */
        @media (min-width: 1024px) {
          .products-services {
            padding: 96px 1.5rem;
          }
          .ps-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
          .ps-mobile-grid {
            display: none;
          }
          .ps-grid-wrapper {
            display: block;
          }
          .ps-main-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .ps-featured-col {
            display: flex;
          }
          .featured-card {
            flex: 1;
            min-height: 100%;
          }
          .ps-small-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .normal-card {
            height: 260px;
          }
          .service-title {
            font-size: 1.5rem;
          }
        }
        
        /* Larger Desktop */
        @media (min-width: 1280px) {
          .normal-card {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
