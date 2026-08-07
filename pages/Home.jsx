import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>॥ Ramayana Encyclopedia ॥</h1>
      <p>
        Explore the timeless epic through its characters, events, wisdom, and
        sacred journey.
      </p>

      <Link to="/characters">
        <button className="home-btn">Explore Characters</button>
      </Link>
    </div>
  );
};