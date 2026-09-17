import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactUs from '../components/ContactUs';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <main className="contact-page">
      <section
        className="hero"
        style={{
          minHeight: '40vh',
          background: `linear-gradient(rgba(14, 27, 61, 0.7), rgba(14, 27, 61, 0.7)), url('https://primemobility.co.th/wp-content/uploads/2025/03/IMAGE-2-1024x368.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--text-inverse)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="hero-content" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text-inverse)' }}>{t('Contact Us')}</h1>
        </div>
      </section>
      <ContactUs isContactPage={true} />
      <div id="brxe-mdiuxr" className="brxe-container" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div id="brxe-jrijww" data-script-id="jrijww" className="brxe-code" style={{ width: '100%' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.6293873923155!2d100.5552576!3d13.7408738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fcf5d3b1fd3%3A0x6b18aef85387fd06!2sJLK%20Tower!5e0!3m2!1sth!2sjp!4v1785220978294!5m2!1sth!2sjp" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
