import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Harshit Geddam</h3>
        </Col>
       
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.github.com/harshitgeddam"
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harshitgeddam"
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/harshitgeddam/"
                style={{ color: "white" }}
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
