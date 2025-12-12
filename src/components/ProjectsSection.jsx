import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default function ProjectsSection() {
  const [modalData, setModalData] = React.useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <div className="container projects-container mb-5">
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="features-icons-item">
            <i className="bi-window m-auto text-primary" />
            <h2>Select Projects</h2>
          </div>
        </div>

        {/* Vibe Check */}
        <div className="col-12 col-md-8">
          <div className="features-icons-item">
            <i className="bi-terminal m-auto text-primary" />
            <div className="lead">
              <h5
                className="text-primary"
                type="button"
                onClick={() =>
                  openModal({
                    title: "Vibe Check",
                    link: "https://github.com/AaronH-o/Vibe_Check",
                    body: "Things used: ..."
                  })
                }
              >
                Vibe Check
              </h5>
              <small>
                A fullstack web application built with Node.js, Express, MySQL, and Handlebars that allows users to create and save custom playlists.
              </small>
            </div>
          </div>
        </div>

        {/* Social Network API */}
        <div className="col-12 col-md-8 offset-md-4">
          <div className="features-icons-item">
            <i className="bi-terminal m-auto text-primary" />
            <div className="lead">
              <h5
                className="text-primary"
                type="button"
                onClick={() =>
                  openModal({
                    title: "Social Network API",
                    link: "https://github.com/AaronH-o/social-network-api",
                    body: "Things used: ..."
                  })
                }
              >
                Social Network API
              </h5>
              <small>
                A backend API for managing users, thoughts, reactions, and friendships using MongoDB and Mongoose.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Modal */}
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
    </div>
  );
}
