import React, { useState, createRef } from "react";
import "./contact.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setLoading] = useState(false);
  const recaptchaRef = createRef();;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTime(new Date().toUTCString());
    const token = recaptchaRef.current.execute();
    const templateParams = {
      "first-name": fname,
      "last-name": lname,
      "email": email,
      "phone": phone,
      "message": message,
      "time": time,
      "g-recaptcha-response": token
    }; 
    emailjs.send('zoho', 'default_template', templateParams, 'guRHXdfHUTXd64TTc')
      .then((result) => console.log(result.text), (error) => console.log(error.text));
    setLoading(false)
  }

  return (
    <div className="Contact" id="Contact">
      <Container id="contact-content">
        <h1>Contact Me</h1>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col xs={6}>
              <FloatingLabel label="First Name*">
                <Form.Control 
                  type="text" 
                  name="first-name" 
                  placeholder="First Name" 
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required 
                />
              </FloatingLabel>
            </Col>

            <Col xs={6}>
              <FloatingLabel label="Last Name*">
                <Form.Control 
                  type="text" 
                  name="last-name" 
                  placeholder="Last Name" 
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required 
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <FloatingLabel label="Email*">
                <Form.Control 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </FloatingLabel>
            </Col>

            <Col xs={6}>
              <FloatingLabel label="Phone">
                <Form.Control 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <FloatingLabel label="Message*">
                <Form.Control 
                  as="textarea" 
                  style={{ height: "7.5rem", resize: "none" }} 
                  name="message" 
                  placeholder="Message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <input type="hidden" value={time} />

          <Row>
            <Col xs={12} className="d-grid">
              <Button 
                type="submit" 
                size="lg" 
                name="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting…' : 'Submit'}
              </Button>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LdcQJ8jAAAAAOvPEHbiNARU5YjZzqdDPUDUb6XV"
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;