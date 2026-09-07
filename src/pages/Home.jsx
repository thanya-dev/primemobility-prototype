import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';
import WhyPrimeMobility from '../components/WhyPrimeMobility';
import EndToEndJourney from '../components/EndToEndJourney';
import ProductsAndServices from '../components/ProductsAndServices';
import ChargingNetwork from '../components/ChargingNetwork';
import StrategicInvestors from '../components/StrategicInvestors';
import Partners from '../components/Partners';
import truckImg from '../assets/truck.png';
import vanImg from '../assets/van.png';
import busImg from '../assets/bus.png';
import heroImg from '../assets/hero.png';
import heroMobileImg from '../assets/hero-mobile.png';
import { CircleDollarSign, Gauge, Leaf } from "lucide-react";
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
      quote: t("The system helps us manage our vehicle fleet much more easily. It truly saves time and costs."),
      author: t("Somchai Jaidee"),
      role: t("Transport Manager, Thai Logistics Co., Ltd."),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: t("The comprehensive service allowed us to transition to EV with confidence and seamlessly. The team takes great care of us."),
      author: t("Somying Keng-ngan"),
      role: t("Operations Director, Green Transport Corp."),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: t("We can track the vehicle status in real-time, and it clearly saves energy costs."),
      author: t("Wichai Rakchart"),
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
        <div className="hero-bg">
          <picture className="hero-img">
            <source media="(max-width: 767px)" srcSet={heroMobileImg} />
            <source media="(min-width: 768px)" srcSet={heroImg} />
            <img
              src={heroImg}
              alt={t("PrimeMobility commercial electric truck driving on a road in Bangkok")}
              className="hero-img"
            />
          </picture>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text-wrapper">
            <span className="hero-eyebrow">{t("END-TO-END COMMERCIAL EV FLEET SOLUTIONS")}</span>
            <h1>{t("Accelerate Your Business into a Sustainable Future")}</h1>
            <p>{t("Transform your business with end-to-end EV fleet solutions that reduce costs, improve efficiency, and enable cleaner mobility.")}</p>

            <div className="hero-benefits">
              <ul>
                <li>
                  <CircleDollarSign size={20} />
                  {t("Reduce operating costs")}
                </li>
                <li>
                  <Gauge size={20} />
                  {t("Improve fleet efficiency")}
                </li>
                <li>
                  <Leaf size={20} />
                  {t("Reduce carbon emissions")}
                </li>
              </ul>
            </div>

            <div className="hero-actions">
              <a href="https://primemobility.co.th/contact-2/" target="_blank" rel="noopener noreferrer" className="btn btn-accent">{t("Talk to Our Experts")}</a>
              <a href="https://primemobility.co.th/our-service/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{t("Explore Our Services")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Products & Services Section */}
      <ProductsAndServices />

      {/* Vehicle Slider Section */}
      <section className="vehicle-slider section-spacing" style={{ paddingBottom: '2rem', paddingLeft: 0, paddingRight: 0, overflow: 'hidden' }}>
        <div style={{ padding: '0 max(var(--spacing-md), calc((100% - 1224px) / 2))' }}>
          <div className="text-center mb-lg">
            <span className="eyebrow" style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem' }}>{t("OUR VEHICLE LINEUP")}</span>
            <h2>{t("Right Vehicle for Every Business")}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: t("Every business has different usage patterns. PrimeMobility helps select Commercial EVs suited to the operational characteristics, routes, and organizational goals, ensuring every fleet is ready for real-world use and creates long-term value for the business.") }} />
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
                title: 'Light Duty EV',
                subtitle: t("Agile for urban transportation\nCommercial EVs under 4.5 tons, covering Pick-ups and Light-duty Vehicles, suitable for Urban Logistics and Last-mile Delivery requiring transport agility."),
                image: truckImg
              },
              {
                category: t('Commercial EV'),
                title: 'Medium Duty EV',
                subtitle: t("Ready for every transport mission\nElectric trucks from 4.5 to 14.5 tons, supporting Regional transport and medium-sized goods, ideal for businesses looking to enhance daily transport efficiency."),
                image: vanImg
              },
              {
                category: t('Commercial EV'),
                title: 'Heavy Duty EV',
                subtitle: t("Drive heavy loads further\nElectric trucks from 15 to 50.5 tons, designed for Long-haul Transportation and high-volume cargo, supporting Heavy Duty logistics operations."),
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
                  <p style={{ color: 'rgba(255,255,255,0.95)', margin: '0.25rem 0 1.5rem 0', fontSize: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.3)', whiteSpace: 'pre-line' }}>{item.subtitle}</p>
                  {/* Buttons removed per user request */}
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={() => {
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

      {/* Charging Network Section */}
      <ChargingNetwork />

      {/* Why PrimeMobility Section */}
      <WhyPrimeMobility />

      {/* End-to-End Journey Section */}
      <EndToEndJourney />

      {/* Strategic Investors Section */}
      <StrategicInvestors />

      {/* 10. Latest Articles (NEW) */}
      <section className="articles section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Latest Articles & News</h2>
            <p>{t("Insights and news updates in the Commercial EV industry")}</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="article-card card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src="https://primemobility.co.th/wp-content/uploads/2026/04/Montri-and-PrimeMobility_%E8%A8%98%E5%BF%B5%E5%86%99%E7%9C%9F-1-1024x768.jpg" alt="Montri and PrimeMobility" style={{ width: '100%', height: '200px', objectFit: 'cover' }} loading="lazy" />
              <div className="article-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem' }}>PrimeMobility supports EV adoption for student bus services by Montri Transport Corporation PCL</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>
                  Aiming to promote the use of commercial electric vehicles through electric student transportation, PrimeMobility Co., Ltd. supports the transition to electric buses for school bus services of Montri Transport Corporation PCL.
                </p>
                <button className="btn-link" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>{t("Read More")}</button>
              </div>
            </article>
            <article className="article-card card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src="https://primemobility.co.th/wp-content/uploads/2025/10/FLS-1024x576.png" alt="Panasonic Partnership" style={{ width: '100%', height: '200px', objectFit: 'cover' }} loading="lazy" />
              <div className="article-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem' }}>PrimeMobility partners with Panasonic Holdings to launch commercial EV battery diagnostics service in Thailand</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>
                  PrimeMobility, in collaboration with Panasonic Holdings, prepares to launch an electric vehicle battery diagnostic service in Thailand by 2026. This service focuses on elevating the maintenance efficiency of commercial fleets.
                </p>
                <button className="btn-link" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>{t("Read More")}</button>
              </div>
            </article>
            <article className="article-card card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img src="https://primemobility.co.th/wp-content/uploads/2025/08/IMG_0360-scaled-e1756099927105-1024x369.jpeg" alt="EV Trucks for Airport" style={{ width: '100%', height: '200px', objectFit: 'cover' }} loading="lazy" />
              <div className="article-content" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem' }}>Delivery of 23 electric pickup trucks to major airports in Thailand to drive the "Green Airport" initiative</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>
                  PrimeMobility Co., Ltd. has delivered 23 electric pickup trucks under the RIDDARA brand to Airports of Thailand PCL to be used as security patrol vehicles around the runway.
                </p>
                <button className="btn-link" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>{t("Read More")}</button>
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
