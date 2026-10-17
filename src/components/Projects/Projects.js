import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import home from "../../Assets/Projects/home.png";
import vote from "../../Assets/Projects/vote.png";
import banner from "../../Assets/Projects/banner.png";

function Projects() {
  const github = "https://github.com/rishabhpandey1507";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">My <strong className="purple">Projects</strong></h1>
        <p style={{ color: "white" }}>A selection of projects I've built or am developing as I grow my software development skills.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={home} isBlog={false} title="Employee Database Management System"
              description="A Java web application for managing employee records with a MySQL database. The project includes employee CRUD operations and supports exporting records to Excel and PDF. Built with Java, Servlets, JSP, Maven, Tomcat, and MySQL."
              ghLink="https://github.com/rishabhpandey1507/employee-dbms-project01" />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={vote} isBlog={false} title="Online Voting System"
              description="A Flask-based voting application concept with voter registration, candidate management, one-vote-per-user flow, voting session controls, and visual results. Built while learning Python, Flask, and web application security basics."
              ghLink={github} />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={banner} isBlog={false} title="Digital Steganography"
              description="Digital Steganography is a secure, user-friendly desktop application built with Java Swing and MySQL. It allows users to covertly embed secret UTF-8 text messages into standard image files using Least Significant Bit (LSB) steganography without altering the visual appearance of the cover image."
              ghLink="https://github.com/rishabhpandey1507/Digital_Steganography/tree/master" />
          </Col>
        </Row>
        <p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
          Visit my <a href={github} target="_blank" rel="noreferrer" className="purple">GitHub profile</a> for more repositories.
        </p>
      </Container>
    </Container>
  );
}
export default Projects;