import React from "react";

export default function ExperienceSection() {
  return (
    <div className="container experience-container mb-5">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="features-icons-item">
            <i className="bi-window m-auto text-primary" />
            <h2>Professional Experience</h2>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="features-icons-item">
            <i className="bi-terminal m-auto text-primary" />
            <div className="lead">
              <h5>
                The Arc of the East Bay <small className="text-muted">— San Leandro, CA</small>
              </h5>
              <small>IT Administrator</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 offset-md-8 text-muted">
          <small>August 2019 – August 2020</small>
        </div>
      </div>
    </div>
  );
}
