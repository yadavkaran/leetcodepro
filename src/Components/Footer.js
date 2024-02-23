// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUserSlash, faX} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4 mt-5">
      <Container>
        <Row>
          <Col>
            <h5>Contact Us</h5>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: contact@leetcodepro.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> Phone: +1 (123) 456-7890</p>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <p><FontAwesomeIcon icon={faX} /> X</p>
            <p><FontAwesomeIcon icon={faUserSlash} /> Facebook</p>
            <p><FontAwesomeIcon icon={faUserSlash} /> Instagram</p>
          </Col>
          <Col>
            <h5>About Us</h5>
            <p>Leetcode Pro - Your Coding Companion</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
