import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navigation() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll logic on mobile devices
      if (window.innerWidth >= 768) {
        if (!showMenu) setShowMenu(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setShowMenu(true);
      } else if (currentScrollY > lastScrollY) {
        setShowMenu(false); // Scroll down -> hide menu
      } else {
        setShowMenu(true); // Scroll up -> show menu
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showMenu]);

  return (
    <nav className="navbar mobile-nav">
      <div className="navbar-brand">
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
          <img 
            src="https://primemobility.co.th/wp-content/uploads/2025/03/PrimeMobility.png" 
            alt="PrimeMobility Logo" 
            style={{ height: '40px' }} 
          />
        </Link>
      </div>
      <div className={`nav-links mobile-${showMenu ? 'show' : 'hide'}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('Home')}</Link>
        <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>{t('About Us')}</Link>
        <a href="https://primemobility.co.th/en/our-service/">{t('Our Services')}</a>
        <a href="https://primemobility.co.th/en/articles/">{t('News & Articles')}</a>
        <a href="https://primemobility.co.th/contact-2/" target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{textDecoration: 'none'}}>{t('Get Started')}</a>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '1rem' }}>
          <button 
            onClick={() => i18n.changeLanguage('th')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: i18n.language === 'th' ? 'bold' : 'normal', color: i18n.language === 'th' ? 'var(--primary)' : 'var(--text-main)', padding: 0 }}
          >
            TH
          </button>
          <span>|</span>
          <button 
            onClick={() => i18n.changeLanguage('en')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: i18n.language === 'en' ? 'bold' : 'normal', color: i18n.language === 'en' ? 'var(--primary)' : 'var(--text-main)', padding: 0 }}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const { t } = useTranslation();
  
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-col-left">
              <a href="https://primemobility.co.th/">
                <img 
                  src="https://primemobility.co.th/wp-content/uploads/2025/03/PrimeMobility-WH.png" 
                  alt="PrimeMobility Logo" 
                  className="footer-logo"
                />
              </a>
              <div className="footer-address">
                {t('129 JLK Tower, 14th Floor, Room 1407, Sukhumvit Road, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand')}
              </div>
              <div className="footer-contact">
                <div className="contact-title">{t('Contact Us')}</div>
                <div className="contact-email">
                  <a href="mailto:sales@primemobility.co.th">sales@primemobility.co.th</a>
                </div>
              </div>
            </div>
            <div className="footer-col-right">
              <div className="footer-map">
                <iframe 
                  width="100%" 
                  height="100%" 
                  loading="lazy" 
                  src="https://maps.google.com/maps?q=JLK+Tower&t=m&z=12&output=embed&iwloc=near" 
                  title="JLK Tower"
                  style={{ border: 0, minHeight: '250px' }}
                ></iframe>
              </div>
              <div className="footer-copyright">
                © {new Date().getFullYear()}— Copyright
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
