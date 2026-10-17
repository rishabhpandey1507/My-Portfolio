import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color: "white", overflowX: "auto" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">GitHub Activity</strong>
      </h1>
      <GitHubCalendar username="rishabhpandey1507" blockSize={14} blockMargin={4} color="#c084f5" fontSize={14} />
    </Row>
  );
}
export default Github;
