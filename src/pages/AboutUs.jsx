import React, { useState, useEffect } from 'react';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';
import { Link } from 'react-router-dom';


export default function AboutUs() {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [activeWhyUs, setActiveWhyUs] = useState(0);

  const whyUsData = [
    {
      title: "Industry Expertise",
      desc: "เข้าใจลึกซึ้งถึงความต้องการของธุรกิจยุคใหม่",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Experienced Team",
      desc: "พร้อมดูแลและให้คำปรึกษาตลอด 24 ชั่วโมง",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Technology Driven",
      desc: "ระบบซอฟต์แวร์ที่ทันสมัยและใช้งานง่าย",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sustainable Vision",
      desc: "พันธกิจที่แน่วแน่ในการอนุรักษ์สิ่งแวดล้อม",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customer Success",
      desc: "เราวัดผลความสำเร็จจากรอยยิ้มและการเติบโตของธุรกิจคุณ",
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
            เรามุ่งมั่นที่จะเร่งการเปลี่ยนผ่านสู่ระบบขนส่งที่ยั่งยืนด้วยนวัตกรรมและโซลูชันซอฟต์แวร์ที่ล้ำสมัย
          </p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="company-overview">
        <div className="overview-container text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{marginBottom: 'var(--spacing-sm)'}}>Company Overview</h2>
          <p>
            ยกระดับประสิทธิภาพ ความปลอดภัย และการใช้งานอย่างยั่งยืน<br className="desktop-break" /> ด้วยแนวทางการขับเคลื่อนด้วยข้อมูลและส่งเสริมการใช้พลังงานสะอาด
          </p>
          <p>
            บริษัท ไพร์มโมบิลิตี้ จำกัดมุ่งมั่นที่จะเป็นพันธมิตรหลัก<br className="desktop-break" /> ในการมอบโซลูชันการบริหารจัดการที่ตอบโจทย์ทุกความต้องการของลูกค้า
          </p>

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
            <p>บริษัท ไพร์มโมบิลิตี้ จำกัด</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>📍 Headquarters</h3>
            <p>กรุงเทพมหานคร ประเทศไทย</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>🚗 Industry</h3>
            <p>การบริหารจัดการ EV Fleet</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>💼 Business Type</h3>
            <p>ผู้ให้บริการโซลูชันแบบ B2B</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>⚙️ Services</h3>
            <p>โซลูชัน EV Fleet แบบครบวงจร</p>
          </div>
          <div className="card text-center" style={{alignItems: 'center'}}>
            <h3 style={{justifyContent: 'center'}}>🌏 Operating Area</h3>
            <p>ประเทศไทย</p>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="vision-mission">
        <div className="features-grid" style={{gap: 'var(--spacing-lg)'}}>
          <div className="card premium-card" style={{padding: 'var(--spacing-lg)', textAlign: 'center', alignItems: 'center'}}>
            <h2 style={{justifyContent: 'center', color: 'var(--accent)'}}>Vision</h2>
            <p style={{fontSize: '1.25rem', marginTop: 'var(--spacing-sm)'}}>Empowering fleets with innovative mobility solutions to drive a greener future.</p>
          </div>
          <div className="card premium-card" style={{padding: 'var(--spacing-lg)', textAlign: 'center', alignItems: 'center'}}>
            <h2 style={{justifyContent: 'center', color: 'var(--accent)'}}>Mission</h2>
            <p style={{fontSize: '1.25rem', marginTop: 'var(--spacing-sm)'}}>To be the trusted partner for businesses on their electric mobility journey.</p>
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
            <p style={{color: 'var(--text-muted)'}}>มุ่งเน้นการสร้างสรรค์โซลูชันใหม่ๆ เพื่อตอบโจทย์ธุรกิจของคุณ</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Sustainability</h3>
            <p style={{color: 'var(--text-muted)'}}>ใส่ใจสิ่งแวดล้อมและสนับสนุนเป้าหมายพลังงานสะอาด</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Customer First</h3>
            <p style={{color: 'var(--text-muted)'}}>ให้บริการด้วยความใส่ใจและยึดถือผลประโยชน์ของลูกค้าเป็นหลัก</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Reliability</h3>
            <p style={{color: 'var(--text-muted)'}}>ส่งมอบบริการและเทคโนโลยีที่คุณสามารถไว้วางใจได้เสมอ</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Partnership</h3>
            <p style={{color: 'var(--text-muted)'}}>เราเติบโตไปพร้อมกับความสำเร็จของธุรกิจคุณอย่างมั่นคง</p>
          </div>
          <div className="card value-card" style={{backgroundColor: 'var(--surface-alt)', color: 'var(--text-main)'}}>
            <h3 style={{color: 'var(--primary)'}}>Excellence</h3>
            <p style={{color: 'var(--text-muted)'}}>มุ่งมั่นพัฒนาคุณภาพการบริการให้ดีที่สุดอย่างต่อเนื่อง</p>
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
              <strong>เคอิชิ คิโนชิตะ</strong>
              <p>ประธานและประธานเจ้าหน้าที่บริหาร</p>
            </div>
          </div>
          
          <article className="ceo-message">
            <h2 style={{marginBottom: 'var(--spacing-md)'}}>CEO Greeting</h2>
            
            <h3 style={{marginBottom: 'var(--spacing-xs)'}}>Introduction</h3>
            <p>
              ในนามของ ไพร์มโมบิลิตี้ เรามุ่งมั่นในการให้บริการบริหารจัดการกองทัพยานยนต์ไฟฟ้าเชิงพาณิชย์ในประเทศไทย ผมรู้สึกเป็นเกียรติอย่างยิ่งที่ได้ต้อนรับทุกท่านสู่ EV Fleet Management System ของเรา
            </p>
            <p>
              ในโลกที่กำลังเปลี่ยนผ่านไปสู่การขนส่งที่ยั่งยืนอย่างรวดเร็ว เรายืนหยัดเป็นแนวหน้าของการปฏิวัติการขับเคลื่อนสีเขียวในประเทศไทย พันธกิจของเราไม่ได้จำกัดอยู่เพียงแค่การบริหารจัดการกองทัพยานยนต์ แต่เราเป็นผู้จุดประกายการเปลี่ยนแปลงด้านสิ่งแวดล้อม ประสิทธิภาพทางเศรษฐกิจ และความก้าวหน้าทางเทคโนโลยีในภาคยานยนต์เชิงพาณิชย์
            </p>
  
            <div className={`read-more-section ${isReadMoreOpen ? 'open' : ''}`}>
              <div 
                className="read-more-btn" 
                onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                style={{ cursor: 'pointer', color: 'var(--accent)', fontWeight: 600 }}
              >
                Read More / อ่านเพิ่มเติม {isReadMoreOpen ? '▲' : '▼'}
              </div>
              <div className="read-more-wrapper" style={{ 
                display: 'grid', 
                gridTemplateRows: isReadMoreOpen ? '1fr' : '0fr', 
                transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div className="read-more-content" style={{marginTop: 'var(--spacing-sm)'}}>
                    <h3 style={{marginBottom: 'var(--spacing-xs)', marginTop: 'var(--spacing-sm)'}}>Our Commitment</h3>
                    <p>
                      เราเชื่อว่าอนาคตของการขนส่งไม่ได้เป็นเพียงแค่ระบบไฟฟ้า แต่ยังต้องชาญฉลาด เชื่อมต่อ และได้รับการปรับปรุงให้มีประสิทธิภาพสูงสุด ด้วยโซลูชันการบริหารจัดการกองทัพยานยนต์แบบครบวงจรของเรา เราช่วยให้ธุรกิจต่างๆ ลดผลกระทบต่อสิ่งแวดล้อม ควบคู่ไปกับการยกระดับประสิทธิภาพการดำเนินงานและลดต้นทุนการเป็นเจ้าของโดยรวม
                    </p>
                    <p>
                      การเดินทางของเราเริ่มต้นด้วยวิสัยทัศน์ที่เรียบง่าย นั่นคือการเร่งการเปลี่ยนผ่านของประเทศไทยไปสู่การขนส่งเชิงพาณิชย์ที่ยั่งยืน วันนี้ วิสัยทัศน์นั้นขับเคลื่อนทุกสิ่งที่เราทำ ตั้งแต่ระบบ Telematics ที่ทันสมัย ไปจนถึงกลยุทธ์การเพิ่มประสิทธิภาพด้วยข้อมูล และการสนับสนุนลูกค้าอย่างทุ่มเทของเรา
                    </p>
      
                    <h3 style={{marginBottom: 'var(--spacing-xs)', marginTop: 'var(--spacing-sm)'}}>Future Vision</h3>
                    <p>
                      ในขณะที่เราก้าวไปข้างหน้าบนเส้นทางที่น่าตื่นเต้นนี้ เราขอเชิญชวนท่านเข้าร่วมกับเราในการกำหนดนิยามใหม่ของความเป็นไปได้ในการดำเนินงานกองทัพยานยนต์เชิงพาณิชย์ ร่วมกัน เราสามารถสร้างอนาคตที่สะอาดกว่า มีประสิทธิภาพมากขึ้น และมั่งคั่งยิ่งขึ้นสำหรับประเทศไทยและ beyond
                    </p>
                    <p>
                      ขอขอบคุณทุกท่านที่ให้ความสนใจในบริษัทของเรา เราหวังเป็นอย่างยิ่งที่จะได้เป็นส่วนหนึ่งในการขับเคลื่อนการเดินทางของท่านสู่ความเป็นเลิศด้านยานยนต์ไฟฟ้าที่ยั่งยืน
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              <p>ก่อตั้งบริษัท และเริ่มวางรากฐานระบบบริหารจัดการยานพาหนะไฟฟ้า</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024</h3>
              <p>ขยายการให้บริการ และจับมือกับพันธมิตรชั้นนำในอุตสาหกรรม</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2025</h3>
              <p>เปิดตัวแพลตฟอร์มเต็มรูปแบบ เพื่อรองรับฟลีทขนาดใหญ่</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <h3 style={{ color: 'var(--accent)' }}>Future</h3>
              <p>เรามุ่งมั่นที่จะขยายเครือข่ายความร่วมมือ และนำเสนอเทคโนโลยีใหม่ๆ เพื่ออนาคตที่ยั่งยืนยิ่งขึ้น</p>
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
            <h3>EV Fleet Management</h3>
            <p>แพลตฟอร์มครบวงจรสำหรับจัดการและติดตามรถยนต์ไฟฟ้า</p>
          </div>
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3>Mobility Solution</h3>
            <p>ออกแบบระบบขนส่งที่เหมาะสมกับแต่ละองค์กร</p>
          </div>
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3>Data & Technology</h3>
            <p>ใช้ AI และ Data Analytics ในการวิเคราะห์และเพิ่มประสิทธิภาพ</p>
          </div>
          <div className="card">
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(77, 224, 138, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </div>
            <h3>Sustainable Transportation</h3>
            <p>มุ่งเน้นพลังงานสะอาดและลดผลกระทบต่อสิ่งแวดล้อม</p>
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
                <div key={idx} style={{ flex: '0 0 100%', display: 'flex', flexDirection: 'row' }}>
                  {/* Image Left */}
                  <div style={{ flex: '1 1 50%' }}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  {/* Content Right */}
                  <div style={{ flex: '1 1 50%', padding: '4rem 3rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls - Absolute positioned over the content */}
            <div style={{ position: 'absolute', bottom: '2rem', right: '3rem', display: 'flex', gap: '1rem', zIndex: 10 }}>
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
          <p>มาตรฐานความปลอดภัยและเครือข่ายพันธมิตรที่เราภาคภูมิใจ</p>
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
        { question: "PrimeMobility ทำธุรกิจเกี่ยวกับอะไร?", answer: "เราคือผู้ให้บริการโซลูชันด้านยานพาหนะไฟฟ้า (EV Fleet Management) แบบครบวงจร ตั้งแต่การจัดหารถยนต์ไฟฟ้า การติดตั้งสถานีชาร์จ ประกันภัย และซอฟต์แวร์บริหารจัดการ" },
        { question: "รองรับลูกค้าในกลุ่มอุตสาหกรรมใดบ้าง?", answer: "เราให้บริการกับหลากหลายอุตสาหกรรม ไม่ว่าจะเป็น โลจิสติกส์, ภาคการผลิต, ค้าปลีก, ก่อสร้าง, หน่วยงานรัฐบาล และบริษัทเอกชนขนาดใหญ่" },
        { question: "สำนักงานของคุณตั้งอยู่ที่ไหน?", answer: "สำนักงานใหญ่ของเราตั้งอยู่ในกรุงเทพมหานคร และเรามีเครือข่ายพันธมิตรเพื่อให้บริการที่ครอบคลุม" },
        { question: "คุณให้บริการครอบคลุมทั่วประเทศหรือไม่?", answer: "ใช่ครับ เรามีทีมงานและเครือข่ายศูนย์บริการที่พร้อมรองรับลูกค้าและให้ความช่วยเหลือครอบคลุมทุกพื้นที่ทั่วประเทศไทย" },
        { question: "ทำไมต้องเลือก PrimeMobility?", answer: "เพราะเราไม่ใช่แค่ผู้จำหน่ายรถยนต์ แต่เป็นพาร์ทเนอร์ที่ให้คำปรึกษาและดูแลคุณอย่างครบวงจร เพื่อช่วยลดต้นทุนและเพิ่มประสิทธิภาพให้กับธุรกิจของคุณอย่างยั่งยืน" }
      ]} />

      {/* 14. Contact Form Section */}
      <ContactUs />
    </main>
  );
}
