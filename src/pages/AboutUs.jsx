import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';
import { Link } from 'react-router-dom';


export default function AboutUs() {
  const { t } = useTranslation();
  const [activeWhyUs, setActiveWhyUs] = useState(0);

  const whyUsData = [
    {
      title: "Industry Expertise",
      desc: t("Deep understanding of the needs of modern businesses"),
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Experienced Team",
      desc: t("Ready to provide care and consultation 24/7"),
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Technology Driven",
      desc: t("Modern and easy-to-use software system"),
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sustainable Vision",
      desc: t("Firm commitment to environmental conservation"),
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customer Success",
      desc: t("We measure success by the smiles and growth of your business"),
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWhyUs(prev => (prev + 1) % whyUsData.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [whyUsData.length]);

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
        <div className="hero-content" style={{gridColumn: '1 / -1', textAlign: 'center'}}>
          <h1 style={{color: 'var(--text-inverse)'}}>About PrimeMobility</h1>
          <p style={{margin: '0 auto', maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)'}}>
            {t('Accelerating sustainable transportation through innovative software solutions')}
          </p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="company-overview">
        <div className="overview-container text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{marginBottom: 'var(--spacing-sm)'}}>Company Overview</h2>
          <p dangerouslySetInnerHTML={{ __html: t('Elevate efficiency, safety, and sustainable usage<br className="desktop-break" /> with a data-driven approach and promotion of clean energy') }} />
          <p dangerouslySetInnerHTML={{ __html: t('PrimeMobility Co., Ltd. is committed to being a key partner<br className="desktop-break" /> in delivering management solutions that meet all customer needs') }} />

        </div>
      </section>

      {/* 3. Company at a Glance (NEW) */}
      <section className="section-secondary statistics">
        <div className="text-center" style={{marginBottom: 'var(--spacing-md)'}}>
          <h2 style={{color: 'var(--accent)'}}>Company at a Glance</h2>
        </div>
        <div className="features-grid">
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>🏢 Company</h3>
            <p>{t("PrimeMobility Co., Ltd.")}</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>📍 Headquarters</h3>
            <p>{t("Bangkok, Thailand")}</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>🚗 Industry</h3>
            <p>{t("EV Fleet Management")}</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>💼 Business Type</h3>
            <p>{t("B2B Solution Provider")}</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>⚙️ Services</h3>
            <p>{t("Comprehensive EV Fleet Solutions")}</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>🌏 Operating Area</h3>
            <p>{t("Thailand")}</p>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="vision-mission">
        <div className="features-grid" style={{gap: 'var(--spacing-lg)'}}>
          <div className="card premium-card" style={{padding: 'var(--spacing-lg)', textAlign: 'center', alignItems: 'center'}}>
            <h2 style={{justifyContent: 'center', color: 'var(--accent)'}}>{t('Vision')}</h2>
            <p style={{fontSize: '1.25rem', marginTop: 'var(--spacing-sm)'}}>{t('Empowering fleets with innovative mobility solutions to drive a greener future.')}</p>
          </div>
          <div className="card premium-card" style={{padding: 'var(--spacing-lg)', textAlign: 'center', alignItems: 'center'}}>
            <h2 style={{justifyContent: 'center', color: 'var(--accent)'}}>{t('Mission')}</h2>
            <p style={{fontSize: '1.25rem', marginTop: 'var(--spacing-sm)'}}>{t('To be the trusted partner for businesses on their electric mobility journey.')}</p>
          </div>
        </div>
      </section>

      {/* 5. Core Values (NEW) */}
      <section className="core-values">
        <div className="text-center" style={{marginBottom: 'var(--spacing-md)'}}>
          <h2>Our Core Values</h2>
        </div>
        <div className="features-grid">
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Innovation</h3>
            <p style={{color: 'var(--text-muted)'}}>{t("Focused on creating new solutions to answer your business needs")}</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Sustainability</h3>
            <p style={{color: 'var(--text-muted)'}}>{t("Caring for the environment and supporting clean energy goals")}</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Customer First</h3>
            <p style={{color: 'var(--text-muted)'}}>{t("Providing service with care and prioritizing customer benefits")}</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Reliability</h3>
            <p style={{color: 'var(--text-muted)'}}>{t("Delivering services and technology you can always trust")}</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Partnership</h3>
            <p style={{color: 'var(--text-muted)'}}>{t("We grow steadily alongside the success of your business")}</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Excellence</h3>
            <p style={{color: 'var(--text-muted)'}}>{t("Committed to continuously developing the best service quality")}</p>
          </div>
        </div>
      </section>

      {/* 6. Leadership Message */}
      <section className="leadership section-secondary">
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
              <p>{t("President and Chief Executive Officer")}</p>
            </div>
          </div>
          
          <article className="ceo-message">
            <h2 style={{marginBottom: 'var(--spacing-md)'}}>CEO Greeting</h2>
            
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
        <div className="text-center" style={{marginBottom: 'var(--spacing-lg)'}}>
          <h2>Our Journey</h2>
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
              <h3 style={{ color: 'var(--accent)' }}>Future</h3>
              <p>{t("We are committed to expanding our collaboration network and introducing new technologies for a more sustainable future.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. What We Do (NEW) */}
      <section className="what-we-do section-secondary">
        <div className="text-center" style={{marginBottom: 'var(--spacing-md)'}}>
          <h2>What We Do</h2>
        </div>
        <div className="features-grid what-we-do-grid">
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3>{t("EV Fleet Management")}</h3>
            <p>{t("Comprehensive platform for managing and tracking electric vehicles.")}</p>
          </div>
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3>Mobility Solution</h3>
            <p>{t("Designing transportation systems suitable for each organization.")}</p>
          </div>
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3>Data & Technology</h3>
            <p>{t("Utilizing AI and Data Analytics for analysis and efficiency enhancement.")}</p>
          </div>
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </div>
            <h3>Sustainable Transportation</h3>
            <p>{t("Focusing on clean energy and reducing environmental impact.")}</p>
          </div>
        </div>
      </section>

      {/* 9. Why PrimeMobility (NEW) */}
      <section className="why-us">
        <div className="text-center" style={{marginBottom: 'var(--spacing-md)'}}>
          <h2>Why PrimeMobility</h2>
        </div>
        <div className="why-us-slider" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <div className="card trust-card" style={{ backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)', padding: 0, overflow: 'hidden', position: 'relative', minHeight: '400px' }}>
            
            {/* Sliding Track */}
            <div style={{ 
              display: 'flex', 
              width: '100%', 
              height: '100%', 
              transform: `translateX(-${activeWhyUs * 100}%)`, 
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
            }}>
              {whyUsData.map((item, idx) => (
                <div key={idx} className="why-us-slide" style={{ flex: '0 0 100%', display: 'flex' }}>
                  {/* Image Left */}
                  <div className="why-us-img-container">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  {/* Content Right */}
                  <div className="why-us-content">
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls - Absolute positioned over the content */}
            <div className="why-us-controls" style={{ position: 'absolute', zIndex: 10, display: 'flex' }}>
              <button 
                onClick={() => setActiveWhyUs(prev => prev === 0 ? whyUsData.length - 1 : prev - 1)}
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--border-color)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                &#8592;
              </button>
              <button 
                onClick={() => setActiveWhyUs(prev => (prev + 1) % whyUsData.length)}
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--primary)', background: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                &#8594;
              </button>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
            {whyUsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWhyUs(idx)}
                style={{
                  width: activeWhyUs === idx ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: activeWhyUs === idx ? 'var(--primary)' : 'var(--border-color)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* 11. Certifications / Partners (NEW) */}
      <section className="certifications section-secondary">
        <div className="text-center" style={{marginBottom: 'var(--spacing-md)'}}>
          <h2>Certifications & Partners</h2>
          <p>{t("Safety standards and partner networks we are proud of.")}</p>
        </div>
        <div className="logo-grid">
          <div className="logo-placeholder">Logo</div>
          <div className="logo-placeholder">Logo</div>
          <div className="logo-placeholder">Logo</div>
          <div className="logo-placeholder">Logo</div>
          <div className="logo-placeholder">Logo</div>
        </div>
      </section>

      {/* 12. Company Gallery (NEW) */}
      <section className="company-gallery">
        <div className="text-center" style={{marginBottom: 'var(--spacing-md)'}}>
          <h2>Company Gallery</h2>
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
