export default function Footer() {
  return (
    <footer className="footer bg-light text-dark py-4 mt-5 border-top">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Aaron Ho · Built with React
        </p>
        <div className="footer-links">
          <a
            href="mailto:aaron@aadho.me"
            className="text-dark mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://github.com/AaronH-o/"
            className="text-dark mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-ho-7305332a3/"
            className="text-dark mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
