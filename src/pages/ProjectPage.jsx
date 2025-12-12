import ProjectCard from "../components/ProjectCard";

export default function ProjectPage() {
  const projects = [
    {
      title: "Vibe Check",
      description:
        "A full‑stack playlist‑building application using Node.js, Express, MySQL, and Handlebars. Users can authenticate, browse songs, and create custom playlists stored in a relational database.",
      stack: [
        "Node.js",
        "Express",
        "MySQL",
        "Handlebars",
        "Authentication",
        "Session Management",
      ],
      repo: "https://github.com/AaronH-o/Vibe_Check"
    },
    {
      title: "Social Network API",
      description:
        "A backend API for managing users, thoughts, reactions, and friendships. Built with MongoDB and Mongoose to support scalable social‑network‑style data relationships.",
      stack: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "CRUD Operations",
        "Reaction Subdocuments",
      ],
      repo: "https://github.com/AaronH-o/social-network-api"
    },
    {
      title: "Work Day Scheduler",
      description:
        "A daily planner that allows users to schedule tasks for each hour of the workday. Built with jQuery and Day.js, it color‑codes time blocks based on the current hour and saves events using localStorage.",
      stack: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "jQuery", 
        "Day.js", 
        "localStorage",
      ],
      repo: "https://github.com/AaronH-o/work-day-scheduler"
    },
    {
      title: "Weather Dashboard",
      description:
        "A dynamic weather application that retrieves current and 5‑day forecast data using the OpenWeather API. Features search history, UV index indicators, and responsive UI updates based on user input.",
      stack: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "jQuery", 
        "OpenWeather API", 
        "localStorage",
      ],
      repo: "https://github.com/AaronH-o/weather-dashboard"
    },
    {
      title: "Note Taker",
      description:
        "A full‑stack application that allows users to write, save, and delete notes. Built with Express.js on the backend and a clean, user‑friendly frontend for organizing tasks and reminders.",
      stack: [
        "Node.js", 
        "Express", 
        "UUID", 
        "REST API", 
        "JSON Storage", 
        "Heroku Deployment",
      ],
      repo: "https://github.com/AaronH-o/note-taker"
    },
    {
      title: "Book Search Engine",
      description:
        "A full‑stack MERN application that allows users to search for books using the Google Books API, save favorites, and manage their personal reading list. Refactored from a RESTful API to GraphQL with Apollo Server for improved efficiency.",
      stack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "GraphQL",
        "Apollo Server",
        "JWT Authentication",
        "Google Books API",
      ],
      repo: "https://github.com/AaronH-o/book-search-engine"
    }
  ];

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
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <ProjectCard
              title={project.title}
              description={project.description}
              stack={project.stack}
              repo={project.repo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
