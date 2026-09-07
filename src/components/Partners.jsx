import React from 'react';
import { useTranslation } from 'react-i18next';

// Import images
import bQuik from '../assets/partner/b-quik.png';
import banpunext from '../assets/partner/banpunext.png';
import chubb from '../assets/partner/chubb.png';
import cpFoton from '../assets/partner/cp-foton.png';
import farizon from '../assets/partner/farizon.png';
import jac from '../assets/partner/jac.png';
import muangthai from '../assets/partner/muangthai.png';
import onelink from '../assets/partner/onelink.png';
import panasonic from '../assets/partner/panasonic.png';
import panus from '../assets/partner/panus.png';
import plic from '../assets/partner/plic.png';
import ruehauf from '../assets/partner/ruehauf.png';
import sany from '../assets/partner/sany.png';
import tokyoMarine from '../assets/partner/tokyo-marine.png';
import xcmg from '../assets/partner/xcmg.png';

export default function Partners() {
  const { t } = useTranslation();
  
  const partners = [
    { name: 'B-Quik', img: bQuik },
    { name: 'Banpu NEXT', img: banpunext },
    { name: 'Chubb', img: chubb },
    { name: 'CP Foton', img: cpFoton },
    { name: 'Farizon', img: farizon },
    { name: 'JAC', img: jac },
    { name: 'Muang Thai', img: muangthai },
    { name: 'Onelink', img: onelink },
    { name: 'Panasonic', img: panasonic },
    { name: 'Panus', img: panus },
    { name: 'PLIC', img: plic },
    { name: 'Ruehauf', img: ruehauf },
    { name: 'SANY', img: sany },
    { name: 'Tokyo Marine', img: tokyoMarine },
    { name: 'XCMG', img: xcmg },
  ];

  const topRow = partners.slice(0, 8);
  const bottomRow = partners.slice(8);

  return (
    <section className="partners-section">
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <div className="text-center mb-lg">
          <h2 style={{ color: 'var(--primary)', marginBottom: '2.5rem' }}>
            {t("Our partners")}
          </h2>
        </div>
        
        {/* Top Row - Scrolls Left */}
        <div className="partner-marquee-container" style={{ marginBottom: '1.5rem' }}>
          <div className="partner-marquee">
            {topRow.map((partner, idx) => (
              <div key={idx} className="partner-logo-wrapper">
                <img src={partner.img} alt={partner.name} className="partner-logo" />
              </div>
            ))}
            {topRow.map((partner, idx) => (
              <div key={`dup-${idx}`} className="partner-logo-wrapper">
                <img src={partner.img} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Right */}
        <div className="partner-marquee-container">
          <div className="partner-marquee reverse">
            {bottomRow.map((partner, idx) => (
              <div key={idx} className="partner-logo-wrapper">
                <img src={partner.img} alt={partner.name} className="partner-logo" />
              </div>
            ))}
            {bottomRow.map((partner, idx) => (
              <div key={`dup-${idx}`} className="partner-logo-wrapper">
                <img src={partner.img} alt={partner.name} className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .partners-section {
          background-color: #ffffff;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }

        .partner-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .partner-marquee {
          display: flex;
          align-items: center;
          gap: 5rem;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .partner-marquee.reverse {
          animation-direction: reverse;
        }
        
        .partner-marquee:hover {
          animation-play-state: paused;
        }

        .partner-logo-wrapper {
          width: 140px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .partner-logo-wrapper:hover .partner-logo {
          transform: scale(1.1);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2.5rem)); /* -50% for duplicated set, minus half gap */
          }
        }
        
        @media (max-width: 768px) {
          .partner-logo-wrapper {
            width: 100px;
            height: 50px;
          }
          .partner-marquee {
            gap: 2.5rem;
            animation-duration: 25s;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 1.25rem)); 
            }
          }
        }
      `}</style>
    </section>
  );
}
