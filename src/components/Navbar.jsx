import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getSiteInfo } from '../data';
import { useTranslation } from '../contexts/LanguageContext';

const Navbar = () => {
  const { name } = getSiteInfo();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-brand">
          <img 
            src="/logo.jpeg" 
            alt="ALPHA CLASSES Logo" 
            className="navbar-logo"
          />
          <div className="navbar-text">
            <span className="navbar-title">{name}</span>
            <span className="navbar-subtitle">{t('coachingInstitute')}</span>
          </div>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {t('home')}
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {t('about')}
          </NavLink>
          <NavLink to="/courses" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {t('courses')}
          </NavLink>
          <NavLink to="/testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {t('testimonials')}
          </NavLink>
          <NavLink to="/gallery" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {t('gallery')}
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {t('contact')}
          </NavLink>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
