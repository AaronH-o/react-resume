import { Link } from 'react-router-dom';


export default function HomePage() {
  
  return (
    <div className="container pt-4">
      <a>This is the home! my name is Aaron</a>
      <Link className="button" to="/experience"> Enter </Link>
    </div>
  );
}
