import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';
import truckImg from '../assets/truck.png';
import vanImg from '../assets/van.png';
import busImg from '../assets/bus.png';

export default function Home() {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeEvImage, setActiveEvImage] = useState(0);
  const [activeVehicleSlide, setActiveVehicleSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const card = sliderRef.current.children[1];
          const cardWidth = card ? card.offsetWidth + 16 : 300;
          sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSliderScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const card = e.target.children[1];
    const cardWidth = card ? card.offsetWidth + 16 : 300;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveVehicleSlide(newIndex);
  };



  const testimonials = [
    {
      quote: t(t("The system helps us manage our vehicle fleet much more easily. It truly saves time and costs.")),
      author: t(t("Somchai Jaidee")),
      role: t(t("Transport Manager, Thai Logistics Co., Ltd.")),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: t(t("The comprehensive service allowed us to transition to EV with confidence and seamlessly. The team takes great care of us.")),
      author: t(t("Somying Keng-ngan")),
      role: t(t("Operations Director, Green Transport Corp.")),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: t(t("We can track the vehicle status in real-time, and it clearly saves energy costs.")),
      author: t(t("Wichai Rakchart")),
      role: "CEO, Eco Delivery",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const evImages = [
    "https://primemobility.co.th/wp-content/uploads/2025/08/IMG_0360-scaled-e1756099927105-1024x369.jpeg",
    "https://primemobility.co.th/wp-content/uploads/2026/04/Montri-and-PrimeMobility_%E8%A8%98%E5%BF%B5%E5%86%99%E7%9C%9F-1-1024x768.jpg",
    "https://primemobility.co.th/wp-content/uploads/2026/06/PM-Truck-1024x576.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setActiveEvImage((prev) => (prev + 1) % evImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="homepage">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge" style={{marginBottom: '1rem'}}>PrimeMobility</div>
          <h1>
            <span style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.25rem' }}>Accelerate into the Future</span>
            <span dangerouslySetInnerHTML={{ __html: t('<span className="desktop-nowrap">Comprehensive EV Fleet</span><br className="desktop-break" /> that accelerates your business growth') }} />
          </h1>
          <p>
            An end-to-end EV fleet solution that helps accelerate your business growth.
          </p>
          <div className="hero-actions">
            <a href="https://primemobility.co.th/contact-2/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{textDecoration: 'none'}}>{t("Contact Us")}</a>
            <a href="https://primemobility.co.th/our-service/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{textDecoration: 'none'}}>{t("Our Services")}</a>
          </div>
          <div className="hero-trust">
            <small>{t("Trusted by leading organizations")}</small>
          </div>
        </div>
      </section>

      {/* Vehicle Slider Section */}
      <section className="vehicle-slider section-spacing" style={{ paddingBottom: '2rem', paddingLeft: 0, paddingRight: 0, overflow: 'hidden' }}>
        <div style={{ padding: '0 max(var(--spacing-md), calc((100% - 1224px) / 2))' }}>
          <div className="text-center mb-lg">
            <h2>Our Products</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: t('Because every business has different needs, we offer leasing solutions that help your business invest cost-effectively,<br />reduce costs, and be ready to grow into the future.') }} />
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%' }}>
          <div 
            ref={sliderRef}
            onScroll={handleSliderScroll}
            className="slider-track" 
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              overflowX: 'auto', 
              scrollSnapType: 'x mandatory',
              paddingBottom: '1rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>{`
              .slider-track {
                padding: 0;
              }
              .slider-track::-webkit-scrollbar { display: none; }
              .vehicle-slide-card {
                flex: 0 0 calc(85% - 0.5rem);
                aspect-ratio: 3 / 4;
                min-height: 480px;
                max-height: 75vh;
                border-radius: var(--radius-lg);
                scroll-snap-align: start;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 2.5rem;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              }
              @media (min-width: 768px) {
                .vehicle-slide-card {
                  flex: 0 0 calc(75% - 0.75rem);
                  aspect-ratio: 16 / 9;
                  min-height: 560px;
                  max-height: 80vh;
                }
              }
              .vehicle-slide-bg {
                position: absolute;
                inset: 0;
                background-size: cover;
                background-position: center;
                transition: transform 0.5s ease;
              }
              .vehicle-slide-card:hover .vehicle-slide-bg {
                transform: scale(1.05);
              }
              .vehicle-slide-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%);
              }
              .vehicle-content {
                position: relative;
                z-index: 2;
                color: white;
              }
            `}</style>
            
            {[
              {
                category: t('Commercial EV'),
                title: 'EV Truck',
                subtitle: t('Covering everything from pickup trucks and light trucks to large trailer heads, answering the needs of long-distance transportation nationwide.'),
                image: truckImg
              },
              {
                category: t('Commercial EV'),
                title: 'EV Van',
                subtitle: t('Commercial electric vans that answer every business goal, whether as corporate shuttle vehicles or for transportation business.'),
                image: vanImg
              },
              {
                category: t('Commercial EV'),
                title: 'EV Bus',
                subtitle: t('Transform corporate shuttle benefits into benefits for the planet with electric buses. Answers the needs of reducing fuel costs, enhancing image, and promoting sustainability.'),
                image: busImg
              }
            ].map((item, idx) => (
              <div key={idx} className="vehicle-slide-card">
                <div className="vehicle-slide-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="vehicle-slide-overlay"></div>
                
                <div style={{ position: 'absolute', top: '1.5rem', left: '2.5rem', color: 'rgba(255,255,255,0.95)', fontSize: '0.875rem', fontWeight: '500', zIndex: 2 }}>
                  {item.category}
                </div>
                
                <div className="vehicle-content">
                  <h2 style={{ color: 'white', margin: 0, fontSize: '2.5rem', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{item.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.95)', margin: '0.25rem 0 1.5rem 0', fontSize: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{item.subtitle}</p>
                  {/* Buttons removed per user request */}
                </div>
              </div>
            ))}
          </div>
          
          {/* Next Arrow */}
          <button 
            onClick={() => {
              if (sliderRef.current) {
                const card = sliderRef.current.children[1];
                const cardWidth = card ? card.offsetWidth + 16 : 300;
                sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
              }
            }}
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: '#333'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          
          {/* Pagination Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {[0, 1, 2].map((idx) => (
              <button 
                key={idx}
                onClick={() => {
                  if (sliderRef.current) {
                    const card = sliderRef.current.children[1];
                    const cardWidth = card ? card.offsetWidth + 16 : 300;
                    sliderRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
                    setActiveVehicleSlide(idx);
                  }
                }}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', padding: 0,
                  backgroundColor: activeVehicleSlide === idx ? '#333' : '#cbd5e1',
                  border: 'none', cursor: 'pointer', transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="company-intro section-spacing" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="mb-lg" style={{ textAlign: 'center' }}>
            <div className="badge" style={{marginBottom: '1rem', backgroundColor: 'rgba(77, 224, 138, 0.1)', color: 'var(--primary)', display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '600'}}>All-in-One Service</div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>EV Fleet Solutions for Modern Businesses</h2>
            <p className="intro-text" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              PrimeMobility offers comprehensive services in a single package for maximum convenience and efficiency for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>EV Sourcing & Rental</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>{t("A wide variety of EV options to meet every usage need")}</p>
            </article>
            
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>Insurance & Maintenance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>{t("Comprehensive care for peace of mind throughout the contract period")}</p>
            </article>
            
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>Charging Equipment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>{t("Ready to install and provide consultation on charging stations")}</p>
            </article>
            
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>Fleet Management System</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>{t("Smart software for tracking and analyzing data in real-time")}</p>
            </article>
          </div>
        </div>
      </section>


      {/* 4. Why EV Fleet Management (NEW) */}
      <section className="why-ev section-spacing">
        <div className="container split-layout">
          <div className="image-wrapper" style={{position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)'}}>
            {evImages.map((imgUrl, idx) => (
              <img 
                key={idx} 
                src={imgUrl} 
                alt={`EV fleet showcase ${idx + 1}`} 
                loading="lazy" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: activeEvImage === idx ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  zIndex: activeEvImage === idx ? 1 : 0
                }} 
              />
            ))}
            <div className="slider-dots" style={{position: 'absolute', bottom: '1.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 2}}>
               {evImages.map((_, idx) => (
                 <button 
                   key={idx} 
                   onClick={() => setActiveEvImage(idx)}
                   style={{
                     width: '12px', height: '12px', borderRadius: '50%', border: 'none', 
                     backgroundColor: activeEvImage === idx ? 'var(--primary)' : 'rgba(255,255,255,0.7)',
                     cursor: 'pointer', transition: 'background-color 0.3s', padding: 0,
                     boxShadow: '0 0 4px rgba(0,0,0,0.4)'
                   }} 
                 />
               ))}
            </div>
          </div>
          <div className="content-wrapper">
            <h2>Why Choose Our EV Fleet Management System</h2>
            <div className="benefit-list">
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Reduce Operational Costs</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{t("Save on energy and maintenance costs in the long term.")}</p>
                </div>
              </div>
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Increase Operational Efficiency</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{t("Manage routes and vehicle utilization for maximum cost-effectiveness.")}</p>
                </div>
              </div>
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Drive Sustainability</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{t("Reduce carbon emissions and achieve environmental goals.")}</p>
                </div>
              </div>
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Smart Tracking System</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{t("Check vehicle and battery status in real-time 24/7.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Services */}
      <section className="services section-secondary section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2 style={{color: 'var(--text-inverse)'}}>All Services</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.7)'}}>{t("Comprehensive solutions and services designed for your EV fleet system.")}</p>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>EV Sourcing and Leasing</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>{t("PrimeMobility provides electric vehicle leasing with a wide variety of models, not limited to any specific manufacturer or model. From passenger cars to trucks from all over the world, to meet all your business needs.")}</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>Read More <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>EV Charger and Installation Services</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>{t("PrimeMobility is ready to provide consultation on choosing the right quantity and brand of chargers for your needs, and also provides installation services by a team of experts.")}</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>Read More <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>Insurance and Maintenance Services</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>{t("PrimeMobility cares about your safety, so we offer comprehensive insurance and regular vehicle maintenance services to ensure that every electric vehicle is always in a ready-to-use and safe condition.")}</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>Read More <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>EV Fleet Management System Services</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>{t("Elevate your business operations with our EV fleet management system that will help you manage vehicles efficiently, reduce costs, and increase productivity.")}</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>Read More <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Why Choose PrimeMobility (NEW) */}
      <section className="why-choose section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Why Choose PrimeMobility</h2>
            <p>{t("Our commitment to excellence makes us a trusted partner for modern fleet systems.")}</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="card trust-card">
              <h3>End-to-End Solutions</h3>
              <p>{t("Turnkey services from vehicle sourcing to software systems.")}</p>
            </article>
            <article className="card trust-card">
              <h3>Expert Team</h3>
              <p>{t("Experienced team ready to provide consultation and care for you.")}</p>
            </article>
            <article className="card trust-card">
              <h3>Flexible Options</h3>
              <p>{t("Packages can be customized to suit your business needs.")}</p>
            </article>
            <article className="card trust-card">
              <h3>Smart Technology</h3>
              <p>{t("Use cutting-edge software to manage and track your vehicles.")}</p>
            </article>
            <article className="card trust-card">
              <h3>Reliable Services</h3>
              <p>{t("Support team available throughout usage, ready to solve problems quickly.")}</p>
            </article>
            <article className="card trust-card">
              <h3>Drive Towards Sustainability</h3>
              <p>{t("Helps reduce carbon footprint and build a good image for the organization.")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* 7. How It Works (NEW) */}
      <section className="how-it-works section-secondary section-spacing">
        <div className="container text-center">
          <h2 className="mb-lg">Our Process</h2>
          <div className="timeline-horizontal">
            <div className="step">
              <div className="step-circle">1</div>
              <h3>Consultation</h3>
              <p>{t("Our team analyzes your business needs and pain points.")}</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">2</div>
              <h3>Planning</h3>
              <p>{t("Design solutions and select suitable EV models.")}</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">3</div>
              <h3>Implementation</h3>
              <p>{t("Deliver vehicles, install equipment, and set up software systems.")}</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">4</div>
              <h3>Monitoring</h3>
              <p>{t("Care and monitor status through a real-time system.")}</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">5</div>
              <h3>Optimization</h3>
              <p>{t("Analyze data to continuously reduce costs.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="testimonials section-spacing">
        <div className="container text-center">
          <h2>Testimonials</h2>
          <p className="mb-lg">{t("Feedback and real experiences from our customers.")}</p>
          <div className="testimonial-slider" style={{position: 'relative', minHeight: '280px', overflow: 'hidden'}}>
            {testimonials.map((t, idx) => (
              <article 
                key={idx} 
                className="testimonial-card card"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  opacity: activeTestimonial === idx ? 1 : 0,
                  transform: activeTestimonial === idx ? 'translateX(0)' : (idx < activeTestimonial ? 'translateX(-30px)' : 'translateX(30px)'),
                  transition: 'all 0.5s ease-in-out',
                  pointerEvents: activeTestimonial === idx ? 'auto' : 'none',
                  zIndex: activeTestimonial === idx ? 2 : 1
                }}
              >
                <p className="quote">"{t.quote}"</p>
                <div className="author" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                  <img src={t.avatar} alt={t.author} style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} loading="lazy" />
                  <div style={{textAlign: 'left'}}>
                    <strong style={{color: 'var(--text-main)'}}>{t.author}</strong>
                    <span style={{display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)'}}>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="slider-dots" style={{display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem'}}>
             {testimonials.map((_, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setActiveTestimonial(idx)}
                 style={{
                   width: '12px', height: '12px', borderRadius: '50%', border: 'none', 
                   backgroundColor: activeTestimonial === idx ? 'var(--primary)' : 'rgba(0,0,0,0.2)',
                   cursor: 'pointer', transition: 'background-color 0.3s', padding: 0
                 }} 
               />
             ))}
          </div>
        </div>
      </section>

      {/* 9. Featured Industries (NEW) */}
      <section className="industries section-secondary section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Industries We Serve</h2>
            <p>{t("Customizable electric vehicle solutions for various business sectors.")}</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3>Logistics & Transportation</h3>
              <p>{t("Elevate distribution with energy-efficient electric trucks.")}</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2v16Z"></path></svg>
              </div>
              <h3>Manufacturing</h3>
              <p>{t("Internal and external factory transportation systems that help reduce costs.")}</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </div>
              <h3>Retail & E-commerce</h3>
              <p>{t("Fast and eco-friendly customer delivery services.")}</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 22 7 12 2"></polygon><rect x="4" y="7" width="16" height="15"></rect></svg>
              </div>
              <h3>Construction</h3>
              <p>{t("Commercial vehicles for construction sites that require toughness and durability.")}</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 10 22 10"></polygon><line x1="6" y1="10" x2="6" y2="18"></line><line x1="18" y1="10" x2="18" y2="18"></line><line x1="12" y1="10" x2="12" y2="18"></line><line x1="2" y1="18" x2="22" y2="18"></line><line x1="2" y1="22" x2="22" y2="22"></line></svg>
              </div>
              <h3>Government Agencies</h3>
              <p>{t("Drive projects and policies with comprehensive electric vehicles.")}</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3>Large Enterprises</h3>
              <p>{t("Position and pool car solutions to answer ESG goals.")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* 10. Latest Articles (NEW) */}
      <section className="articles section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Latest Articles & News</h2>
            <p>{t("Insights and news updates in the Commercial EV industry")}</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="article-card card" style={{padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <img src="https://primemobility.co.th/wp-content/uploads/2026/04/Montri-and-PrimeMobility_%E8%A8%98%E5%BF%B5%E5%86%99%E7%9C%9F-1-1024x768.jpg" alt="Montri and PrimeMobility" style={{width: '100%', height: '200px', objectFit: 'cover'}} loading="lazy" />
              <div className="article-content" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <h3 style={{marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem'}}>PrimeMobility supports EV adoption for student bus services by Montri Transport Corporation PCL</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1}}>
                  Aiming to promote the use of commercial electric vehicles through electric student transportation, PrimeMobility Co., Ltd. supports the transition to electric buses for school bus services of Montri Transport Corporation PCL.
                </p>
                <button className="btn-link" style={{alignSelf: 'flex-start', marginTop: 'auto'}}>{t("Read More")}</button>
              </div>
            </article>
            <article className="article-card card" style={{padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <img src="https://primemobility.co.th/wp-content/uploads/2025/10/FLS-1024x576.png" alt="Panasonic Partnership" style={{width: '100%', height: '200px', objectFit: 'cover'}} loading="lazy" />
              <div className="article-content" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <h3 style={{marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem'}}>PrimeMobility partners with Panasonic Holdings to launch commercial EV battery diagnostics service in Thailand</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1}}>
                  PrimeMobility, in collaboration with Panasonic Holdings, prepares to launch an electric vehicle battery diagnostic service in Thailand by 2026. This service focuses on elevating the maintenance efficiency of commercial fleets.
                </p>
                <button className="btn-link" style={{alignSelf: 'flex-start', marginTop: 'auto'}}>{t("Read More")}</button>
              </div>
            </article>
            <article className="article-card card" style={{padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <img src="https://primemobility.co.th/wp-content/uploads/2025/08/IMG_0360-scaled-e1756099927105-1024x369.jpeg" alt="EV Trucks for Airport" style={{width: '100%', height: '200px', objectFit: 'cover'}} loading="lazy" />
              <div className="article-content" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <h3 style={{marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem'}}>Delivery of 23 electric pickup trucks to major airports in Thailand to drive the "Green Airport" initiative</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1}}>
                  PrimeMobility Co., Ltd. has delivered 23 electric pickup trucks under the RIDDARA brand to Airports of Thailand PCL to be used as security patrol vehicles around the runway.
                </p>
                <button className="btn-link" style={{alignSelf: 'flex-start', marginTop: 'auto'}}>{t("Read More")}</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 11. FAQ (NEW) */}
      <Faq faqs={[
        { question: t("What is an EV Fleet Management System?"), answer: t("EV Fleet Management is a platform that allows businesses to track, manage, and optimize the use of electric vehicles comprehensively, including driving data, battery status, and costs.") },
        { question: t("What services does PrimeMobility provide?"), answer: t("We provide end-to-end services, from commercial EV sourcing, insurance and maintenance, charging station installation, to smart fleet management software.") },
        { question: t("How to get started?"), answer: t("You can click 'Contact Us' for a free consultation. Our team of experts will assess your needs and propose the best solution for your business.") },
        { question: t("Is your service available nationwide?"), answer: t("Yes, we have a strong network of service centers and partners ready to assist your business nationwide.") }
      ]} />

      {/* 12. Contact Form Section */}
      <ContactUs />
    </main>
  );
}
