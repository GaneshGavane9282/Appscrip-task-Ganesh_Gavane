import { Icon } from "@/components/common/Icon/Icon";
import { HEADER_DATA } from "@/constants/constants";
import { memo, useCallback, useState } from "react";
import "./Header.css";

const Header = () => {
  const { navLinks, headerIcons } = HEADER_DATA;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className="navbar-container">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        {/* ---- Left ---- */}
        <div className="nav-left">
          {/* FIX: Removed {isMobileMenuOpen && ...} 
             The button must always exist, CSS will hide it on Desktop.
          */}
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* FIX: Use 'menu' icon, not 'logo' */}
            <Icon name="hamburgur" size={24} />
          </button>

          {/* Logo */}
          <div className="logo-icon">
            <Icon name="logo" size={28} />
          </div>
        </div>

        {/* ---- Center ---- */}
        <div className="nav-center">
          <a href="/" className="logo-text">
            LOGO
          </a>
        </div>

        {/* ---- Right ---- */}
        <div className="nav-right">
          {headerIcons.map(({ name, label }) => (
            <button key={name} className="icon-btn" aria-label={label}>
              <Icon name={name} size={24} />
            </button>
          ))}

          {/* Desktop Only Elements (Hidden on Mobile via CSS) */}
          <button className="icon-btn desktop-only" aria-label="Profile">
            <Icon name="profile" size={24} />
          </button>

          <div className="lang-selector desktop-only">
            ENG <Icon name="arrow" size={16} />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <div className="bottom-nav desktop-only">
        {navLinks.map(({ label, href }) => (
          <a key={href} href={"#"} className="nav-link">
            {label}
          </a>
        ))}
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {/* Only render overlay if open to save resources, or keep hidden via CSS */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          {/* FIX: Use 'close' icon (X), not 'logo' */}
          <Icon name="close" size={24} />
        </button>

        {navLinks.map(({ label, href }) => (
          <a key={href} href={href} className="mobile-link" onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default memo(Header);
