import Logo from '../../assets/heart.svg';
import Resume from '../../assets/Aaron_Ho_Resume.pdf';

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <img src={Logo} alt="Logo" width="50" height="40" class="d-inline-block align-text-top"/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
