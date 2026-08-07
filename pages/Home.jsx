import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const BowIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none">
    <path
      d="M20 6 C10 20, 10 44, 20 58"
      stroke="#f4c430"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line x1="20" y1="6" x2="20" y2="58" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
  </svg>
);

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none">
    <line x1="6" y1="32" x2="54" y2="32" stroke="#f4c430" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M54 32 L44 24 M54 32 L44 40" stroke="#f4c430" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 32 L14 28 M6 32 L14 36" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Home = () => {
  // Generate stable random positions once per mount
  const stars = useMemo(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        top: Math.random() * 40,
        left: Math.random() * 60,
        delay: i * 3.5 + Math.random() * 2,
      })),
    []
  );

  return (
    <div className="home-container">
      {/* Background animation layers */}
      <div className="stars-layer" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        {shootingStars.map((s) => (
          <span
            key={s.id}
            className="shooting-star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="floating-icons" aria-hidden="true">
        <BowIcon className="float-icon icon-1" />
        <ArrowIcon className="float-icon icon-2" />
        <ArrowIcon className="float-icon icon-3" />
        <BowIcon className="float-icon icon-4" />
      </div>

      {/* Foreground content */}
      <div className="home-content">
        <h1>Ramayana Encyclopedia 🏹 </h1>
        <p>
          Explore the timeless epic through its characters, events, wisdom, and
          sacred journey.
        </p>

        <Link to="/characters">
          <button className="home-btn">Explore Characters</button>
        </Link>
         <Link to="/kandas">
          <button className="home-btn">Explore Kandas</button>
        </Link>
      </div>
    </div>
  );
};