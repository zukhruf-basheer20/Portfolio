import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Zukhruf Bashir </span>
            from <span className="purple">Pakistan.</span>
            <br />
            I am currently employed as a software developer at Fraunhofer IDMT.
            <br />
            I am currently pursuing a Master's in Research in Computer and Systems Engineering from Technische universität Ilmenau.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Front-End Development Webinars
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create solutions that have a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Zukhruf Bashir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
