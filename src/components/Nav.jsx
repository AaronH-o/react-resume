// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import Resume from '../assets/Aaron_Ho_Resume.pdf';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          About
        </Link>,
        <Link key={2} className="nav-link text-light" to="/experience">
          Experience
        </Link>,
        // TODO: change to button and add styling for tooltip on the bottom
        <a key={3} className="nav-link text-light" href={Resume}>
          Resume
        </a>,
      ]}
    />
  );
}
