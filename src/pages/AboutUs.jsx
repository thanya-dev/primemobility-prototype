import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { ChevronRight, Target, Truck, Leaf, Shield, Cpu, Factory } from 'lucide-react';
import placeholderImage from '../assets/about-us/placeholder.png';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';
import Partners from '../components/Partners';
import StrategicInvestors from '../components/StrategicInvestors';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about-us/about.png';


export default function AboutUs() {
  const { t } = useTranslation();
  const [selectedDirector, setSelectedDirector] = useState(null);

  // Handle Esc key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedDirector) {
        setSelectedDirector(null);
      }
    };
    if (selectedDirector) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDirector]);


  // Board of Directors Data Placeholder
  const boardOfDirectors = [
    {
      id: 1,
      name: t("Keishi Kinoshita"),
      position: t("President & CEO"),
      representativeOf: "",
      image: "https://i.postimg.cc/PJVRGnrG/Image-721-683x1024.jpg",
      imageAlt: "",
      biography: "Biography placeholder. The Board of Directors provides strategic direction and oversees operations.",
      displayOrder: 1
    },
    {
      id: 2,
      name: t("Director Name Placeholder"),
      position: t("Position Placeholder"),
      representativeOf: "",
      image: placeholderImage,
      imageAlt: "",
      biography: null,
      displayOrder: 2
    },
    {
      id: 3,
      name: t("Director Name Placeholder"),
      position: t("Position Placeholder"),
      representativeOf: "",
      image: placeholderImage,
      imageAlt: "",
      biography: "Biography placeholder.",
      displayOrder: 3
    },
    {
      id: 4,
      name: t("Director Name Placeholder"),
      position: t("Position Placeholder"),
      representativeOf: "",
      image: placeholderImage,
      imageAlt: "",
      biography: "Biography placeholder.",
      displayOrder: 4
    }
  ];

  return (
    <main className="about-us-page">
      {/* 1. Hero */}
      <section
        className="hero"
        style={{
          minHeight: '40vh',
          background: `linear-gradient(rgba(14, 27, 61, 0.7), rgba(14, 27, 61, 0.7)), url('https://primemobility.co.th/wp-content/uploads/2025/03/IMAGE-2-1024x368.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--text-inverse)'
        }}
      >
        <div className="hero-content" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text-inverse)' }}>{t('About PrimeMobility')}</h1>
          <p style={{ margin: '0 auto', maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)' }}>
            {t('Accelerating sustainable transportation through innovative software solutions')}
          </p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="company-overview">
        <div className="overview-container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>{t('Company Overview')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('Elevate efficiency, safety, and sustainable usage<br className="desktop-break" /> with a data-driven approach and promotion of clean energy') }} />
          <p dangerouslySetInnerHTML={{ __html: t('PrimeMobility Co., Ltd. is committed to being a key partner<br className="desktop-break" /> in delivering management solutions that meet all customer needs') }} />

        </div>
      </section>

      {/* 3. Company Information */}
      <section className="company-info-editorial section-spacing">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="cie-grid">
            {/* Left Column: Visual */}
            <div className="cie-visual">
              <img
                src={aboutImg}
                alt="PrimeMobility Commercial EV Operations"
                className="cie-image"
              />
            </div>

            {/* Right Column: Text and Details */}
            <div className="cie-content">
              <span className="eyebrow" style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                COMPANY INFORMATION
              </span>
              <h2 className="cie-headline">{t('Meet PrimeMobility')}</h2>
              <p className="cie-supporting-text">
                {t('An end-to-end commercial electric vehicle solutions provider covering consulting, vehicle leasing, fleet management, and charging solutions.')}
              </p>

              <div className="cie-details">
                <div className="cie-row">
                  <span className="cie-label">{t('Company Name')}</span>
                  <span className="cie-value">{t('PrimeMobility Co., Ltd.')}</span>
                </div>
                <div className="cie-row">
                  <span className="cie-label">{t('Company Structure')}</span>
                  <span className="cie-value">{t('A joint venture between Marubeni, Banpu NEXT, and Fuyo General Lease')}</span>
                </div>
                <div className="cie-row">
                  <span className="cie-label">{t('Business')}</span>
                  <span className="cie-value">{t('Commercial EV Solutions')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .company-info-editorial {
            background-color: var(--primary);
            width: 100%;
          }
          
          .cie-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          
          @media (min-width: 1024px) {
            .cie-grid {
              grid-template-columns: 55% 1fr;
              gap: 4rem;
              align-items: center;
            }
          }
          
          .cie-visual {
            position: relative;
            width: 100%;
            margin-bottom: 2rem;
          }
          
          @media (min-width: 1024px) {
            .cie-visual {
              margin-bottom: 0;
            }
          }
          
          .cie-image {
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
            border-radius: var(--radius-lg);
            box-shadow: 0 12px 24px rgba(0,0,0,0.06);
            display: block;
          }
          
          .cie-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .cie-headline {
            color: #ffffff;
            margin-bottom: 1.25rem;
            font-size: 2.25rem;
            line-height: 1.2;
          }
          
          .cie-supporting-text {
            color: rgba(255, 255, 255, 0.85);
            font-size: 1.125rem;
            line-height: 1.6;
            margin-bottom: 2.5rem;
          }
          
          .cie-details {
            display: flex;
            flex-direction: column;
          }
          
          .cie-row {
            display: flex;
            flex-direction: column;
            padding: 1.25rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .cie-row:first-child {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .cie-label {
            font-size: 0.875rem;
            color: var(--accent);
            margin-bottom: 0.5rem;
            font-weight: 600;
          }
          
          .cie-value {
            font-size: 1.125rem;
            color: #ffffff;
            font-weight: 500;
            line-height: 1.5;
          }
        `}</style>
      </section>

      {/* 4. Vision & Mission */}
      <section className="vision-mission-editorial section-spacing">
        <div className="vm-container">
          <div className="vm-panel">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Future of clean energy and mobility"
              className="vm-image"
              loading="lazy"
            />
            <div className="vm-overlay"></div>
            <div className="vm-content">
              <span className="vm-eyebrow">
                <span className="vm-accent-mark"></span>
                {t('OUR VISION')}
              </span>
              <p className="vm-text">{t('Empowering fleets with innovative mobility solutions to drive a greener future.')}</p>
            </div>
          </div>
          <div className="vm-panel">
            <img
              src="https://besgroup.com/app/uploads/2025/05/shutterstock_2234086523-min-scaled.jpg"
              alt="Commercial EV Fleet"
              className="vm-image"
              loading="lazy"
            />
            <div className="vm-overlay"></div>
            <div className="vm-content">
              <span className="vm-eyebrow">
                <span className="vm-accent-mark"></span>
                {t('OUR MISSION')}
              </span>
              <p className="vm-text">{t('To be the trusted partner for businesses on their electric mobility journey.')}</p>
            </div>
          </div>
        </div>

        <style>{`
          .vision-mission-editorial {
            width: 100%;
            background-color: var(--surface-main);
          }
          
          .vm-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            max-width: 1440px;
            margin: 0 auto;
          }
          
          @media (min-width: 768px) {
            .vm-container {
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
            }
          }
          
          .vm-panel {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 340px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          
          @media (min-width: 1024px) {
            .vm-panel {
              height: 420px;
            }
          }
          
          .vm-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
          }
          
          .vm-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(14, 27, 61, 0.1) 0%, rgba(14, 27, 61, 0.5) 40%, rgba(14, 27, 61, 0.95) 100%);
            z-index: 2;
          }
          
          .vm-content {
            position: relative;
            z-index: 3;
            padding: 2rem;
            max-width: 95%;
          }
          
          @media (min-width: 1024px) {
            .vm-content {
              padding: 3rem;
              max-width: 85%;
            }
          }
          
          .vm-eyebrow {
            display: flex;
            align-items: center;
            color: #ffffff;
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
            text-transform: uppercase;
          }
          
          .vm-accent-mark {
            display: inline-block;
            width: 24px;
            height: 2px;
            background-color: var(--accent);
            margin-right: 12px;
          }
          
          .vm-text {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.125rem;
            line-height: 1.6;
            font-weight: 500;
            margin: 0;
          }
          
          @media (min-width: 1024px) {
            .vm-text {
              font-size: 1.375rem;
            }
          }
        `}</style>
      </section>

      {/* 5. Core Values (NEW) */}
      <section className="core-values section-spacing" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h2 style={{ color: '#ffffff' }}>{t('Our Core Values')}</h2>
        </div>
        <div className="features-grid container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
          <div className="card value-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h3 style={{ color: 'var(--accent)' }}>{t('Trusted Partnership')}</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }} dangerouslySetInnerHTML={{ __html: t("Trusted Partnership description") }}></p>
          </div>
          <div className="card value-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h3 style={{ color: 'var(--accent)' }}>{t('EV Expertise')}</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }} dangerouslySetInnerHTML={{ __html: t("EV Expertise description") }}></p>
          </div>
          <div className="card value-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h3 style={{ color: 'var(--accent)' }}>{t('Business Value')}</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }} dangerouslySetInnerHTML={{ __html: t("Business Value description") }}></p>
          </div>
          <div className="card value-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h3 style={{ color: 'var(--accent)' }}>{t('Long-Term Support')}</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }} dangerouslySetInnerHTML={{ __html: t("Long-Term Support description") }}></p>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="board-of-directors section-spacing">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--spacing-md)' }}>
          <div className="bod-header">
            <span className="eyebrow" style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
              {t('BOARD OF DIRECTORS')}
            </span>
            <h2 className="bod-headline" style={{ color: 'var(--primary)', marginBottom: '1.25rem', fontSize: '2rem', lineHeight: '1.2' }}>
              {t('Board of Directors')}
            </h2>
            <p className="bod-supporting-text" style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: '1.6', margin: '0', maxWidth: '720px' }}>
              {t('The Board of Directors provides strategic direction and oversees PrimeMobility’s operations to support stable, transparent, and sustainable growth.')}
            </p>
          </div>

          <div className="bod-grid">
            {boardOfDirectors.sort((a, b) => a.displayOrder - b.displayOrder).map((director) => (
              <div className="bod-card" key={director.id}>
                <div className="bod-image-wrapper">
                  <img
                    src={director.image}
                    alt={director.imageAlt}
                    className="bod-image"
                    loading="lazy"
                  />
                </div>
                <div className="bod-info">
                  <h3 className="bod-name">{director.name}</h3>
                  <p className="bod-position">{director.position}</p>
                  {director.representativeOf && (
                    <p className="bod-company">{director.representativeOf}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Biography Modal */}
        {selectedDirector && (
          <div
            className="bod-modal-overlay"
            onClick={() => setSelectedDirector(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-director-name"
          >
            <div className="bod-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="bod-modal-close"
                onClick={() => setSelectedDirector(null)}
                aria-label={t('Close biography')}
              >
                &times;
              </button>
              <div className="bod-modal-grid">
                <div className="bod-modal-image-col">
                  <img
                    src={selectedDirector.image}
                    alt=""
                    className="bod-modal-image"
                  />
                </div>
                <div className="bod-modal-info-col">
                  <h3 id="modal-director-name" className="bod-modal-name">{selectedDirector.name}</h3>
                  <p className="bod-modal-position">{selectedDirector.position}</p>
                  {selectedDirector.representativeOf && (
                    <p className="bod-modal-company">{selectedDirector.representativeOf}</p>
                  )}
                  <div className="bod-modal-bio">
                    {selectedDirector.biography}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          .board-of-directors {
            background-color: var(--surface-main);
            width: 100%;
          }
          .bod-header {
            margin-bottom: 3.5rem;
          }
          @media (min-width: 768px) {
            .bod-headline {
              font-size: 2.25rem !important;
            }
          }
          
          .bod-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem 1.5rem;
          }
          @media (min-width: 768px) {
            .bod-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .bod-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          
          .bod-card {
            display: flex;
            flex-direction: column;
            background: transparent;
            border: none;
          }
          
          .bod-image-wrapper {
            position: relative;
            width: 100%;
            aspect-ratio: 4/5;
            overflow: hidden;
            border-radius: var(--radius-sm);
            margin-bottom: 1.25rem;
            background-color: var(--surface-alt);
          }
          
          .bod-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
          }
          
          .bod-info {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding-top: 0.75rem;
            border-top: 1px solid var(--border-color);
          }
          
          .bod-name {
            font-size: 1.125rem;
            color: var(--primary);
            font-weight: 700;
            margin: 0 0 0.5rem 0;
            line-height: 1.3;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .bod-position {
            font-size: 0.95rem;
            color: var(--text-main);
            margin: 0 0 0.5rem 0;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .bod-company {
            font-size: 0.875rem;
            color: var(--text-muted);
            margin: 0 0 1rem 0;
            font-weight: 500;
          }
          
          /* Modal */
          .bod-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            backdrop-filter: blur(4px);
          }
          .bod-modal-content {
            background: #ffffff;
            border-radius: var(--radius-lg);
            width: 100%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 2rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          }
          .bod-modal-close {
            position: absolute;
            top: 1rem;
            right: 1.5rem;
            background: none;
            border: none;
            font-size: 2rem;
            line-height: 1;
            color: var(--text-muted);
            cursor: pointer;
            padding: 0.25rem;
          }
          .bod-modal-close:hover {
            color: var(--primary);
          }
          .bod-modal-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          @media (min-width: 768px) {
            .bod-modal-grid {
              grid-template-columns: 1fr 2fr;
            }
          }
          .bod-modal-image-col {
            width: 100%;
          }
          .bod-modal-image {
            width: 100%;
            aspect-ratio: 4/5;
            object-fit: cover;
            object-position: center top;
            border-radius: var(--radius-sm);
          }
          .bod-modal-name {
            font-size: 1.5rem;
            color: var(--primary);
            margin: 0 0 0.5rem 0;
            line-height: 1.2;
          }
          .bod-modal-position {
            font-size: 1.125rem;
            color: var(--text-main);
            margin: 0 0 0.25rem 0;
          }
          .bod-modal-company {
            font-size: 1rem;
            color: var(--accent);
            margin: 0 0 1.5rem 0;
            font-weight: 500;
          }
          .bod-modal-bio {
            color: var(--text-muted);
            font-size: 1rem;
            line-height: 1.7;
            white-space: pre-line;
          }
        `}</style>
      </section>

      {/* 6. Leadership Message */}
      <section className="leadership section-secondary" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
        <div className="leadership-container">
          <div className="ceo-profile">
            <img
              src="https://i.postimg.cc/PJVRGnrG/Image-721-683x1024.jpg"
              alt="Keishi Kinoshita, President and Chief Executive Officer of PrimeMobility"
              className="ceo-portrait"
              loading="lazy"
            />
            <div className="ceo-info">
              <strong>{t("Keishi Kinoshita")}</strong>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{t("President and Chief Executive Officer")}</p>
            </div>
          </div>

          <article className="ceo-message">
            <h2 style={{ marginBottom: 'var(--spacing-md)', color: '#ffffff' }}>{t('CEO Greeting')}</h2>

            <p dangerouslySetInnerHTML={{ __html: t('On behalf of <strong>Prime Mobility</strong>, I am deeply honored to welcome everyone to our <strong>EV Fleet Management System</strong>, a provider of <strong>comprehensive commercial electric vehicle fleet management solutions</strong> aimed at supporting organizations in their transition to efficient and sustainable transportation.') }} />
            <p dangerouslySetInnerHTML={{ __html: t('Today, the transportation industry is entering the era of electric vehicles and digital technology. We believe that the future of fleet management must be <strong>Smart, Connected, and Data-Driven</strong> to help organizations tangibly <strong>reduce operational costs, increase vehicle utilization efficiency, and reduce environmental impact</strong>.') }} />
            <p dangerouslySetInnerHTML={{ __html: t('With our solutions, comprising <strong>Telematics, Fleet Management Platform, and Data Analytics</strong>, we help customers track, analyze, and manage their fleets efficiently, while elevating decision-making with accurate and precise data.') }} />
            <p dangerouslySetInnerHTML={{ __html: t('<strong>Our vision is to be the leader in EV Fleet Management in Thailand</strong>, ready to drive the transition to clean, smart, and sustainable commercial transportation through innovation, technology, and excellent service.') }} />
            <p>
              Thank you all for your trust in Prime Mobility. We sincerely hope to be your partner in co-creating the future of efficient transportation, growing together sustainably.
            </p>
          </article>
        </div>
      </section>

      {/* 7. Our Journey (NEW) */}
      <section className="our-journey">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2>{t('Our Journey')}</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023</h3>
              <p>{t("Founded the company and began laying the foundation for the electric vehicle management system.")}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024</h3>
              <p>{t("Expanded services and partnered with leading industry allies.")}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2025</h3>
              <p>{t("Launched the full platform to support large fleets.")}</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <h3 style={{ color: 'var(--accent)' }}>{t('Future')}</h3>
              <p>{t("We are committed to expanding our collaboration network and introducing new technologies for a more sustainable future.")}</p>
            </div>
          </div>
        </div>
      </section>



      <StrategicInvestors />

      {/* 11. Partners (Replaced from Homepage) */}
      <Partners />


      {/* 12. Company Gallery (NEW) */}
      <section className="company-gallery section-spacing" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
        <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
          <h2 style={{ color: '#ffffff' }}>{t('Company Gallery')}</h2>
        </div>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office" loading="lazy" className="gallery-item" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" loading="lazy" className="gallery-item" />
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Operations" loading="lazy" className="gallery-item" />
          <img src="https://besgroup.com/app/uploads/2025/05/shutterstock_2234086523-min-scaled.jpg" alt="EV Fleet" loading="lazy" className="gallery-item" />
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meeting" loading="lazy" className="gallery-item" />
        </div>
      </section>

      {/* 13. FAQ (NEW) */}
      <Faq faqs={[
        { question: t("What business does PrimeMobility do?"), answer: t("We are a comprehensive provider of electric vehicle solutions (EV Fleet Management), from electric vehicle sourcing, charging station installation, insurance, to management software.") },
        { question: t("What industry groups do you support?"), answer: t("We provide services to a variety of industries, whether it's logistics, manufacturing, retail, construction, government agencies, or large private companies.") },
        { question: t("Where is your office located?"), answer: t("Our headquarters is located in Bangkok, and we have a network of partners to provide comprehensive services.") },
        { question: t("Do you provide nationwide service?"), answer: t("Yes, we have a team and a network of service centers ready to support customers and provide assistance covering all areas across Thailand.") },
        { question: t("Why choose PrimeMobility?"), answer: t("Because we are not just vehicle sellers, but a partner that provides consultation and comprehensive care to help reduce costs and sustainably increase efficiency for your business.") }
      ]} />

      {/* 14. Contact Form Section */}
      <ContactUs />
    </main>
  );
}
