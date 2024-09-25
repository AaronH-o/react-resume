import { Link } from 'react-router-dom';
import Logo from '../../assets/heart.svg';

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
          </ul>
        </div>
      </div>
    </nav>
  );
}
