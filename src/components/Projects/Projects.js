import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import join from "../../Assets/Projects/join.png"
import da3kmu from "../../Assets/Projects/codeEditor.png"
import TM from "../../Assets/Projects/emotion.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={da3kmu}
              isBlog={false}
              title="DA3KMU"
              description="Data protection through statistical analysis and adaptive anonymization of personal data for SMEs."
              demoLink="https://www.da3kmu.de"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={join}
              isBlog={false}
              title="JoinSwitch.co"
              description="The shockingly simple way to pool money and spend with a group. With every group, you get a virtual Visa debit card."
              demoLink="https://www.joinswitch.co"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TM}
              isBlog={false}
              title="Comprehensive survey and analysis of Tone Mappers"
              description="Detailed study and evaluation of various tone mapping techniques and algorithms."
              ghLink="https://github.com/zukhruf-basheer20/Comprehensive-survey-and-analysis-of-tone-mappers"
              demoLink="https://scholar.google.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
