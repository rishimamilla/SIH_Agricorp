import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Include a CSS file for custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row className="justify-content-center text-center py-4">
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/predict">Predict Crop Disease</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Address: CBIT, Gandipet, Hyderabas, TG, In.</p>
            <p>Email: support@farmease.com</p>
            <p>Phone: +91 81859 29110</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-text">
              &copy; 2024 Farm-Ease. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
