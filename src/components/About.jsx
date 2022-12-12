import React from "react";
import "./about.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ubc from '../images/ubc.jpg';
import ubcpsych from '../images/ubcpsych.jpg';
import ncsu from '../images/ncsu.png';
import nclib from '../images/nclib.png';
import ncssc from '../images/ncssc.jpg';

const About = () => {
  return (
    <div className="About" id="About">
      <Container id="about-content">
        <div id="about-header">
          <h1>About Me</h1>
        </div>

        <h3>Education</h3>
        <Row>
          <Col sm={6}>
            <a href="https://www.linkedin.com/school/universityofbc/">
              <img src={ubc} alt="UBC Logo" />
              <h5 className="mb-0">University of<br/>British Columbia</h5>
            </a>
            <p><small>Computer Science BSc | 2022 - Present</small></p>
          </Col>
          <Col sm={6}>
            <a href="https://www.linkedin.com/school/north-carolina-state-university/">
              <img src={ncsu} alt="NCSU Logo" />
              <h5 className="mb-0">North Carolina<br/>State University</h5>
            </a>
            <p><small>Comp. Engr. | 3.927/4.0 | 2021 - 2022</small></p>
          </Col>
        </Row>

        <h3>Experience</h3>
        <Row>
          <Col sm={6}>
            <a href="https://www.linkedin.com/company/ubc-department-of-psychology/">
              <img src={ubcpsych} alt="UBCPsych Logo"/>
              <h5 className="mb-0">UBC Dept.<br/>of Psychology</h5>
            </a>
            <p><small>Jr. IT Support Analyst | Sep '22 - Present</small></p>
          </Col>
          <Col sm={6}>
            <a href="https://www.linkedin.com/company/ncsu-libraries/">
              <img src={nclib} alt="NCSULib Logo" />
              <h5 className="mb-0">NC State<br/>University Libraries</h5>
            </a>
            <p><small>IT Student Technician | May '22 - Jul '22</small></p>
          </Col>
          <Col sm={6}>
            <a href="https://www.linkedin.com/company/nc-state-campus-enterprises/">
              <img src={ncssc} alt="NCSSC Logo" />
              <h5 className="mb-0">NC State<br/>Student Centers</h5>
            </a>
            <p><small>Operations Assistant | Oct '21 - Feb '22</small></p>
          </Col>
        </Row>

        <Row className="pt-3 d-flex justify-content-center" style={{ borderTop: "1px solid white" }}>
          <Col sm="auto" className="d-flex align-items-center">
            <h3 className="mb-0">Skills</h3>
          </Col>
          <Col sm="auto">
            <h5 className="mb-0" id="skills">Computer Science & Engineering<br />Photography, Videography, & Editing</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;