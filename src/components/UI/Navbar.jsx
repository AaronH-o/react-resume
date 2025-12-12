import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Logo from '../../assets/heart.svg';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Resume from '../../assets/Aaron_Ho_Resume.pdf';

export default function Nav({ links }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-dark" : "bg-secondary"} sticky-top`}>
      <div className="container-fluid">

        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            width="50"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>

        {/* Social Icons */}
        <SocialIcon network="github" fgColor="white" bgColor="none" target="_blank" url="https://github.com/AaronH-o/" />
        <SocialIcon network="linkedin" fgColor="white" bgColor="none" target="_blank" url="https://www.linkedin.com/in/aaron-ho-7305332a3/" />

        {/* Resume Button */}
        <Button
          as={Link}
          to={Resume}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline-light"
          size="sm"
          className="d-flex mx-4 gap-2"
        >
          Resume
        </Button>


        {/* Dark Mode Toggle */}
        <button
          className="btn btn-outline-light d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <i className="bi bi-sun-fill fs-5"></i>
          ) : (
            <i className="bi bi-moon-fill text-light fs-5"></i>
          )}
        </button>

        <div className="text-light ms-3"> Aaron Ho </div>
      </div>
    </nav>
  );
}
