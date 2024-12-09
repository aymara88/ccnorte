import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import useIsMobile from '../hooks/useIsMobile'; // Custom hook for device detection

import logo from "../../assets/logo.png";
import es from "../../assets/es.png";
import gl from "../../assets/gl.png";

interface NavbarProps {
  links?: { label: string; refName: string }[];
  languages?: { src: string; alt: string; code: string }[];
}

const Navbar: React.FC<NavbarProps> = ({
  links = [
    { label: 'EVENTS', url: '/events' }, // Scroll to section
    { label: 'INFORMATION', url: '/info' }, // Scroll to section
    { label: 'SIGNUP', refName: 'signup' }, // External link
    { label: 'ROUTES', refName: 'routes' }, // Scroll to section
    { label: 'RESULTS', url: '/results' }, // External link
    { label: 'CONTACT', refName: 'contact' }, // Scroll to section
  ],
  languages = [
    { src: es, alt: 'Spanish', code: 'es' },
    { src: gl, alt: 'Galician', code: 'gl' },
  ],
}) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(es);

  const isMobile = useIsMobile(); // Check if the device is mobile

  const handleAction = (link: typeof links[number]) => {
    if (link.refName) {
      const section = document.getElementById(link.refName);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close menu for mobile
      }
    } else if (link.url) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to change language
  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode)
    i18n.changeLanguage(langCode);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
      <div className="navbar-header">
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Logo */}
        <img src={logo} alt="Website Logo" className="logo" onClick={scrollToTop} />
        {isMobile && <div className="navbar-languages">
          {languages.map((language, index) => (
            <img
              key={index}
              src={language.src}
              alt={`${language.alt} Flag`}
              className={`navbar-image ${currentLanguage === language.code ? 'selected' : ''}`}
              onClick={() => changeLanguage(language.code)}
            />
          ))}
        </div>}
      </div>

      {/* Menu Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <button
              className={`link-button ${link.url ? 'external' : ''}`}
              onClick={() => handleAction(link)}
            >
              {t(link.label)}
            </button>
          </li>
        ))}
      </ul>

      {!isMobile &&
        <div className="navbar-languages">
          {languages.map((language, index) => (
            <img
              key={index}
              src={language.src}
              alt={`${language.alt} Flag`}
              title={t(language.alt)}
              className={`navbar-image ${currentLanguage === language.code ? 'selected' : ''}`}
              onClick={() => changeLanguage(language.code)}
            />
          ))}
        </div>}

    </nav>
  );
};

export default Navbar;
