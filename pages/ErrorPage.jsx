import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Path not found</h2>
      <p>
        {error?.statusText || error?.message || "The page you are looking for does not exist."}
      </p>

      <Link to="/">
        <button className="home-btn">Return to Home</button>
      </Link>
    </div>
  );
};