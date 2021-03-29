import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.jpeg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Since my childhood, I have been a computer enthusiast. My interest in
              computers lead me to pursue my Bachelor's in Computer Science. This is where I realized how interesting data 
              analysis was and it's importance in everyday life. So I decided to learn more about Machine Learning, data analysis and joined Drexel University to continue my journey in the field of Data Science. I always try to look for & learn new programming concepts, technologies, frameworks and methodologies.
              <br />

              <br />I am fluent in classics like
              <i>
                <b className="purple"> Machine Learning, Deep Learning, Database Technologies, Data Visualization</b>
              </i>
              <br />
              {/* <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  Deep Learning and Natural Language Processing.
                </b>
              </i>
              <br /> */}
              {/* <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{"border-radius": "50%"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.github.com/harshitgeddam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshitgeddam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshitgeddam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
