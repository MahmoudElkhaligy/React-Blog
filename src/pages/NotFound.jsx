import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>
        <strong>404 </strong>Page Not found
      </p>
      <Link to="/" className="back-home">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
