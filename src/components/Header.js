import React, { useState, useRef } from 'react';
import styles from './Header.module.css'; // Import the CSS module
import logo from '../imgs/visiontech.png';
import SearchBar from "./SearchBar";

const Header = ({ title, links }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <SearchBar />
        <a href="/"><div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <h1 className={styles.title}>{title}</h1>
        </div></a>
        
        <nav className={styles.nav}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.name === 'Products' ? (
                <div
                  className={`${styles.navLink} ${styles.navLinkProducts}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.name}
                  <div
                    className={`${styles.dropdownContent} ${showDropdown ? styles.show : ''}`}
                    ref={dropdownRef}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {/* Dropdown options */}
                    <a href="/reichert">Reichert</a>
                    <a href="/haag-streit">Haag-Streit/Reliance</a>
                    <a href="/icare">iCare</a>
                    <a href="/s4optik">S4optik</a>
                    <a href="/huvitz">Huvitz</a>
                    <a href="/virtual-vision">Virtual Vision</a>
                    <a href="/eyefficient">Eyefficient</a>
                    <a href="/zeiss">Zeiss</a>
                    <a href="/marco">Marco</a>
                  </div>
                </div>
              ) : (
                <a href={link.href} className={styles.navLink}>
                  {link.name}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
