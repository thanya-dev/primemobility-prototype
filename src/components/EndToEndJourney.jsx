import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessagesSquare, ClipboardCheck, Truck, BatteryCharging, Wrench, ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function EndToEndJourney() {
  const { t } = useTranslation();

  const steps = [
    {
      num: 1,
      icon: <MessagesSquare size={36} />,
      title: 'Consult',
      description: 'Understand your needs and design the right solution',
    },
    {
      num: 2,
      icon: <ClipboardCheck size={36} />,
      title: 'Trial',
      description: 'Real-world testing for confidence',
    },
    {
      num: 3,
      icon: <Truck size={36} />,
      title: 'Lease',
      description: 'Flexible and scalable fleet leasing',
    },
    {
      num: 4,
      icon: <BatteryCharging size={36} />,
      title: 'Charge',
      description: 'Reliable charging infrastructure',
    },
    {
      num: 5,
      icon: <Wrench size={36} />,
      title: 'Maintain',
      description: 'Proactive service and support',
    },
    {
      num: 6,
      icon: <ChartNoAxesColumnIncreasing size={36} />,
      title: 'Manage',
      description: 'Data-driven operations with eFMS',
    },
  ];

  return (
    <section className="end-to-end-journey">
      <div className="container">
        {/* Header */}
        <div className="journey-header">
          <span className="eyebrow">{t('THE END-TO-END JOURNEY')}</span>
          <h2 className="journey-title">{t('Transition Process')}</h2>
          <p className="journey-description">
            {t('A seamless journey, with you at every step.')}
          </p>
        </div>

        {/* Journey Steps */}
        <div className="journey-wrapper">
          <div className="journey-grid">
            {steps.map((step, idx) => (
              <JourneyStep key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .end-to-end-journey {
          background-color: #ffffff;
          padding: 64px 1.25rem;
          overflow: hidden;
        }
        
        .end-to-end-journey .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .journey-header {
          text-align: left;
          max-width: 680px;
          margin-bottom: 48px;
        }

        .journey-header .eyebrow {
          color: #64748B;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .journey-title {
          color: #0E1B3D;
          margin: 0 0 1rem 0;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .journey-description {
          margin: 0;
          color: #475569;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        .journey-wrapper {
          position: relative;
        }

        .journey-grid {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .journey-step {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .journey-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .step-icon-wrapper {
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          background-color: #ffffff;
        }

        .step-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 2px solid #4DE08A;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4DE08A;
          transition: transform 0.3s ease;
        }
        
        .journey-step:hover .step-icon {
          transform: scale(1.05);
          background-color: #f0fdf4;
        }

        .step-content {
          padding-top: 0.5rem;
        }

        .step-title {
          color: #0E1B3D;
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .step-desc {
          color: #64748B;
          font-size: 0.875rem;
          margin: 0;
          line-height: 1.5;
        }

        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .end-to-end-journey {
            padding: 80px 1.5rem;
          }
          .journey-header {
            margin-bottom: 64px;
          }
          .journey-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            row-gap: 4rem;
            column-gap: 0;
          }
          .journey-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
            padding: 0 1rem;
          }
          .step-content {
            padding-top: 0;
          }
        }

        /* Desktop Layout */
        @media (min-width: 1024px) {
          .end-to-end-journey {
            padding: 96px 1.5rem;
          }
          .journey-header {
            margin-bottom: 64px;
          }
          .journey-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 0;
          }
          .journey-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
            padding: 0 0.5rem;
          }
          .step-content {
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  );
}

// Child component to handle individual intersection observer
function JourneyStep({ step, index }) {
  const { t } = useTranslation();
  const stepRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // On desktop/tablet, they might all appear at once. We can add a slight staggered delay based on index
          // if we want them to pop one by one from left to right even when they appear simultaneously on screen.
          setTimeout(() => {
            setIsVisible(true);
          }, (window.innerWidth >= 768 ? index * 100 : 0));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={stepRef}
      className={`journey-step ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="step-icon-wrapper">
        <div className="step-icon">
          {step.icon}
        </div>
      </div>
      <div className="step-content">
        <h3 className="step-title">{step.num}. {t(step.title)}</h3>
        <p className="step-desc">{t(step.description)}</p>
      </div>
    </div>
  );
}
