import React from "react";
import "./contact.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <Container id="contact-content">
        <h1>Contact Me</h1>

        <Form action="https://formsubmit.co/e78a3cc9aeeeb410fecf9d753745d6da" method="post">
          <Row className="mb-3">
            <Col xs={6}>
              <FloatingLabel label="First Name*">
                <Form.Control type="text" name="first-name" placeholder="First Name" required />
              </FloatingLabel>
            </Col>

            <Col xs={6}>
              <FloatingLabel label="Last Name*">
                <Form.Control type="text" name="last-name" placeholder="Last Name" required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <FloatingLabel label="Email*">
                <Form.Control type="email" name="email" placeholder="Email Address" autoCapitalize="none" required />
              </FloatingLabel>
            </Col>

            <Col xs={6}>
              <FloatingLabel label="Phone">
                <Form.Control type="tel" name="phone" placeholder="Phone Number" pattern="[0-9 ()+-]*" />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <FloatingLabel label="Message*">
                <Form.Control as="textarea" style={{ height: 116, resize: "none" }} name="message" placeholder="Message" required></Form.Control>
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col xs={12} className="d-grid">
              <Button type="submit" size="lg" name="submit">Submit</Button>
            </Col>
          </Row>

          <input type="hidden" name="_autoresponse" value="Thank you! Your message has been sent to Anthony. You can expect to receive a response within 48 hours." />
          <input type="hidden" name="_next" value="https://www.anthonydu.com/?form=submitted#contact" />

        </Form>
      </Container>
    </div>
  );
}

export default Contact;