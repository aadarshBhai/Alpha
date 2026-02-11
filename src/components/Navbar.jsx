import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getSiteInfo } from '../data';

const Navbar = () => {
  const { name } = getSiteInfo();
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
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-brand">
          <img 
            src="/logo.jpeg" 
            alt="ALPHA CLASSES Logo" 
            className="navbar-logo"
          />
          <div className="navbar-text">
            <span className="navbar-title">{name}</span>
            <span className="navbar-subtitle">Coaching Institute</span>
          </div>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/courses" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Courses
          </NavLink>
          <NavLink to="/testimonials" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Testimonials
          </NavLink>
          <NavLink to="/gallery" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className="nav-link nav-link-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
