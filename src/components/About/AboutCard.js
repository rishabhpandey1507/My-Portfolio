import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Rishabh Pandey</span> from <span className="purple">Haldwani, Uttarakhand, India</span>.
            <br />I'm pursuing a <span className="purple">Bachelor of Computer Applications (BCA)</span> at Graphic Era Hill University, with expected graduation in 2027.
            <br /><br />I enjoy learning through hands-on development and improving my problem-solving skills.
          </p>
          <ul>
            <li className="about-activity"><ImPointRight /> Building Java and web development projects 💻</li>
            <li className="about-activity"><ImPointRight /> Practising Data Structures and Algorithms 🧩</li>
            <li className="about-activity"><ImPointRight /> Exploring tools and technologies 📚</li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>"Learn consistently. Build thoughtfully. Improve every day."</p>
          <footer className="blockquote-footer">Rishabh Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
