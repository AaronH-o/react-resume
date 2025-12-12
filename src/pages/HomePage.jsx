import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function HomePage() {
  const [modalData, setModalData] = React.useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  }
  
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        {/* Skills */}
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
                  <p className="align-self-end"><small>JavaScript, TypeScript, HTML/CSS, Java, C/C++, Python, R</small></p>
                </p>
              </div>
            </div>
          </div><div className="row p-2">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <p className="d-flex flex-column lead mb-0">
                  <h5 className="align-self-end">Frameworks/Tools</h5>
                  <p className="align-self-end"><small>React, Node.js, Express.js, Linux, Docker, SQL, MongoDB, AWS</small></p>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Education */}
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
                  <h5 className="align-self-end">University of California <small className="text-muted">- Berkeley, CA</small></h5>
                  <p className="align-self-end"><small>Full Stack Web Development Certificate</small></p>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h5><small className="text-muted">June 2024</small></h5>
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
                <h5><small className="text-muted">May 2022</small></h5>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="container experience-container">
          <div className="row p-2">
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h2>Professional Experience</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <p className="d-flex flex-column lead mb-0">
                <h5 className="align-self-end">The Arc of the East Bay <small className="text-muted">- San Leandro, CA</small></h5>
                  <p className="align-self-end"><small>IT Administrator</small></p>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h5><small className="text-muted">August 2019 - August 2020</small></h5>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="container projects-container">
          <div className="row p-2">
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h2>Projects</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <p className="d-flex flex-column lead mb-0">
                  {/* 
                    TODO: open modal on click with screenshots of project and link to the repository
                    Also look at offcanvas component with bottom placement
                  */}
                  <h5 className="align-self-end text-primary" type="button" onClick={() => openModal({
                    title: "Vibe Check",
                    link: "https://github.com/AaronH-o/Vibe_Check",
                    body: "Things used: ..."
                  })}>
                    Vibe Check
                  </h5>
                  {modalData && (
                    <Modal show onHide={closeModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>{modalData.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{modalData.body}</Modal.Body>
                      <Modal.Footer>
                        <Link to={modalData.link} target="_blank" rel="noopener noreferrer">
                          <h5>GitHub</h5>
                        </Link>
                      </Modal.Footer>
                    </Modal>
                  )}
                  <p className="align-self-end text-end"><small>A fullstack web application built with Node.js, Express, MySQL, and Handlebars that allows users to create and save custom playlists from a provided list of songs. User authentication is required to access and manage playlists.</small></p>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h5><small className="text-muted">April 2024</small></h5>
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
                  <h5 className="align-self-end text-primary" type="button" onClick={() => openModal({
                    title: "Social Network API",
                    link: "https://github.com/AaronH-o/social-network-api",
                    body: "Things used: ..."
                  })}>
                    Social Network API
                  </h5>
                  {modalData && (
                    <Modal show onHide={closeModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>{modalData.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{modalData.body}</Modal.Body>
                      <Modal.Footer>
                        <Link to={modalData.link} target="_blank" rel="noopener noreferrer">
                          <h5>GitHub</h5>
                        </Link>
                      </Modal.Footer>
                    </Modal>
                  )}
                  <p className="align-self-end text-end"><small>A Social Network API that provides endpoints for managing users, thoughts, reactions, and user friendships. It offers a backend system for developers to build social networking applications and models to a MongoDB database.</small></p>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h5><small className="text-muted">June 2024</small></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
