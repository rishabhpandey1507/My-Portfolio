import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import { SiHtml5, SiCss3, SiMysql } from "react-icons/si";

function Techstack() {
  const skills = [
    { name: "Java", image: Java }, { name: "Python", image: Python },
    { name: "C", icon: <span style={{fontWeight: 700}}>C</span> }, { name: "C++", image: C },
    { name: "JavaScript", image: Javascript }, { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> }, { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL", image: SQL }, { name: "React", image: ReactIcon },
    { name: "Tailwind CSS", image: Tailwind }, { name: "Git", image: Git },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={4} md={2} className="tech-icons" key={skill.name}>
          {skill.image ? <img src={skill.image} alt={skill.name} /> : <span style={{fontSize: "30px"}}>{skill.icon}</span>}
          <div className="tech-icons-text">{skill.name}</div>
        </Col>
      ))}
    </Row>
  );
}
export default Techstack;
