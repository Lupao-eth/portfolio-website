// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger and close icons

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const MOBILE_BREAKPOINT = 768;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen && window.scrollY > 10) {
        setIsMenuOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const defaultNavbarBg = theme === 'dark' ? '#2d3748' : '#f9f9f9';
  const scrolledNavbarBg = theme === 'dark' ? '#1a202c' : '#eaeaea';
  const iconColor = theme === 'dark' ? '#f9f9f9' : '#333333'; // White in dark mode, dark in light mode

  const handleClickScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? scrolledNavbarBg : defaultNavbarBg,
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
        transition: 'background-color 300ms ease-in-out, box-shadow 300ms ease-in-out',
        fontFamily: 'var(--font-geist-mono)',
        color: 'var(--text-color)',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem',
        }}
      >
        <a
          href="#Home1"
          onClick={(e) => handleClickScroll(e, 'Home1')}
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'inherit',
            zIndex: isMobile ? 60 : 'auto',
          }}
        >
          My Portfolio
        </a>

        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <FaTimes style={{ fontSize: '1.8rem', color: iconColor }} />
            ) : (
              <FaBars style={{ fontSize: '1.8rem', color: iconColor }} />
            )}
          </button>
        )}

        <div
          style={{
            display: isMobile ? 'none' : 'flex',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          <a href="#Home1" onClick={(e) => handleClickScroll(e, 'Home1')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
          <a href="#about1" onClick={(e) => handleClickScroll(e, 'about1')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
          <a href="#expko" onClick={(e) => handleClickScroll(e, 'expko')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>Experiences</a>
          <a href="#prokos" onClick={(e) => handleClickScroll(e, 'prokos')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
          <a href="#contact1" onClick={(e) => handleClickScroll(e, 'contact1')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>

          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: 'var(--dark-mode-toggle-color)',
              transition: 'color 0.2s ease',
              marginLeft: '1rem',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--dark-mode-toggle-hover-color)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--dark-mode-toggle-color)')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🔆' : '🌙'}
          </button>
        </div>
      </div>

      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: '4rem',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: scrolledNavbarBg,
            display: isMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            zIndex: 49,
            transition: 'opacity 0.3s ease-in-out',
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? 'auto' : 'none',
          }}
        >
          <a href="#Home1" onClick={(e) => handleClickScroll(e, 'Home1')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', padding: '0.5rem 0' }}>Home</a>
          <a href="#about1" onClick={(e) => handleClickScroll(e, 'about1')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', padding: '0.5rem 0' }}>About</a>
          <a href="#expko" onClick={(e) => handleClickScroll(e, 'expko')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', padding: '0.5rem 0' }}>Experiences</a>
          <a href="#prokos" onClick={(e) => handleClickScroll(e, 'prokos')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', padding: '0.5rem 0' }}>Projects</a>
          <a href="#contact1" onClick={(e) => handleClickScroll(e, 'contact1')} className="nav-link" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.5rem', padding: '0.5rem 0' }}>Contact</a>

          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '2rem',
              color: 'var(--dark-mode-toggle-color)',
              transition: 'color 0.2s ease',
              marginTop: '1rem',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--dark-mode-toggle-hover-color)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--dark-mode-toggle-color)')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🔆' : '🌙'}
          </button>
        </div>
      )}
    </nav>
  );
}