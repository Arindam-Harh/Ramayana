import "./Footer.css";

export const Footer = () => {
  const version = "v1.1.5";

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Ramayana Project. All rights reserved.</p>
        <p className="footer-version">
          Version {version} • Last Updated: August 2026
        </p>
      </div>
    </footer>
  );
};