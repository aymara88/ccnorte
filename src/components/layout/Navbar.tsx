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
    { label: "EVENTS", refName: "events" },
    { label: "INFORMATION", refName: "info" },
    { label: "SIGNUP", refName: "signup" },
    { label: "ROUTES", refName: "routes" },
    { label: "RESULTS", refName: "results" },
    { label: "CONTACT", refName: "contact" },
  ],
  languages = [
    { src: es, alt: 'Spanish', code: 'es' },
    { src: gl, alt: 'Galician', code: 'gl' },
  ],
}) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile(); // Check if the device is mobile

  // Function to handle scroll to a section
  const handleScroll = (refName: string) => {
    const section = document.getElementById(refName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu when an item is clicked on mobile
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to change language
  const changeLanguage = (langCode: string) => {
    console.log(langCode)
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
              className="navbar-image border"
              onClick={() => changeLanguage(language.code)}
            />
          ))}
        </div>}
      </div>

      {/* Menu Links */}
      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            <button className="link-button" onClick={() => handleScroll(link.refName)}>
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
              className="navbar-image border"
              onClick={() => changeLanguage(language.code)}
            />
          ))}
        </div>}

    </nav>
  );
};

export default Navbar;
