import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {
  return (
    <div className="container pt-4">

      {/* PAGE HEADER */}
      <div className="mb-5 text-center">
        <h1 className="text-primary fw-bold">Projects</h1>
        <p className="lead text-muted">
          A collection of full‑stack, backend, and API‑driven applications I've built using modern web technologies.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="row">

        {/* VIBE CHECK */}
        <div className="col-12 col-md-6 col-lg-4">
          <ProjectCard
            title="Vibe Check"
            description="A full‑stack playlist‑building application using Node.js, Express, MySQL, and Handlebars. Users can authenticate, browse songs, and create custom playlists stored in a relational database."
            stack={[
              "Node.js",
              "Express",
              "MySQL",
              "Handlebars",
              "Authentication",
              "Session Management"
            ]}
            repo="https://github.com/AaronH-o/Vibe_Check"
          />
        </div>

        {/* SOCIAL NETWORK API */}
        <div className="col-12 col-md-6 col-lg-4">
          <ProjectCard
            title="Social Network API"
            description="A backend API for managing users, thoughts, reactions, and friendships. Built with MongoDB and Mongoose to support scalable social‑network‑style data relationships."
            stack={[
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "CRUD Operations",
              "Reaction Subdocuments"
            ]}
            repo="https://github.com/AaronH-o/social-network-api"
          />
        </div>

        {/* ADD MORE PROJECTS HERE */}
        <div className="col-12 col-md-6 col-lg-4">
          <ProjectCard
            title="Another Project"
            description="A placeholder for additional projects. Duplicate this card to add more items to your portfolio."
            stack={[
              "Tech 1",
              "Tech 2",
              "Tech 3"
            ]}
            repo="#"
          />
        </div>

        {/* ADD MORE PROJECTS HERE */}
        <div className="col-12 col-md-6 col-lg-4">
          <ProjectCard
            title="Another Project"
            description="A placeholder for additional projects. Duplicate this card to add more items to your portfolio."
            stack={[
              "Tech 1",
              "Tech 2",
              "Tech 3"
            ]}
            repo="#"
          />
        </div>

        {/* ADD MORE PROJECTS HERE */}
        <div className="col-12 col-md-6 col-lg-4">
          <ProjectCard
            title="Another Project"
            description="A placeholder for additional projects. Duplicate this card to add more items to your portfolio."
            stack={[
              "Tech 1",
              "Tech 2",
              "Tech 3"
            ]}
            repo="#"
          />
        </div>

        {/* ADD MORE PROJECTS HERE */}
        <div className="col-12 col-md-6 col-lg-4">
          <ProjectCard
            title="Another Project"
            description="A placeholder for additional projects. Duplicate this card to add more items to your portfolio."
            stack={[
              "Tech 1",
              "Tech 2",
              "Tech 3"
            ]}
            repo="#"
          />
        </div>

      </div>
    </div>
  );
}
