import React, { useState, useEffect } from 'react';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeEvImage, setActiveEvImage] = useState(0);



  const testimonials = [
    {
      quote: "ระบบช่วยให้เราจัดการฟลีทรถได้ง่ายขึ้นมาก ประหยัดเวลาและค่าใช้จ่ายได้จริง",
      author: "คุณสมชาย ใจดี",
      role: "ผู้จัดการฝ่ายขนส่ง, บริษัท โลจิสติกส์ ไทย จำกัด",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "การบริการที่ครบวงจรทำให้เราเปลี่ยนผ่านไปสู่ EV ได้อย่างมั่นใจ ไร้รอยต่อ ทีมงานดูแลดีมาก",
      author: "คุณสมหญิง เก่งงาน",
      role: "ผู้อำนวยการฝ่ายปฏิบัติการ, Green Transport Corp.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "เราสามารถติดตามสถานะรถได้แบบเรียลไทม์ และยังประหยัดต้นทุนพลังงานได้อย่างชัดเจน",
      author: "คุณวิชัย รักชาติ",
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
          <div className="badge" style={{marginBottom: '1rem'}}>EV Fleet Management</div>
          <h1><span className="desktop-nowrap">PrimeMobility EV Fleet ครบวงจร</span><br className="desktop-break" /> ที่เร่งการเติบโตของธุรกิจของคุณ</h1>
          <p>
            An end-to-end EV fleet solution that helps accelerate your business growth.
          </p>
          <div className="hero-actions">
            <a href="https://primemobility.co.th/contact-2/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{textDecoration: 'none'}}>Contact Us</a>
            <a href="https://primemobility.co.th/our-service/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{textDecoration: 'none'}}>Our Services</a>
          </div>
          <div className="hero-trust">
            <small>ได้รับความไว้วางใจจากองค์กรชั้นนำ</small>
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
              PrimeMobility นำเสนอบริการแบบครบวงจรในแพ็กเกจเดียว เพื่อความสะดวกและประสิทธิภาพสูงสุดสำหรับธุรกิจของคุณ
            </p>
          </div>
          
          <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>EV Sourcing & Rental</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>ตัวเลือกรถ EV ที่หลากหลาย ตอบโจทย์ทุกการใช้งาน</p>
            </article>
            
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>Insurance & Maintenance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>ดูแลครบวงจรเพื่อความอุ่นใจตลอดอายุสัญญา</p>
            </article>
            
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>Charging Equipment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>พร้อมติดตั้งและให้คำปรึกษาเรื่องสถานีชาร์จ</p>
            </article>
            
            <article className="card" style={{ backgroundColor: '#FFFFFF', color: 'var(--text-main)', textAlign: 'center', padding: '2.5rem 1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <div className="icon-wrapper" style={{ margin: '0 auto 1.25rem auto', borderRadius: '50%', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(77, 224, 138, 0.15)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{width: '32px', height: '32px'}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700', justifyContent: 'center' }}>Fleet Management System</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>ซอฟต์แวร์อัจฉริยะ ติดตามและวิเคราะห์ข้อมูลแบบเรียลไทม์</p>
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
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>ประหยัดค่าใช้จ่ายด้านพลังงานและการซ่อมบำรุงในระยะยาว</p>
                </div>
              </div>
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Increase Operational Efficiency</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>บริหารจัดการเส้นทางและการใช้งานรถได้อย่างคุ้มค่าสูงสุด</p>
                </div>
              </div>
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Drive Sustainability</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>ลดการปล่อยก๊าซคาร์บอนและบรรลุเป้าหมายด้านสิ่งแวดล้อม</p>
                </div>
              </div>
              <div className="benefit-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--primary)', fontSize: '1.125rem' }}>Smart Tracking System</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>ตรวจสอบสถานะรถและแบตเตอรี่ได้แบบเรียลไทม์ตลอด 24 ชั่วโมง</p>
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
            <p style={{color: 'rgba(255, 255, 255, 0.7)'}}>โซลูชันและบริการแบบครบวงจรที่ออกแบบมาเพื่อระบบฟลีท EV ของคุณ</p>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '1.5rem' }}>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>EV Sourcing and Leasing</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>PrimeMobility ให้บริการเช่ารถยนต์ไฟฟ้าที่มีตัวเลือกรุ่นหลากหลาย ไม่จำกัดเฉพาะผู้ผลิตหรือรุ่นใดรุ่นหนึ่ง ไม่ว่าจะเป็นรถยนต์นั่งส่วนบุคคลไปจนถึงรถบรรทุก จากทุกประเทศทั่วโลก เพื่อตอบสนองทุกความต้องการของธุรกิจคุณ</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>อ่านเพิ่มเติม <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>EV Charger and Installation Services</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>PrimeMobility พร้อมให้คำปรึกษาในการเลือกจำนวนและยี่ห้อของเครื่องชาร์จที่เหมาะสมกับความต้องการของคุณ และยังให้บริการติดตั้งโดยทีมงานผู้เชี่ยวชาญ</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>อ่านเพิ่มเติม <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>Insurance and Maintenance Services</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>PrimeMobility ใส่ใจในความปลอดภัยของคุณ จึงมีบริการประกันภัยที่ครอบคลุม และการบำรุงรักษารถยนต์เป็นประจำ เพื่อให้คุณมั่นใจได้ว่ารถยนต์ไฟฟ้าทุกคันอยู่ในสภาพพร้อมใช้งานและปลอดภัยเสมอ</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>อ่านเพิ่มเติม <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
            <article className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{width: '28px', height: '28px'}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-inverse)', lineHeight: '1.4' }}>EV Fleet Management System Services</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>ยกระดับการดำเนินงานของธุรกิจคุณด้วยระบบบริหารจัดการยานยนต์ไฟฟ้าของเรา ที่จะช่วยให้คุณบริหารจัดการยานพาหนะได้อย่างมีประสิทธิภาพ ลดต้นทุน และเพิ่มผลผลิต</p>
              <button className="btn-link" style={{ alignSelf: 'flex-start', color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 0, textDecoration: 'none' }}>อ่านเพิ่มเติม <span style={{fontSize: '1.2rem'}}>&rarr;</span></button>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Why Choose PrimeMobility (NEW) */}
      <section className="why-choose section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Why Choose PrimeMobility</h2>
            <p>ความมุ่งมั่นในความเป็นเลิศทำให้เราเป็นพันธมิตรที่ได้รับความไว้วางใจสำหรับระบบฟลีทสมัยใหม่</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="card trust-card">
              <h3>End-to-End Solutions</h3>
              <p>บริการแบบเบ็ดเสร็จตั้งแต่จัดหารถไปจนถึงระบบซอฟต์แวร์</p>
            </article>
            <article className="card trust-card">
              <h3>Expert Team</h3>
              <p>ทีมงานมากประสบการณ์ที่พร้อมให้คำปรึกษาและดูแลคุณ</p>
            </article>
            <article className="card trust-card">
              <h3>Flexible Options</h3>
              <p>สามารถปรับแต่งแพ็กเกจให้เข้ากับความต้องการของธุรกิจคุณ</p>
            </article>
            <article className="card trust-card">
              <h3>Smart Technology</h3>
              <p>ใช้ซอฟต์แวร์ล้ำสมัยในการจัดการและติดตามรถของคุณ</p>
            </article>
            <article className="card trust-card">
              <h3>Reliable Services</h3>
              <p>มีทีมสนับสนุนตลอดการใช้งาน พร้อมแก้ไขปัญหาอย่างรวดเร็ว</p>
            </article>
            <article className="card trust-card">
              <h3>Drive Towards Sustainability</h3>
              <p>ช่วยลดคาร์บอนฟุตพริ้นท์และสร้างภาพลักษณ์ที่ดีให้องค์กร</p>
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
              <p>ทีมงานวิเคราะห์ความต้องการและปัญหาของธุรกิจ</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">2</div>
              <h3>Planning</h3>
              <p>ออกแบบโซลูชันและเลือกรถ EV ที่เหมาะสม</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">3</div>
              <h3>Implementation</h3>
              <p>ส่งมอบรถ ติดตั้งอุปกรณ์ และวางระบบซอฟต์แวร์</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">4</div>
              <h3>Monitoring</h3>
              <p>ดูแลและมอนิเตอร์สถานะผ่านระบบเรียลไทม์</p>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-circle">5</div>
              <h3>Optimization</h3>
              <p>วิเคราะห์ข้อมูลเพื่อลดต้นทุนอย่างต่อเนื่อง</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="testimonials section-spacing">
        <div className="container text-center">
          <h2>Testimonials</h2>
          <p className="mb-lg">เสียงตอบรับและประสบการณ์จริงจากลูกค้าของเรา</p>
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
            <p>โซลูชันยานยนต์ไฟฟ้าที่ปรับแต่งได้สำหรับหลากหลายภาคธุรกิจ</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3>Logistics & Transportation</h3>
              <p>ยกระดับการกระจายสินค้าด้วยรถบรรทุกไฟฟ้าที่ประหยัดพลังงาน</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2v16Z"></path></svg>
              </div>
              <h3>Manufacturing</h3>
              <p>ระบบขนส่งภายในและภายนอกโรงงานที่ช่วยลดต้นทุน</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </div>
              <h3>Retail & E-commerce</h3>
              <p>บริการจัดส่งสินค้าถึงมือลูกค้าที่รวดเร็วและเป็นมิตรกับสิ่งแวดล้อม</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 22 7 12 2"></polygon><rect x="4" y="7" width="16" height="15"></rect></svg>
              </div>
              <h3>Construction</h3>
              <p>รถเชิงพาณิชย์สำหรับไซต์งานก่อสร้างที่ต้องการความทรหดทนทาน</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 10 22 10"></polygon><line x1="6" y1="10" x2="6" y2="18"></line><line x1="18" y1="10" x2="18" y2="18"></line><line x1="12" y1="10" x2="12" y2="18"></line><line x1="2" y1="18" x2="22" y2="18"></line><line x1="2" y1="22" x2="22" y2="22"></line></svg>
              </div>
              <h3>Government Agencies</h3>
              <p>ขับเคลื่อนโครงการและนโยบายด้วยยานยนต์ไฟฟ้าแบบครบวงจร</p>
            </article>
            <article className="card industry-card">
              <div className="icon-wrapper" style={{ borderRadius: '50%', backgroundColor: 'var(--surface-alt)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h3>Large Enterprises</h3>
              <p>โซลูชันรถประจำตำแหน่งและรถส่วนกลางเพื่อตอบโจทย์ ESG</p>
            </article>
          </div>
        </div>
      </section>

      {/* 10. Latest Articles (NEW) */}
      <section className="articles section-spacing">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Latest Articles & News</h2>
            <p>ข้อมูลเชิงลึกและอัปเดตข่าวสารในแวดวงยานยนต์ไฟฟ้าเชิงพาณิชย์</p>
          </div>
          <div className="grid grid-cols-3">
            <article className="article-card card" style={{padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <img src="https://primemobility.co.th/wp-content/uploads/2026/04/Montri-and-PrimeMobility_%E8%A8%98%E5%BF%B5%E5%86%99%E7%9C%9F-1-1024x768.jpg" alt="Montri and PrimeMobility" style={{width: '100%', height: '200px', objectFit: 'cover'}} loading="lazy" />
              <div className="article-content" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <h3 style={{marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem'}}>PrimeMobility supports EV adoption for student bus services by Montri Transport Corporation PCL</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1}}>
                  มุ่งส่งเสริมการใช้รถยนต์ไฟฟ้าเชิงพาณิชย์ผ่านการขนส่งนักเรียนด้วยพลังงานไฟฟ้า บริษัท ไพร์มโมบิลิตี้ จำกัด สนับสนุนการเปลี่ยนมาใช้รถบัสไฟฟ้าในการให้บริการรถโรงเรียนของบริษัท มนตรีทรานสปอร์ต คอร์ปอเรชั่น จำกัด (มหาชน)
                </p>
                <button className="btn-link" style={{alignSelf: 'flex-start', marginTop: 'auto'}}>อ่านเพิ่มเติม</button>
              </div>
            </article>
            <article className="article-card card" style={{padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <img src="https://primemobility.co.th/wp-content/uploads/2025/10/FLS-1024x576.png" alt="Panasonic Partnership" style={{width: '100%', height: '200px', objectFit: 'cover'}} loading="lazy" />
              <div className="article-content" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <h3 style={{marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem'}}>PrimeMobility partners with Panasonic Holdings to launch commercial EV battery diagnostics service in Thailand</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1}}>
                  ไพร์มโมบิลิตี้ ร่วมกับ พานาโซนิค โฮลดิ้งส์ เตรียมเปิดตัวบริการตรวจวินิจฉัยแบตเตอรี่รถยนต์ไฟฟ้า ในประเทศไทยภายในปี 2026 บริการนี้มุ่งเน้นการยกระดับประสิทธิภาพการบำรุงรักษารถฟลีทเชิงพาณิชย์
                </p>
                <button className="btn-link" style={{alignSelf: 'flex-start', marginTop: 'auto'}}>อ่านเพิ่มเติม</button>
              </div>
            </article>
            <article className="article-card card" style={{padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <img src="https://primemobility.co.th/wp-content/uploads/2025/08/IMG_0360-scaled-e1756099927105-1024x369.jpeg" alt="EV Trucks for Airport" style={{width: '100%', height: '200px', objectFit: 'cover'}} loading="lazy" />
              <div className="article-content" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                <h3 style={{marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1.125rem'}}>Delivery of 23 electric pickup trucks to major airports in Thailand to drive the "Green Airport" initiative</h3>
                <p style={{color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1}}>
                  บริษัท ไพร์มโมบิลิตี้ จำกัด ได้ส่งมอบรถกระบะไฟฟ้า จำนวน 23 คัน ภายใต้แบรนด์ RIDDARA ให้กับบริษัท ท่าอากาศยานไทย จำกัด (มหาชน) เพื่อใช้เป็นรถรักษาความปลอดภัยสำหรับตรวจการณ์บริเวณรันเวย์
                </p>
                <button className="btn-link" style={{alignSelf: 'flex-start', marginTop: 'auto'}}>อ่านเพิ่มเติม</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 11. FAQ (NEW) */}
      <Faq faqs={[
        { question: "What is an EV Fleet Management System?", answer: "EV Fleet Management is a platform that allows businesses to track, manage, and optimize the use of electric vehicles comprehensively, including driving data, battery status, and costs." },
        { question: "What services does PrimeMobility provide?", answer: "We provide end-to-end services, from commercial EV sourcing, insurance and maintenance, charging station installation, to smart fleet management software." },
        { question: "How to get started?", answer: "You can click 'Contact Us' for a free consultation. Our team of experts will assess your needs and propose the best solution for your business." },
        { question: "Is your service available nationwide?", answer: "Yes, we have a strong network of service centers and partners ready to assist your business nationwide." }
      ]} />

      {/* 12. Contact Form Section */}
      <ContactUs />
    </main>
  );
}
