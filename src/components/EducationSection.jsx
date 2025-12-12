import React from "react";

export default function EducationSection() {
  return (
    <div className="container education-container mb-5">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="features-icons-item">
            <i className="bi-window m-auto text-primary" />
            <h2>Education</h2>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="features-icons-item">
            <i className="m-auto text-primary" />
            <div className="lead">
              <h5>
                University of California <small className="text-muted">— Berkeley, CA</small>
              </h5>
              <small>Full Stack Web Development Certificate</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 offset-md-8 text-muted">
          <small>June 2024</small>
        </div>
      </div>

      <div className="row g-4 mt-3">
        <div className="col-12 col-md-8 offset-md-4">
          <div className="features-icons-item">
            <i className="m-auto text-primary" />
            <div className="lead">
              <h5>
                Laney College <small className="text-muted">— Oakland, CA</small>
              </h5>
              <small>C.A. in Computer Programming with Java</small><br />
              <small>A.S. in Science, Math, and CIS/Programming</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 offset-md-8 text-muted">
          <small>May 2022</small>
        </div>
      </div>
    </div>
  );
}
