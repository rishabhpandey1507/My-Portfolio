import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"><h3>Designed &amp; Developed by Rishabh Pandey</h3></Col>
        <Col md="4" className="footer-copywright"><h3>Copyright © {year} RP</h3></Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons"><a href="https://github.com/rishabhpandey1507" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><AiFillGithub /></a></li>
            <li className="social-icons"><a href="https://linkedin.com/in/rishabh-pandey-b5a858326" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
