
import { Link } from "react-router-dom";
import "./NotFound.css"; 

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="home-link">
        ⬅ Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
