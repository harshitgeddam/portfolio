import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            So id like to define myself as a curious person. I like the idea of trying new stuff, 
            whether it is concerned with tech, my subjects or life in general. I found my passion in Machine learning and Data Science, that's the reason I have joined Drexel, and I am currently pursing Data science at Drexel University. From the very beginning of my undergrad I was doing the projects related to Machine learning and data science, doing the projects helped me understand the machine learning workflow and the things more deeply. Apart from that im a calm and composed person with my head in the game. I try my best to understand what i do and apply them in different areas.
             I believe I am confident and possess a good smile which I always keep flaunting.
            {/* Hi Everyone, I am <span className="purple"> Harshit Geddam </span> */}
            {/* from <span className="purple"> Philadelphia, USA </span> */}
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Reading Financial News
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Invest in Stocks
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harshit Geddam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
