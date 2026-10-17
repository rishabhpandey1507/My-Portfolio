
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm Rishabh Pandey, a BCA student at
              <b className="purple">
                {" "}Graphic Era Hill University
              </b>
              , passionate about software development and technology.
              I expect to graduate in 2027.
              <br />
              <br />

              I have a strong foundation in
              <i>
                <b className="purple">
                  {" "}Java, Python, C++, and C
                </b>
              </i>
              , along with web technologies like HTML, CSS, and
              JavaScript.
              <br />
              <br />

              I enjoy building
              <i>
                <b className="purple">
                  {" "}web applications, database-driven systems,
                  and practical software projects
                </b>
              </i>
              that solve real-world problems.
              <br />
              <br />

              I'm also strengthening my knowledge of
              <b className="purple">
                {" "}Data Structures and Algorithms, Object-Oriented
                Programming, and MySQL
              </b>
              {" "}to improve my problem-solving and development skills.
              <br />
              <br />

              My goal is to become a
              <b className="purple">
                {" "}Software Developer
              </b>
              , contribute to meaningful projects, and gain hands-on
              experience through internships and collaborative development.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Rishabh Pandey avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
