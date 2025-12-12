export default function ProjectCard({ title, description, stack, repo }) {
  return (
    <div className="card shadow-sm mb-4 p-3">
      <h3 className="text-primary">{title}</h3>
      <p className="text-muted">{description}</p>

      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary"
      >
        View Repository
      </a>
    </div>
  );
}
