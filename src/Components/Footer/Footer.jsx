import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div
          style={{
            maxWidth: "450px",
          }}
          className="footer-column"
        >
          <h3>About EduTech India</h3>
          <p>
            EduTech India is dedicated to providing top-notch education and
            skills development in technology fields. Our mission is to empower
            individuals with the knowledge and skills they need to succeed in
            today's competitive job market.
          </p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <span>
              {" "}
              <strong>Email:</strong> callmemaster9617@gmail.com
              <br />
            </span>
            <span>
              <strong>Phone:</strong> +91 961 703 6226
            </span>
            <span>
         <br/>
              <strong>Address:</strong> Ramanuj Nagar, Gwalior, India
            </span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{
            fontSize: "1.5rem",
            fontFamily: "var(--Extra-Font)"
        }}>&copy; 2024 EduTech India. All rights reserved.</p>

      </div>
    </footer>
  );
}

export default Footer;
