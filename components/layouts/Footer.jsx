import "./Footer.css";

export const Footer = () => {
  const version = "v1.1.5";

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 All rights reserved. Made by Arindam with Devotion.</p>
        <p className="footer-version">
          Version {version} • Last Updated: August 2026
        </p>
      </div>
    </footer>
  );
};