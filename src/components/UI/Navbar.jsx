import { Link } from 'react-router-dom';
import Logo from '../../assets/heart.svg';
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/Aaron_Ho_Resume.pdf';

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} alt="Logo" width="50" height="40" class="d-inline-block align-text-top"/>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
            <Button className="d-flex gap-2" variant="outline-light" size="sm">
              <Link key={3} className="nav-link text-light" to={Resume} target="_blank" rel="noopener noreferrer">Resume</Link>
            </Button> 
          </ul>
        </div>
        <div> Aaron Ho </div>
      </div>
    </nav>
  );
}
