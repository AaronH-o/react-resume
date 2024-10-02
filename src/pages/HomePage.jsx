import { Link } from 'react-router-dom';


export default function HomePage() {
  
  return (
    <div className="container pt-4">
      <a className="display-5">This is my home! my name is Aaron</a>
      <section className="features-icons bg-light text-center m-4">
        <div className="container education-container">
          <div className="row p-2">
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h2>Education</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <p className="d-flex flex-column lead mb-0">
                  <h5 className="align-self-end">University of California Extension <small className="text-muted">- Berkeley, CA</small></h5>
                  <p className="align-self-end"><small>Full Stack Web Development Bootcamp</small></p>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h5><small className="text-muted">December 2023 - June 2024</small></h5>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <p className="d-flex flex-column lead mb-0">
                  <h5 className="align-self-end">Laney College <small className="text-muted">- Oakland, CA</small></h5>
                  <p className="align-self-end"><small>C.A. in Computer Programming with Java</small></p>
                  <p className="align-self-end"><small>A.S. in Science, Math, and CIS/Programming</small></p>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h5><small className="text-muted">August 2018 - May 2022</small></h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container skills-container">
          <div className="row p-2">
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h2>Skills</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <p className="d-flex flex-column lead mb-0">
                  <h5 className="align-self-end">Programming Languages</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
