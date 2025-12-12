import React from "react";

export default function SkillsSection() {
  return (
    <div className="container skills-container mb-5">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="features-icons-item">
            <i className="bi-window m-auto text-primary" />
            <h2>Skills</h2>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="features-icons-item">
            <i className="bi-terminal m-auto text-primary" />
            <div className="lead">
              <h5>Programming Languages</h5>
              <small>JavaScript, TypeScript, HTML/CSS, Java, C/C++, Python, R</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8 offset-md-4">
          <div className="features-icons-item">
            <i className="bi-terminal m-auto text-primary" />
            <div className="lead">
              <h5>Frameworks/Tools</h5>
              <small>React, Node.js, Express.js, Linux, Docker, SQL, MongoDB, AWS</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
