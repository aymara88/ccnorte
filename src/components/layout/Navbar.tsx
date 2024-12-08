import React, { useState } from "react";
import logo from "../../assets/logo.png";
import es from "../../assets/es.png";
import gl from "../../assets/gl.png";
import useIsMobile from '../hooks/useIsMobile'; // Import the custom hook

interface NavbarProps {
  links?: { label: string; refName: string }[];
  languages?: { src: string; alt: string }[];
}

const Navbar: React.FC<NavbarProps> = ({
  links = [
    { label: "EVENTOS", refName: "events" },
    { label: "INFORMACIÓN", refName: "info" },
    { label: "INSCRIPCIÓN", refName: "signup" },
    { label: "RECORRIDOS", refName: "routes" },
    { label: "RESULTADOS", refName: "results" },
    { label: "CONTACTAR", refName: "contact" },
  ],
  languages = [
    { src: es, alt: "Spanish" },
    { src: gl, alt: "Galician" },
  ],
}) => {
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
            />
          ))}
        </div>}
      </div>

      {/* Menu Links */}
      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            <button className="link-button" onClick={() => handleScroll(link.refName)}>
              {link.label}
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
              title={language.alt}
              className="navbar-image border"
            />
          ))}
        </div>}

    </nav>
  );
};

export default Navbar;
