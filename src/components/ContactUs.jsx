import React from 'react';

function ContactUs() {
  return (
    <section className="contact-section section-spacing section-secondary" id="contact">
      <div className="container" style={{ maxWidth: '1224px', margin: '0 auto' }}>
        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          {/* Contact Info (Left) */}
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h2>Contact Us</h2>
              <img 
                src="https://primemobility.co.th/wp-content/uploads/2025/03/PrimeMobility-WH.png" 
                alt="PrimeMobility Logo" 
                style={{ maxWidth: '250px', marginTop: '1.5rem', display: 'block' }}
                loading="lazy" 
              />
            </div>
            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Customer Service</h3>
              <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>080-056-1568</p>
            </div>
            
            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>PrimeMobility Co., Ltd.</h3>
              <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                129 อาคารเจแอลเคทาวเวอร์ ชั้นที่ 14 ห้อง 1407 ถนนสุขุมวิท คลองเตยเหนือ วัฒนา กรุงเทพมหานคร 10110 ประเทศไทย
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Sales Inquiry</h3>
              <p style={{ margin: 0, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>sales@primemobility.co.th</p>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="contact-form-container card" style={{ padding: '2.5rem', backgroundColor: 'var(--surface-alt)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--primary)' }}>Get in Touch</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              กรุณากรอกแบบฟอร์มด้านล่าง หรือติดต่อเราทางโทรศัพท์หรืออีเมล<br/>
              เรายินดีเป็นอย่างยิ่งหากท่านสามารถระบุข้อมูลต่อไปนี้ในแบบฟอร์มสอบถามของท่าน
            </p>
            
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <input type="text" placeholder="ชื่อบริษัท *" required style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-main)', width: '100%', fontFamily: 'inherit' }} />
              <input type="text" placeholder="ชื่อผู้ติดต่อ *" required style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-main)', width: '100%', fontFamily: 'inherit' }} />
              <input type="text" placeholder="แผนก *" required style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-main)', width: '100%', fontFamily: 'inherit' }} />
              <input type="email" placeholder="ที่อยู่อีเมล *" required style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-main)', width: '100%', fontFamily: 'inherit' }} />
              <input type="tel" placeholder="หมายเลขโทรศัพท์ *" required style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-main)', width: '100%', fontFamily: 'inherit' }} />
              <textarea placeholder="รายละเอียดการสอบถาม *" required rows="5" style={{ padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-main)', width: '100%', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
              
              <div className="checkbox-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.5rem' }}>
                <input type="checkbox" id="privacy-policy" required style={{ marginTop: '0.3rem', width: '1rem', height: '1rem', cursor: 'pointer' }} />
                <label htmlFor="privacy-policy" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', cursor: 'pointer', lineHeight: 1.5 }}>
                  ข้าพเจ้าได้อ่านและยอมรับข้อกำหนดและเงื่อนไขใน <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>นโยบายความเป็นส่วนตัว</a> แล้ว
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                <span>ส่งข้อมูล</span>
                <svg version="1.1" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" strokeLinejoin="round"><path d="M0.927,10.199l2.787,4.151l3.205,-3.838"></path><path d="M23.5,14.5l-2.786,-4.15l-3.206,3.838"></path><path d="M20.677,10.387c0.834,4.408 -2.273,8.729 -6.509,9.729c-2.954,0.699 -5.916,-0.238 -7.931,-2.224"></path><path d="M3.719,14.325c-1.314,-4.883 1.969,-9.675 6.538,-10.753c3.156,-0.747 6.316,0.372 8.324,2.641"></path></g></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
