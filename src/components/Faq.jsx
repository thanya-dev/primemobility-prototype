import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`faq-item custom-accordion ${isOpen ? 'open' : ''}`}>
      <div className="faq-summary" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      <div className="faq-content-wrapper" style={{ 
        display: 'grid', 
        gridTemplateRows: isOpen ? '1fr' : '0fr', 
        transition: 'grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
      }}>
        <div style={{ overflow: 'hidden' }}>
          <p className="faq-content" style={{ marginTop: 'var(--spacing-sm)', marginBottom: 0, color: 'var(--text-muted)' }}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faq({ faqs }) {
  return (
    <section className="faq-section section-spacing">
      <div className="container">
        <div className="text-center mb-lg">
          <h2>FAQ</h2>
        </div>
        <div className="faq-list" style={{maxWidth: '800px', margin: '0 auto'}}>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
