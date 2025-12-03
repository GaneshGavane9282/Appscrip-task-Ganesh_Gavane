import { memo } from "react";
import { Icon } from "@/components/common/Icon/Icon";
import "./Footer.css";
import { FOOTER_DATA } from "@/constants/constants";

const Footer = () => {
  const { metaMuseLinks, paymentIcons, quickLinks, socialIcons } = FOOTER_DATA;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ================= TOP SECTION ================= */}
        <div className="footer-top">
          {/* ---- Subscribe Section ---- */}
          <div className="subscribe-section">
            <h4 className="footer-heading">Be the first to know</h4>
            <p className="subscribe-text">
              Sign up for updates from mettä muse.
            </p>

            <form
              className="subscribe-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="subscribe-input"
                aria-label="Email address"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>

          {/* ---- Contact & Currency ---- */}
          <div className="footer-info">
            <div className="contact-section">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-details">
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
            </div>

            <div className="currency-section">
              <h4 className="footer-heading">Currency</h4>
              <p className="currency-row">
                <Icon name="usa" size={24} /> <strong>• USD</strong>
              </p>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* ================= BOTTOM SECTION ================= */}
        <div className="footer-bottom">
          {/* ---- Column 1 ---- */}
          <div className="footer-column">
            <h3 className="footer-heading-lg">mettä muse</h3>
            <ul className="footer-links">
              {metaMuseLinks.map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 2 ---- */}
          <div className="footer-column">
            <h4 className="footer-heading-sm">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 3 ---- */}
          <div className="footer-column">
            <h4 className="footer-heading-sm">Follow Us</h4>
            <div className="social-icons">
              {socialIcons.map((icon) => (
                <div className="social-icon" key={icon}>
                  <Icon name={icon} size={24} />
                </div>
              ))}
            </div>

            <h4 className="footer-heading-sm">mettä muse Accepts</h4>
            <div className="payment-methods">
              {paymentIcons.map((icon) => (
                <div className="payment-icon" key={icon}>
                  <Icon name={icon} size={70} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="footer-copyright">
          Copyright © 2025 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
