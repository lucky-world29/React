import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are imported
import "./Footer.css"; // Optional: Your custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <h5 className="footer-title">Footer Title</h5>
        <p className="footer-text">
          Some text about your website or contact details.
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/abinash.behera.9674227" className="icon-link" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://x.com/yoyoking9898" className="icon-link" aria-label="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.instagram.com/lucky_world29/?hl=en" className="icon-link" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="www.linkedin.com/in/abinashbehera9898" className="icon-link" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="footer-item">
          <i className="bi bi-geo-alt"></i>
          <span>Bhubaneswar, Odisha, India</span>
        </div>
        <div className="footer-item">
          <i className="bi bi-telephone"></i>
          <span>+91 9078715715</span>
        </div>
        <div className="footer-item">
          <i className="bi bi-envelope"></i>
          <a href="mailto:email@example.com">abinashbehera9898@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;